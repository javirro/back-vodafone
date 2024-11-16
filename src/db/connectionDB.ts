import { Pool } from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()

const dbClient = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

export default dbClient

export const ALREADY_EXIST_CODE = '23505'
