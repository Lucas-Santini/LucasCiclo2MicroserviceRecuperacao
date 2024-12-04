import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Atualizarcadastro } from './interfaces/interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  logger = new Logger (AppController.name)

  @EventPattern('cadastro-empresa')
  async criarEmpresa(@Payload() dto: Atualizarcadastro) {
    return this.appService.post(dto);
  }
}



