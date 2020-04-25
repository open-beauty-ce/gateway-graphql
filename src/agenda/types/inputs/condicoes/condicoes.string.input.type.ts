import { Field, InputType } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@InputType()
export class CondicoesStringInputType {

  @Field({ nullable: true })
  eq?: string;

  @Field({ nullable: true })
  regexp?: string;

  @Field({ nullable: true })
  gt?: string;

  @Field({ nullable: true })
  gte?: string;

  @Field({ nullable: true })
  lt?: string;

  @Field({ nullable: true })
  lte?: string;

  @Field({ nullable: true })
  ne?: string;

  @Field(() => [GraphQLString],{ nullable: true })
  in?: string[];

  @Field(() => [GraphQLString], { nullable: true })
  nin?: string[];

  @Field(() => [CondicoesStringInputType], { nullable: true })
  and?: CondicoesStringInputType[];

  @Field(() => [CondicoesStringInputType], { nullable: true })
  or?: CondicoesStringInputType[];

  @Field(() => [CondicoesStringInputType], { nullable: true })
  nor?: CondicoesStringInputType[];

  @Field(() => CondicoesStringInputType, { nullable: true })
  not?: CondicoesStringInputType;

}
