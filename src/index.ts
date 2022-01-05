import { initExpress } from './lib/express'
import { initCache } from './lib/cache'

;(async () => {
  try {
    await initExpress()
    console.log('Express initialized')
    await initCache()
    console.log('Cache initialized')
    console.log('Server initialized')
  } catch (error) {
    console.error(error)
  }
})()
