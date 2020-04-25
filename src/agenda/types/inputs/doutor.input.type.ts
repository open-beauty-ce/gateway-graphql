import { Field, InputType } from '@nestjs/graphql';
import { CondicoesStringInputType } from './condicoes/condicoes.string.input.type';

@InputType()
export class DoutorInputType {

  @Field(() => CondicoesStringInputType, { nullable: true })
  id?: CondicoesStringInputType;

  @Field(() => CondicoesStringInputType, { nullable: true })
  nome?: CondicoesStringInputType;
}
