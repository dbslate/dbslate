import {AppDef} from '../defs';
import {GenCtx, WriterResults} from '../gen/types';

const writeContents = (def: AppDef): string =>
  `
  import {AppDef} from '../defs';

  export const ${def.name}Def: AppDef = 
    ${JSON.stringify(def, null, 2)};
  `.trim();

export function tsExportDefJsonWriter(
  results: WriterResults,
  ctx: GenCtx,
): WriterResults {
  const path = `../defs/${ctx.def.name}.def.gen.ts`;
  return {
    ...results,
    files: results.files.concat({
      path,
      contents: writeContents(ctx.def),
      writerName: tsExportDefJsonWriter.name,
    }),
  };
}
