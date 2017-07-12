import * as h from '../helpers';

import {GenCtx, WriterResults} from '$gen/types';

import {AppDef} from '$gen/defs';

const writeContents = (path: string, def: AppDef, results: WriterResults): string =>
  `
  import {sample} from 'lodash';

  import * as rand from '../../utils/rand';
  import * as t from '../types';

  ${Object.keys(def.definitions)
    .map(d => {
      const definition = def.definitions[d];
      return `
        export const mock${definition.title} = (): t.${d} => (
          ${h.renderRandomValue(definition)}
        );
      `.trim();
    })
    .join('\n\n')}
  `.trim();

export function tsMockWriter(results: WriterResults, ctx: GenCtx): WriterResults {
  const path = `${ctx.outputDir}/${ctx.def.name}.mocks.gen.ts`;
  return {
    ...results,
    files: results.files.concat({
      path,
      contents: writeContents(path, ctx.def, results),
      writerName: tsMockWriter.name,
    }),
  };
}