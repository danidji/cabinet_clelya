// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from "cors"
import initMiddleware from '@/back-end/services/init.middleware'

import PaypalService from '@/back-end/services/paypal.service'
import { AxiosError } from 'axios'

const orderID = "test"

const cors = initMiddleware(Cors({ methods: ['POST'] }))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      await cors(req, res)

      const { amount } = req.body

      const result = await PaypalService.createPayment(amount)

      res.status(200).json(result)

    } catch (error: any) {
      res.status(500)
    }
  }
}
