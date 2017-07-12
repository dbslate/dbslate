import * as h from './tsHelpers';

// it(' ', () => {
//   expect().toBe();
// });

it('renders an optional question mark for properties that are not required', () => {
  expect(h.renderQmark({}, 'bar')).toBe('?');
  expect(h.renderQmark({required: ['foo']}, 'foo')).toBe('');
  expect(h.renderQmark({required: ['foo']}, 'bar')).toBe('?');
});

it('renders an array type', () => {
  // TODO consider making this check for `type=array`, would add another case that renders '' if not
  expect(h.renderArrayType({})).toBe('[]');
  expect(h.renderArrayType({items: {$ref: '#/definitions/Foo'}})).toBe('Foo[]');
});

it('renders a type union', () => {
  expect(h.renderTypeUnion({})).toBe('');
  expect(
    h.renderTypeUnion({
      oneOf: [
        {$ref: '#/definitions/Foo'},
        {$ref: '#/definitions/Bar'},
        {$ref: '#/definitions/Baz'},
      ],
    }),
  ).toBe('t.Foo | t.Bar | t.Baz');
  expect(
    h.renderTypeUnion(
      {
        oneOf: [
          {$ref: '#/definitions/Foo'},
          {$ref: '#/definitions/Bar'},
          {$ref: '#/definitions/Baz'},
        ],
      },
      'types.',
    ),
  ).toBe('types.Foo | types.Bar | types.Baz');
});

it(`renders an enum's type`, () => {
  expect(h.renderEnumType({})).toBe('');
  expect(h.renderEnumType({enum: ['foo', 'bar', 'baz']})).toBe(
    `'foo' | 'bar' | 'baz'`,
  );
  const testEnum = {title: 'TestEnum', enum: ['Foo', 'Bar', 'Baz']};
  expect(h.renderEnumType(testEnum, undefined, true)).toBe(`{ Foo, Bar, Baz }`);
  expect(h.renderEnumType(testEnum, 'test.')).toBe(`test.TestEnum`);
});

it(`renders an enum's values`, () => {
  expect(h.renderEnumValues({})).toBe('');
  expect(h.renderEnumValues({enum: ['foo', 'bar', 'baz']})).toBe(
    `['foo', 'bar', 'baz']`,
  );
  const testEnum = {title: 'TestEnum', enum: ['Foo', 'Bar', 'Baz']};
  expect(h.renderEnumValues(testEnum)).toBe(
    '[t.TestEnum.Foo, t.TestEnum.Bar, t.TestEnum.Baz]',
  );
  expect(h.renderEnumValues(testEnum, 'test.')).toBe(
    '[test.TestEnum.Foo, test.TestEnum.Bar, test.TestEnum.Baz]',
  );
});

it('renders a primitive property type', () => {
  expect(h.renderPrimitivePropertyType({})).toBe('');
  expect(h.renderPrimitivePropertyType({type: 'string'})).toBe('string');
  expect(h.renderPrimitivePropertyType({type: 'null'})).toBe('null');
  expect(
    h.renderPrimitivePropertyType({
      type: 'object',
      properties: {
        foo: {type: 'string'},
        bar: {type: 'number'},
      },
      required: ['foo'],
    }),
  ).toBe('{foo: string, bar?: number}');
});

it(`renders a property's type`, () => {
  expect(h.renderPropertyType({})).toBe('');
  expect(h.renderPropertyType({$ref: '#/definitions/Foo'})).toBe(`t.Foo`);
  expect(h.renderPropertyType({value: 5})).toBe('5');
  expect(
    h.renderPropertyType({
      oneOf: [{type: 'string'}, {type: 'null'}],
    }),
  ).toBe('string | null');
  const testEnum = {title: 'TestEnum', enum: ['Foo', 'Bar']};
  expect(h.renderPropertyType(testEnum, undefined, true)).toBe(`{ Foo, Bar }`);
  expect(h.renderPropertyType(testEnum, 'test.')).toBe(`test.TestEnum`);
  expect(h.renderPropertyType({type: 'boolean'})).toBe('boolean');
});

it(`renders the extends portion of an interface for a property`, () => {
  expect(h.renderInterfaceExtendType({})).toBe('');
  const prop = {
    allOf: [{$ref: '#/definitions/Foo'}, {$ref: '#/definitions/Bar'}],
  };
  expect(h.renderInterfaceExtendType(prop)).toBe('extends t.Foo, t.Bar');
  expect(h.renderInterfaceExtendType(prop, 'test.')).toBe(
    'extends test.Foo, test.Bar',
  );
});

it(`renders a random value for a property`, () => {
  expect(h.renderRandomValue({value: 5})).toBe('5');
});

// it(``, () => {
//   expect().toBe();
// });

