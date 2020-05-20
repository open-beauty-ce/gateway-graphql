import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ContatoType } from './contato.type';

@ObjectType()
export class UsuarioType {

  @Field(() => ID)
  id: string;

  @Field()
  nome: string;

  @Field(() => [ContatoType])
  contatos: ContatoType[];
}
