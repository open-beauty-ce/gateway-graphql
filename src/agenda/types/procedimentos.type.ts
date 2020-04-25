import { Field, ObjectType } from '@nestjs/graphql';
import { ProcedimentoType } from './procedimento.type';

@ObjectType()
export class ProcedimentosType {

  @Field()
  paginas: number;

  @Field()
  pagina: number;

  @Field()
  total: number;

  @Field(() => [ProcedimentoType])
  itens: ProcedimentoType[];
}
