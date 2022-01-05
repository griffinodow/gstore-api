import express from 'express'
import { square } from '../lib/square'
import { cache } from '../lib/cache'

const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const filter = req.body.lineItems.map((item: { itemId: string; catalogObjectId: string; basePriceMoney: { amount: number; currency: string } }) => {
      const items = cache!.catalog!.items.find(entry => entry.id === item.itemId)
      const result = items!.variations.find(variation => variation.id === item.catalogObjectId)
      if (result) {
        item.basePriceMoney = {
          amount: result.price,
          currency: 'CAD'
        }
      }
      return item
    })

    req.body.lineItems = filter
    const response = await square.ordersApi.createOrder({
      order: req.body
    })

    res.status(200).json({
      status: 'success',
      data: {
        order: {
          id: response!.result!.order!.id as string,
          totalMoney: Number(response!.result!.order!.totalMoney!.amount)
        }
      }
    })
  } catch (error) {
    console.error(error)
    next(error)
  }
})

export default router
