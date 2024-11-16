import { RawDeviceFromDb } from 'src/types/types'
import dbClient from './connectionDB'

export const getDevices = async () => {
  const devices = await dbClient.query<RawDeviceFromDb[]>('SELECT * FROM devices')
  console.log(devices)
}

export const getDeviceById = async (id: number) => {
  const device = await dbClient.query<RawDeviceFromDb>('SELECT * FROM devices WHERE id = $1', [id])
  console.log(device)
}

export const deleteDeviceById = async (id: number) => {
  await dbClient.query('DELETE FROM devices WHERE id = $1', [id])
}

export const createDevice = async (values: [string, string, number, number, number]) => {
  await dbClient.query('INSERT INTO devices (name, phone, last_connection, lat, lon) VALUES ($1, $2, $3, $4, $5)', values)
}
