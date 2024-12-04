import { Injectable } from '@nestjs/common';
import { Atualizarcadastro } from './interfaces/interface';

@Injectable()
export class AppService {
  prisma: any;
  getHello(): string {
    return 'Hello World!';
  }

  async post(dto: Atualizarcadastro) {
    return await this.prisma.tabela_teste.create({
      data: dto
    })
  }
}