import { Injectable } from '@nestjs/common'
import { addDeviceQuery, deleteDeviceByIdQuery, getDeviceByIdQuery, getDevicesQuery } from 'src/db/queries'
import { formatDevices } from 'src/helpers/formatData'
import { Device } from 'src/types/types'

@Injectable()
export class DevicesService {
  async getDevices(): Promise<Device[]> {
    const devices = await getDevicesQuery()
    return formatDevices(devices)
  }
  async getDeviceById(id: number): Promise<Device> {
    const device = await getDeviceByIdQuery(id)
    return formatDevices([device])[0]
  }
  async deleteDeviceById(id: number): Promise<void> {
    await deleteDeviceByIdQuery(id)
  }
  async addDevice(values: [string, string, number, number, number]): Promise<void> {
    await addDeviceQuery(values)
  }
}
