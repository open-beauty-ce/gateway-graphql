import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AgendaClient } from './app.decorators';

@Controller()
export class AppController {

  @AgendaClient()
  private agendaClient: number;

  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(): string {
    return this.appService.getHealth();
  }
}
