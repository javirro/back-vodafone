export type Device = {
  id: number
  name: string
  phone: string
  lastConnection: number
  lat: number
  lon: number
}

export type RawDeviceFromDb = Omit<Device, 'lastConnection'> & { last_connection: number; created_at: string }

export type AddDeviceForm = Omit<Device, 'id'>
