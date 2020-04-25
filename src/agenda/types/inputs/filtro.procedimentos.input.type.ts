import { Field, InputType } from '@nestjs/graphql';
import { OrdemEnumType } from './ordem.enum.type';
import { DoutorInputType } from './doutor.input.type';
import { PaginacaoInputType } from './paginacao.input.type';
import { CondicoesStringInputType } from './condicoes/condicoes.string.input.type';
import { CondicoesIntInputType } from './condicoes/condicoes.int.input.type';

@InputType()
class FiltroProcedimento {

  @Field( { nullable: true })
  id?: CondicoesStringInputType;

  @Field( { nullable: true })
  nome?: CondicoesStringInputType;

  @Field( { nullable: true })
  duracao?: CondicoesIntInputType;

  @Field( { nullable: true })
  doutor?: DoutorInputType;
}

@InputType()
class OrdenacaoProcedimento {

  @Field(() => OrdemEnumType, { nullable: true })
  id?: OrdemEnumType;

  @Field(() => OrdemEnumType, { nullable: true })
  nome?: OrdemEnumType;

  @Field(() => OrdemEnumType, { nullable: true })
  duracao?: OrdemEnumType;
}

@InputType()
export class FiltroProcedimentosInputType {

  @Field(() => FiltroProcedimento, { nullable: true })
  filtro?: FiltroProcedimento;

  @Field(() => OrdenacaoProcedimento, { nullable: true })
  ordenacao?: OrdenacaoProcedimento;

  @Field(() => PaginacaoInputType, { nullable: true })
  paginacao?: PaginacaoInputType;
}
