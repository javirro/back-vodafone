import { Pool } from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL
let dbClient = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})
if (DATABASE_URL) {
  const params = new URL(DATABASE_URL)
  const config = {
    host: params.hostname,
    user: params.username,
    port: Number(params.port),
    password: params.password,
    database: params.pathname.split('/')[1],
  }
  dbClient = new Pool(config)
}

export default dbClient

export const ALREADY_EXIST_CODE = '23505'
