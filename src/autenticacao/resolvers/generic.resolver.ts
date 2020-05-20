import { OnModuleInit } from '@nestjs/common/interfaces/hooks/on-init.interface';
import { AutenticacaoClient } from '../../app.decorators';
import { ClientGrpc } from '@nestjs/microservices';
import { Usuario } from 'descricao-servicos';

export abstract class GenericResolver implements OnModuleInit {

  @AutenticacaoClient()
  private client: ClientGrpc;

  protected usuarioController: Usuario.Controller.Usuario;
  protected autenticacaoController: Usuario.Controller.Autenticacao;

  onModuleInit(): any {
    this.usuarioController = this.client.getService<Usuario.Controller.Usuario>('UsuarioController');
    this.autenticacaoController = this.client.getService<Usuario.Controller.Autenticacao>('AutenticacaoController');
  }
}
