import { Client, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const AgendaClient = () => Client({
  transport: Transport.GRPC,
  options: {
    url: 'agenda:5000',
    package: 'agenda',
    protoPath: join(process.cwd(), 'node_modules/descricao-servicos/proto/agenda.proto'),
  },
})
