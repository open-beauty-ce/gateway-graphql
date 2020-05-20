import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ContatoType {

  @Field(() => ID)
  id: string;

  @Field()
  telefone: string;

  @Field()
  whatsapp: boolean;
}
