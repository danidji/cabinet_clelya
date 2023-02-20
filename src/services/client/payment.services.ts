import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://cabinet-clelya-voyance.com/api",
  headers: {
    "Accept": "*/*",
    "Content-Type": "application/json",
  },
})

const createPayment = async (amount: number): Promise<any> => {
  const response = await instance.post('/payment/create-payment', { amount })
  return response.data.id
}

const capturePayment = async (orderId: string): Promise<any> => {
  const response = await instance.post('/payment/capture-payment', { orderId })
  return response.data
}

const PaymentService = {
  createPayment,
  capturePayment
}

export default PaymentService