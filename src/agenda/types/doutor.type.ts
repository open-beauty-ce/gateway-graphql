import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectID } from 'descricao-servicos';

@ObjectType()
export class DoutorType {

  @Field(() => ID)
  id: ObjectID;

  @Field()
  nome: string;
}
