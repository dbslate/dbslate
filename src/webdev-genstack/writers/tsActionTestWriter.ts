import * as h from '../helpers';

import {AppDef, getActions} from '$sculpt/defs';
import {GenCtx, WriterResults} from '$sculpt/types';

const writeContents = (path: string, def: AppDef, results: WriterResults): string =>
  `
    // TODO make these tests more robust - like with snapshot testing

    import * as rand from '$utils/rand';
    import * as u from '$utils/is';
    import * as a from './actions.gen';
    import * as t from './types.gen';

    ${getActions(def)
      .map(a =>
        `
        it('calls the ${a.title} creator', () => {
          const action = ${h.renderActionCreatorCall(a, 'a.')};
          u.is<${h.renderActionTypeValue(a, 't.')}>(action);
        });
        `.trim()
      )
      .join('\n\n')}
  `.trim();

export function tsActionTestWriter(results: WriterResults, ctx: GenCtx): WriterResults {
  const path = `${ctx.outputDir}/actions.gen.test.ts`;
  return {
    ...results,
    files: results.files.concat({
      path,
      contents: writeContents(path, ctx.def, results),
      writerName: tsActionTestWriter.name,
    }),
  };
}
