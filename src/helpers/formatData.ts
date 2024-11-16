import { RawDeviceFromDb, Device } from 'src/types/types'

export const formatDevices = (devices: RawDeviceFromDb[]): Device[] => {
  return devices.map((device) => {
    return {
      id: device.id,
      name: device.name,
      phone: device.phone,
      lastConnection: device.last_connection,
      lat: device.lat,
      lon: device.lon,
    }
  })
}
