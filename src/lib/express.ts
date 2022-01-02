import express, { Request, Response } from 'express'
import cors from 'cors'
import catalog from '../routes/catalog'
import order from '../routes/order'

export default async () => {
  const app = express()
  app.set('trust proxy', true)
  app.use(cors())
  app.use(express.json())

  // Routes
  app.use('/catalog', catalog)
  app.use('/order', order)

  // Server level errors
  app.use((error: any, _req: Request, res: Response) => {
    console.error(error.message || 'Unknown server error')
    res.status(error.status || 500).json({
      status: 'error',
      message: error.message
    }).end()
  })

  // Initialize
  await new Promise<void>((resolve) => {
    app.listen(4000, () => resolve())
  })
  console.log('Express initialized')
}
