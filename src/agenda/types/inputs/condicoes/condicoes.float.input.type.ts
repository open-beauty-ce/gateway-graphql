import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CondicoesFloatInputType {

  @Field({ nullable: true })
  eq?: number;

  @Field({ nullable: true })
  gt?: number;

  @Field({ nullable: true })
  gte?: number;

  @Field({ nullable: true })
  lt?: number;

  @Field({ nullable: true })
  lte?: number;

  @Field({ nullable: true })
  ne?: number;

  @Field(() => [Float],{ nullable: true })
  in?: number[];

  @Field(() => [Float], { nullable: true })
  nin?: number[];

  @Field(() => [CondicoesFloatInputType], { nullable: true })
  and?: CondicoesFloatInputType[];

  @Field(() => [CondicoesFloatInputType], { nullable: true })
  or?: CondicoesFloatInputType[];

  @Field(() => [CondicoesFloatInputType], { nullable: true })
  nor?: CondicoesFloatInputType[];

  @Field(() => CondicoesFloatInputType, { nullable: true })
  not?: CondicoesFloatInputType;

}
