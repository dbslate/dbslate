import {GenCtx, GennedFileData, WriterResults} from '../gen/types';

import * as h from './helpers';

export const writeFileContents = (
  ctx: GenCtx,
  file: GennedFileData,
): string => {
  const header = h.renderComment(
    file,
    `
~!! WARNING !!~
~!! This is an auto-generated file.
~!! All edits will be lost!

${ctx.defPath}
    |> ${file.writerName}
    |> ${file.path}

~!! This is an auto-generated file.
~!! All edits will be lost!
~!! WARNING !!~
  `.trim(),
  );
  const footer = header;

  return `
${header}

${file.contents}

${footer}
  `.trim();
};

export function fileWrapperWriter(
  results: WriterResults,
  ctx: GenCtx,
): WriterResults {
  return {
    ...results,
    files: results.files.map(f => ({
      ...f,
      contents: writeFileContents(ctx, f),
    })),
  };
}