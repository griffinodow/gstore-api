import express from 'express'
import { square } from '../lib/square'

const router = express.Router()

/**
 * Creates a payment via Square and an existing order.
 */
router.post('/', async (req, res, next) => {
  try {
    const orderResponse = await square.ordersApi.retrieveOrder(req.body.orderId)

    const response = await square.paymentsApi.createPayment({
      sourceId: req.body.sourceId,
      amountMoney: {
        amount: orderResponse!.result!.order!.totalMoney!.amount,
        currency: orderResponse!.result!.order!.totalMoney!.currency
      },
      orderId: req.body.orderId,
      idempotencyKey: req.body.idempotencyKey
    })
    if (response) {
      res.status(200).json({
        status: 'success',
        data: null as null
      })
    } else {
      res.status(400).json({
        status: 'fail',
        data: null as null
      })
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

export default router
