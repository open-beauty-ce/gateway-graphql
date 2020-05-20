import { registerEnumType } from '@nestjs/graphql';

export enum FuncaoEnumType {
  CLIENT = 'cliente',
  DOUTOR = 'doutor'
}

registerEnumType(FuncaoEnumType, {
  name: 'FuncaoEnumType',
});
