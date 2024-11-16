import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const DEFAULT_PORT = 5000
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  await app.listen(process.env.PORT ?? DEFAULT_PORT)
}
bootstrap()
