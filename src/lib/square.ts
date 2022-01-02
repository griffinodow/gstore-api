import { Client, Environment } from 'square'

export const square = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.GS_SQUARE_ACCESS_TOKEN
})
