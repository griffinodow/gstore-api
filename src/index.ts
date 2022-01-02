import express from './lib/express'
import { Cache } from './lib/cache'

;(async () => {
  try {
    await express()
    Cache.init()
    console.log('Server initialized')
  } catch (error) {
    console.error(error)
  }
})()
