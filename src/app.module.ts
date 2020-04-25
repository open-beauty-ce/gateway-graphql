import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgendaModule } from './agenda/agenda.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV === 'development',
      playground: process.env.NODE_ENV === 'development',
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
    }),
    AgendaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
