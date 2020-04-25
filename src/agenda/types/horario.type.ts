import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HorarioType {

  @Field(() => ID)
  id: string;
}
