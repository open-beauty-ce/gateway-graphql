import { Field, InputType } from '@nestjs/graphql';
import { GraphQLBoolean } from 'graphql';

@InputType()
export class CondicoesBooleanInputType {

  @Field({ nullable: true })
  eq?: boolean;

  @Field({ nullable: true })
  ne?: boolean;

  @Field(() => [GraphQLBoolean],{ nullable: true })
  in?: boolean[];

  @Field(() => [GraphQLBoolean], { nullable: true })
  nin?: boolean[];

  @Field(() => [CondicoesBooleanInputType], { nullable: true })
  and?: CondicoesBooleanInputType[];

  @Field(() => [CondicoesBooleanInputType], { nullable: true })
  or?: CondicoesBooleanInputType[];

  @Field(() => [CondicoesBooleanInputType], { nullable: true })
  nor?: CondicoesBooleanInputType[];

  @Field(() => CondicoesBooleanInputType, { nullable: true })
  not?: CondicoesBooleanInputType;

}
