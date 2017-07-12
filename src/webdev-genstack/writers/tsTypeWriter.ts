import * as h from '../helpers';

import {GenCtx, WriterResults} from '$sculpt/types';

import {AppDef} from '$sculpt/defs';

const writeContents = (path: string, def: AppDef, results: WriterResults): string =>
  `
  ${Object.keys(def.definitions).map(d => h.renderTypeDeclaration(def.definitions[d])).join('\n\n')}
  `.trim();

export function tsTypeWriter(results: WriterResults, ctx: GenCtx): WriterResults {
  const path = `${ctx.outputDir}/types.gen.ts`;
  return {
    ...results,
    files: results.files.concat({
      path,
      contents: writeContents(path, ctx.def, results),
      writerName: tsTypeWriter.name,
    }),
  };
}
