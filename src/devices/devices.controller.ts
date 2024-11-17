import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common'
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

  @Get('total')
  async getDevicesTotal(): Promise<number> {
    const total = await this.deviceService.getDevicesTotal()
    return total
  }

  @Get(':id')
  async getDeviceById(@Param('id') id: string): Promise<Device> {
    const device = await this.deviceService.getDeviceById(+id)
    return device
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteDeviceById(@Param('id') id: string): Promise<void> {
    await this.deviceService.deleteDeviceById(+id)
  }

  @Post()
  @HttpCode(201)
  async addDevice(@Body() body: AddDeviceForm): Promise<void> {
    const { name, phone, lastConnection, lat, lon } = body
    await this.deviceService.addDevice([name, phone, lastConnection, lat, lon])
  }
  @Put(':id')
  async updateDeviceById(@Param('id') id: string, @Body() body: AddDeviceForm): Promise<void> {
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
