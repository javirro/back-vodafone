import { Injectable } from '@nestjs/common'
import {
  addDeviceQuery,
  deleteDeviceByIdQuery,
  getDeviceByIdQuery,
  getDevicesPaginatedQuery,
  getDevicesQuery,
  getDevicesTotalQuery,
  updateDeviceByIdQuery,
} from 'src/db/queries'
import { formatDevices } from 'src/helpers/formatData'
import { Device } from 'src/types/types'

@Injectable()
export class DevicesService {
  async getDevices(): Promise<Device[]> {
    const devices = await getDevicesQuery()
    return formatDevices(devices)
  }
  async getDevicesPaginated(limit: number, page: number): Promise<Device[]> {
    const offset = (page - 1) * limit
    const devices = await getDevicesPaginatedQuery(limit, offset)
    return formatDevices(devices)
  }

  async getDeviceById(id: number): Promise<Device> {
    const device = await getDeviceByIdQuery(id)
    return formatDevices([device])[0]
  }

  async getDevicesTotal(): Promise<number> {
    return await getDevicesTotalQuery()
  }
  async deleteDeviceById(id: number): Promise<void> {
    await deleteDeviceByIdQuery(id)
  }
  async addDevice(values: [string, string, number, number, number]): Promise<void> {
    await addDeviceQuery(values)
  }
  async updateDeviceById(id: number, values: [string, string, number, number, number]): Promise<void> {
    await updateDeviceByIdQuery(id, values)
  }
}
