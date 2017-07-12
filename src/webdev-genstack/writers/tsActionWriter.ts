import * as h from '../helpers';

import {AppDef, SchemaProperty, getActions} from '$sculpt/defs';
import {GenCtx, WriterResults} from '$sculpt/types';

// TODO should probably be renamed
const writeContents = (def: AppDef): string =>
  `
  import * as t from '../types';

  ${getActions(def)
    .map(a =>
      `
      export const ${h.renderActionCreatorName(a)} = (
        ${h.renderPropList(
          (a.properties && a.properties.payload) || {},
          undefined,
          undefined,
          (prop: SchemaProperty, propName: string, parentProp: SchemaProperty): string =>
            propName === 'type' ? '' : h.renderPropertyPairNameToType(prop, propName, parentProp)
        )}
      ): t.${a.title} => ({
        type: t.ActionType.${a.title},
        ${a.properties && a.properties.payload
          ? `payload: ${h.renderPropertiesObjectLiteral(a.properties.payload)},`
          : ''}
      })
      `.trim()
    )
    .join('\n\n')}

  `.trim();

export function tsActionWriter(results: WriterResults, ctx: GenCtx): WriterResults {
  const path = `${ctx.outputDir}/${ctx.def.name}.actions.gen.ts`;
  return {
    ...results,
    files: results.files.concat({
      path,
      contents: writeContents(ctx.def),
      writerName: tsActionWriter.name,
    }),
  };
}
