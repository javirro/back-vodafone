import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const DEFAULT_PORT = 5000
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors({
    origin: process.env.UI_URL,
    methods: 'GET,PUT,POST,DELETE',
    preflightContinue: false,
  })
  await app.listen(process.env.PORT ?? DEFAULT_PORT)
}
bootstrap()
