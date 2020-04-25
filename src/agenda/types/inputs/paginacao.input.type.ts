import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PaginacaoInputType {

  @Field(() => Int, { nullable: true })
  limite: number;

  @Field(() => Int, { nullable: true })
  pagina: number;
}
