import { Module } from '@nestjs/common';
import { AutenticacaoResolver } from './resolvers/autenticacao.resolver';

@Module({
  providers: [AutenticacaoResolver],
})
export class AutenticacaoModule {
}
