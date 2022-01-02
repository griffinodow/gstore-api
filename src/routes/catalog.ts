import express from 'express'
import { Cache } from '../lib/cache'

const router = express.Router()

router.get('/', async (_req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        catalog: Cache.catalog
      }
    })
  } catch (error) {
    console.error(error)
    next(error)
  }
})

export default router
