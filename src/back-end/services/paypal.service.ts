import axios from "axios"

const AUTH_ID = `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_APP_SECRET}`

const PAYPAL_URL = 'https://api-m.sandbox.paypal.com'

const generateAccessToken = async (): Promise<string> => {
  const auth = Buffer.from(AUTH_ID).toString('base64')
  const body = 'grant_type=client_credentials'
  const basicAuth = `Basic ${auth}`
  const contentType = 'text/plain'

  const response = await axios.post(
    `${PAYPAL_URL}/v1/oauth2/token`,
    body,
    {
      headers: {
        "Authorization": basicAuth,
        "Content-Type": contentType
      }
    },
  )

  return response.data.access_token
}

const createPayment = async (amount: any): Promise<any> => {

  const accessToken = await generateAccessToken()
  const url = `${PAYPAL_URL}/v2/checkout/orders`
  const bearerAuth = `Bearer ${accessToken}`
  const contentType = 'application/json'

  const data = JSON.stringify({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: amount
        }
      }
    ]
  })

  const response = await axios.post(
    url,
    data,
    {
      headers: {
        "Authorization": bearerAuth,
        "Content-Type": contentType
      }
    },
  )

  return response.data
}

const capturePayment = async (orderId: string): Promise<any> => {

  try {

    const accessToken = await generateAccessToken()
    const url = `${PAYPAL_URL}/v2/checkout/orders/${orderId}/capture`
    const bearerAuth = `Bearer ${accessToken}`
    const contentType = 'application/json'

    const response = await axios.post(
      url,
      {},
      {
        headers: {
          "Authorization": bearerAuth,
          "Content-Type": contentType
        }
      },
    )

    return response.data
  } catch (error: any) {
    console.log({ error });

    throw new Error(error.message)
  }
}

const PaypalService = {
  createPayment,
  capturePayment
}

export default PaypalService

