import { Args, Query, Resolver } from '@nestjs/graphql';
import { HorarioType } from '../types/horario.type';
import { HorariosType } from '../types/horarios.type';
import { GenericResolver } from './generic.resolver';
import { FiltroProcedimentosInputType } from '../types/inputs/filtro.procedimentos.input.type';
import { ProcedimentosType } from '../types/procedimentos.type';

@Resolver(() => HorarioType)
export class HorarioResolver extends GenericResolver {

  @Query(() => HorariosType)
  async horarios(
    @Args('opcoes', {
      type: () => FiltroProcedimentosInputType,
      nullable: true
    })
    opcoes: FiltroProcedimentosInputType = {}
  ): Promise<ProcedimentosType> {
    return this.procedimentoController.listarProcedimentos(opcoes)
  }
}
