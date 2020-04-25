import { Module } from '@nestjs/common';
import { HorarioResolver } from './resolvers/horario.resolver';

@Module({
  providers: [
    HorarioResolver
  ]
})
export class AgendaModule {}
