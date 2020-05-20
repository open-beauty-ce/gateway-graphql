import { GenericResolver } from './generic.resolver';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLBoolean, GraphQLString } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FuncaoEnumType } from '../types/inputs/funcao.enum.type';
import { ContatoInputType } from '../types/inputs/contato.input.type';
import { throwGrpcError } from '../../common/operators/throw.grpc.error';

@Resolver()
export class AutenticacaoResolver extends GenericResolver {

  @Mutation(() => GraphQLString)
  autenticar(
    @Args('email') email: string,
    @Args('senha') senha: string,
  ): Observable<string> {
    return this.autenticacaoController
      .autenticar({ email, senha })
      .pipe(
        throwGrpcError(),
        map((resposta: any) => resposta.token),
      );
  }

  @Mutation(() => GraphQLBoolean)
  cadastrarConta(
    @Args('nome') nome: string,
    @Args('email') email: string,
    @Args('senha') senha: string,
    @Args('contatos', {
      type: () => [ContatoInputType],
    }) contatos: ContatoInputType[],
    @Args('funcao', {
      type: () => FuncaoEnumType,
      nullable: true,
    }) funcao: FuncaoEnumType = FuncaoEnumType.CLIENT,
  ): Observable<boolean> {
    return this.usuarioController.criarUsuario({
      nome,
      email,
      senha,
      funcao,
      contatos,
    }).pipe(
      throwGrpcError(),
      map(() => true),
    );
  }

}
