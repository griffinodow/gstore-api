import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import catalog from '../routes/catalog'
import order from '../routes/order'
import payment from '../routes/payment'

/**
 * Initializes the express server.
 */
export const initExpress = async () => {
  // Configure
  const app = express()
  app.set('trust proxy', true)
  app.use(cors())
  app.use(express.json())
  app.use('/catalog', catalog)
  app.use('/order', order)
  app.use('/payment', payment)

  // Errors
  app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(error.message || 'Unknown server error')
    res.status(error.status || 500).json({
      status: 'error',
      message: error.message
    }).end()
  })

  // Init
  await new Promise<void>((resolve) => {
    app.listen(80, () => resolve())
  })
}
