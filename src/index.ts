import { initExpress } from './lib/express'
import { Cache } from './lib/cache'

;(async () => {
  try {
    await initExpress()
    Cache.init()
    console.log('Server initialized')
  } catch (error) {
    console.error(error)
  }
})()
