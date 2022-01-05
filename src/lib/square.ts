import { Client, Environment } from 'square'

/**
 * Initializes the square client.
 */
export const square = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.GS_SQUARE_ACCESS_TOKEN
})
