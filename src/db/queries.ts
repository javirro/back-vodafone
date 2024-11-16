import { RawDeviceFromDb } from 'src/types/types'
import dbClient from './connectionDB'

export const getDevicesQuery = async (): Promise<RawDeviceFromDb[]> => {
  const res = await dbClient.query('SELECT * FROM devices')
  const devices: RawDeviceFromDb[] = res.rows
  return devices
}

export const getDevicesPaginatedQuery = async (limit: number, offset: number): Promise<RawDeviceFromDb[]> => {
  const res = await dbClient.query('SELECT * FROM devices LIMIT $1 OFFSET $2', [limit, offset])
  const devices: RawDeviceFromDb[] = res.rows
  return devices
}

export const getDeviceByIdQuery = async (id: number): Promise<RawDeviceFromDb> => {
  const res = await dbClient.query('SELECT * FROM devices WHERE id = $1', [id])
  const devices: RawDeviceFromDb = res.rows[0]
  return devices
}

export const deleteDeviceByIdQuery = async (id: number): Promise<void> => {
  await dbClient.query('DELETE FROM devices WHERE id = $1', [id])
}

export const addDeviceQuery = async (values: [string, string, number, number, number]): Promise<void> => {
  await dbClient.query('INSERT INTO devices (name, phone, last_connection, lat, lon) VALUES ($1, $2, $3, $4, $5)', values)
}

export const updateDeviceByIdQuery = async (id: number, values: [string, string, number, number, number]): Promise<void> => {
  await dbClient.query('UPDATE devices SET name = $1, phone = $2, last_connection = $3, lat = $4, lon = $5 WHERE id = $6', [...values, id])
}
