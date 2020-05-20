import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ContatoInputType {

  @Field()
  telefone: string;

  @Field()
  whatsapp: boolean;
}
