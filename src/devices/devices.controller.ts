import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { DevicesService } from './devices.service'
import { AddDeviceForm, Device } from 'src/types/types'

@Controller('devices')
export class DevicesController {
  constructor(private readonly deviceService: DevicesService) {}
  @Get()
  async getDevices(): Promise<Device[]> {
    const devices = await this.deviceService.getDevices()
    return devices
  }

  @Get(':id')
  async getDeviceById(@Param() params: any): Promise<Device> {
    const { id } = params
    const device = await this.deviceService.getDeviceById(+id)
    return device
  }

  @Delete(':id')
  async deleteDeviceById(@Param() params: any): Promise<void> {
    const { id } = params
    await this.deviceService.deleteDeviceById(+id)
  }

  @Post()
  async addDevice(@Body() body: AddDeviceForm): Promise<void> {
    const { name, phone, lastConnection, lat, lon } = body
    await this.deviceService.addDevice([name, phone, lastConnection, lat, lon])
  }
  @Put(':id')
  async updateDeviceById(@Param() params: any, @Body() body: AddDeviceForm): Promise<void> {
    const { id } = params
    const { name, phone, lastConnection, lat, lon } = body
    await this.deviceService.updateDeviceById(+id, [name, phone, lastConnection, lat, lon])
  }

  @Get('paginated/:limit/:page')
  async getDevicesPaginated(@Param() params: any): Promise<Device[]> {
    const { limit, page } = params
    const devices = await this.deviceService.getDevicesPaginated(limit, page)
    return devices
  }
}