// export function renderRandomValue(
//   prop: SchemaProperty,
//   refTypePrefix: string = 't.',
// ): string {
//   // TODO huge temp hack ...wait that's everything, and it's not temp at all
//   if (prop.properties) {
//     return `
//       {
//         ${renderPropList(prop)}
//       }
//     `.trim();
//   } else if (prop.$ref) {
//     return prop.value !== undefined
//       ? `${refTypePrefix}${h.extractRefTypeTitle(prop.$ref)}.${prop.value}` // TODO this is hardcoded for enums, or namespacing at least
//       : `${refTypePrefix}mock${extractRefTypeTitle(prop.$ref)}()`; // TODO hmm? could do this at gen-time
//   } else if (prop.value !== undefined) {
//     return typeof prop.value === 'string'
//       ? `'${prop.value}'`
//       : JSON.stringify(prop.value);
//   } else if (prop.oneOf) {
//     return `sample([${prop.oneOf
//       .map(p => renderRandomValue(p, refTypePrefix))
//       .join(', ')}]) as ${prop.title
//       ? `${refTypePrefix}${prop.title}`
//       : renderTypeUnion(prop)}`; // TODO is hack to get around string literal problem from sample
//   } else if (prop.enum) {
//     return `sample([${renderEnumValues(prop)}]) as ${renderEnumType(prop)}`; // TODO is hack to get around string literal problem from sample
//   } else {
//     switch (prop.type) {
//       case 'string':
//         return prop.title === 'Id' ? 'rand.id()' : 'rand.str()'; // TODO refactor
//       case 'integer':
//         return 'rand.int()';
//       case 'number':
//         return 'rand.num()';
//       case 'object':
//         return `{}`;
//       case 'null':
//         return 'null';
//       case 'boolean':
//         return 'sample([true, false]) as boolean';
//       case 'array':
//         return `[]`;
//       default:
//         return `'FIXMEtype:${prop.type}'`;
//     }
//   }
// }

// export function renderPropertyPairNameToValue(
//   prop: SchemaProperty,
//   propName: string,
//   parentProp: SchemaProperty,
//   refTypePrefix: string = 't.',
// ): string {
//   return `${propName}: ${renderRandomValue(prop, refTypePrefix)}`;
// }

// export function renderPropertyPairNameToType(
//   prop: SchemaProperty,
//   propName: string,
//   parentProp: SchemaProperty,
//   refTypePrefix: string = 't.',
// ): string {
//   return `${propName}${renderQmark(parentProp, propName)}: ${renderPropertyType(
//     prop,
//     refTypePrefix,
//   )}`;
// }

// export function renderCallingArgs(
//   prop: SchemaProperty,
//   propName: string,
//   parentProp: SchemaProperty,
//   refTypePrefix: string = 't.',
// ): string {
//   return renderRandomValue(prop, refTypePrefix);
// }

// // TODO callingPropList vs declarationPropList
// export function renderPropList(
//   prop: SchemaProperty,
//   separator: string = ',\n',
//   refTypePrefix: string = 't.',
//   fn: typeof renderPropertyPairNameToValue = renderPropertyPairNameToValue,
// ): string {
//   return prop.properties
//     ? Object.keys(prop.properties)
//         .map(propName =>
//           // tslint:disable-next-line:no-non-null-assertion
//           fn(prop.properties![propName], propName, prop, refTypePrefix),
//         )
//         .filter(p => p)
//         .join(separator)
//     : '';
// }

// export enum TypeDeclarationKind {
//   TypeLiteral,
//   Enum,
//   Interface,
// }

// // TODO makes me think `SchemaProperty` should be a union type, instead of inferring it
// export const inferTypeDeclarationKind = (
//   definition: SchemaDefinition,
// ): TypeDeclarationKind => {
//   if (
//     definition.oneOf ||
//     (definition.type &&
//       definition.type !== 'array' &&
//       definition.type !== 'object')
//   ) {
//     return TypeDeclarationKind.TypeLiteral;
//   } else if (definition.enum) {
//     return TypeDeclarationKind.Enum;
//   } else {
//     return TypeDeclarationKind.Interface;
//   }
// };

// export function renderTypeDeclaration(definition: SchemaDefinition): string {
//   // TODO this should be a helper
//   const typeDeclarationKind = inferTypeDeclarationKind(definition);
//   switch (typeDeclarationKind) {
//     case TypeDeclarationKind.TypeLiteral:
//       return `
//         export type ${definition.title} = ${renderPropertyType(definition, '')};
//       `.trim();
//     case TypeDeclarationKind.Enum:
//       return `
//         export enum ${definition.title}${renderPropertyType(
//         definition,
//         '',
//         true,
//       )};
//       `.trim();
//     case TypeDeclarationKind.Interface:
//       return `
//         export interface ${definition.title} ${renderInterfaceExtendType(
//         definition,
//         '',
//         false,
//       )} {
//           ${renderPropList(definition, ';\n', '', renderPropertyPairNameToType)}
//         }
//       `.trim();
//     default:
//       h.is<never>(typeDeclarationKind);
//       throw Error();
//   }
// }

// export function renderActionCreatorCall(
//   def: SchemaDefinition,
//   refTypePrefix: string = 't.',
// ): string {
//   return `
//   ${refTypePrefix}${renderActionCreatorName(def)}(
//     ${renderPropList(
//       (def.properties && def.properties.payload) || {},
//       undefined,
//       refTypePrefix,
//       renderCallingArgs,
//     )}
//   )
//   `.trim();
// }

// export function renderPropertiesObjectLiteral(
//   prop: SchemaProperty,
//   separator: string = ',\n',
// ): string {
//   return prop.type === 'object'
//     ? `
//       {
//         ${(prop.properties && Object.keys(prop.properties).join(separator)) ||
//           ''}
//       }
//       `.trim()
//     : 'null';
// }

// const ACTION_SUFFIX = 'Action';
// const ACTION_SUFFIX_LENGTH = ACTION_SUFFIX.length;

// export function renderActionCreatorName(def: SchemaDefinition): string {
//   return (
//     def.title[0].toLowerCase() +
//     def.title.slice(1, def.title.length - ACTION_SUFFIX_LENGTH)
//   );
// }

// export function renderActionTypeValue(
//   def: SchemaDefinition,
//   refTypePrefix: string = 't.',
// ): string {
//   return `${refTypePrefix}${def.title}`;
// }
