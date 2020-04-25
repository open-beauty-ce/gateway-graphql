import { Field, ObjectType } from '@nestjs/graphql';
import { HorarioType } from './horario.type';

@ObjectType()
export class HorariosType {

  @Field()
  paginas: number;

  @Field()
  pagina: number;

  @Field()
  total: number;

  @Field(() => [HorarioType])
  itens: HorarioType[];
}
