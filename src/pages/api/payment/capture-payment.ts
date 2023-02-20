// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from "cors"
import initMiddleware from '@/services/api/init.middleware'

import PaypalService from '@/services/api/paypal.service'

const cors = initMiddleware(Cors({ methods: ['POST'] }))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      await cors(req, res)

      const { orderId } = req.body

      const result = await PaypalService.capturePayment(orderId)

      res.status(200).json(result)

    } catch (error: any) {

      res.status(500).send(error.message)
    }
  }
}
