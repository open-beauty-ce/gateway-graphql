import { OnModuleInit } from '@nestjs/common/interfaces/hooks/on-init.interface';
import { AgendaClient } from '../../app.decorators';
import { ClientGrpc } from '@nestjs/microservices';
import { Agenda } from 'descricao-servicos';

export abstract class GenericResolver implements OnModuleInit {

  @AgendaClient()
  private agendaClient: ClientGrpc;

  protected horarioController: Agenda.Controller.Horario;
  protected procedimentoController: Agenda.Controller.Procedimento;

  onModuleInit(): any {
    this.horarioController = this.agendaClient.getService<Agenda.Controller.Horario>('HorarioController');
    this.procedimentoController = this.agendaClient.getService<Agenda.Controller.Procedimento>('ProcedimentoController');
  }
}
