import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CondicoesIntInputType {

  @Field(() => Int, { nullable: true })
  eq?: number;

  @Field(() => Int, { nullable: true })
  gt?: number;

  @Field(() => Int, { nullable: true })
  gte?: number;

  @Field(() => Int, { nullable: true })
  lt?: number;

  @Field(() => Int, { nullable: true })
  lte?: number;

  @Field(() => Int, { nullable: true })
  ne?: number;

  @Field(() => [Int],{ nullable: true })
  in?: number[];

  @Field(() => [Int], { nullable: true })
  nin?: number[];

  @Field(() => [CondicoesIntInputType], { nullable: true })
  and?: CondicoesIntInputType[];

  @Field(() => [CondicoesIntInputType], { nullable: true })
  or?: CondicoesIntInputType[];

  @Field(() => [CondicoesIntInputType], { nullable: true })
  nor?: CondicoesIntInputType[];

  @Field(() => CondicoesIntInputType, { nullable: true })
  not?: CondicoesIntInputType;

}
