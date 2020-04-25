import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { DoutorType } from './doutor.type';
import { ObjectID } from 'descricao-servicos';

@ObjectType()
export class ProcedimentoType {

  @Field(() => ID)
  id: ObjectID;

  @Field()
  nome: string;

  @Field(() => Int)
  duracao: number;

  @Field(() => DoutorType)
  doutor: DoutorType;

}
