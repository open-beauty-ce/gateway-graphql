import { registerEnumType } from '@nestjs/graphql';
import { Common } from 'descricao-servicos';
import OrdemEnumType = Common.Input.Ordem;

export {
  OrdemEnumType
}

registerEnumType(Common.Input.Ordem, {
  name: 'OrdemEnumType'
});
