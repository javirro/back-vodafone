import { Controller, Get } from '@nestjs/common'
import { DevicesService } from './devices.service'

@Controller('devices')
export class DevicesController {
  constructor(private readonly deviceService: DevicesService) {}
  @Get()
  getDevices(): string {
    return this.deviceService.getDevices()
  }
}
