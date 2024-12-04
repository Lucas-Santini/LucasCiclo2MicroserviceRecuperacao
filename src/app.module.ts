import { Module } from '@nestjs/common';
import { AppService } from './../../lucas-santini-ciclo2-gateway-recuperacao/src/app.service';
/*import { PrismaService } from './Prisma.Service';*/
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, /*PrismaService*/],
})
export class AppModule {}
