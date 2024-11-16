import { Injectable } from '@nestjs/common'

@Injectable()
export class DevicesService {
  getDevices(): string {
    return 'Hello World!'
  }
}
