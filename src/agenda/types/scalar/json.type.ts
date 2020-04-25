import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ObjectValueNode, ValueNode } from 'graphql';
import Maybe from 'graphql/tsutils/Maybe';

function parseObject(typeName, ast: ObjectValueNode, variables): Record<string, any> {
  const value = Object.create(null);
  ast.fields.forEach((field) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    value[field.name.value] = parseLiteral(typeName, field.value, variables);
  });

  return value;
}

function parseLiteral(typeName, ast: ValueNode, variables) {
  switch (ast.kind) {
    case Kind.STRING:
    case Kind.BOOLEAN:
      return ast.value;
    case Kind.INT:
    case Kind.FLOAT:
      return parseFloat(ast.value);
    case Kind.OBJECT:
      return parseObject(typeName, ast, variables);
    case Kind.LIST:
      return ast.values.map((n) => parseLiteral(typeName, n, variables));
    case Kind.NULL:
      return null;
    case Kind.VARIABLE:
      return variables ? variables[ast.name.value] : undefined;
    default:
      throw new TypeError(`Não foi possível representar um ${typeName}`);
  }
}

@Scalar('JsonType')
export class JsonType implements CustomScalar<any, Record<string, any>> {

  parseLiteral(valueNode: ValueNode, variables: Maybe<{ [p: string]: any }>): Maybe<Record<string, any>> {
    return parseLiteral('JsonType', valueNode, variables);
  }

  parseValue(value: any): Maybe<Record<string, any>> {
    return value;
  }

  serialize(value: any): Maybe<Record<string, any>> {
    return value;
  }

}
