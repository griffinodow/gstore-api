import express from 'express'
import { cache } from '../lib/cache'

const router = express.Router()

/**
 * Get request route that serves the catalog.
 */
router.get('/', async (_req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        catalog: cache.catalog
      }
    })
  } catch (error) {
    console.error(error)
    next(error)
  }
})

export default router
