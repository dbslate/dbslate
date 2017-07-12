import * as h from '../helpers';

import {AppDef, getActions} from '$gen/defs';
import {GenCtx, WriterResults} from '$gen/types';

const writeContents = (path: string, def: AppDef, results: WriterResults): string =>
  `
    // TODO make these tests more robust - like with snapshot testing
    // problem is snapshot testing doesn't play nicely with ids

    import * as rand from '../../../utils/rand';
    import * as t from '../types';

    import {reducer} from './index';

    ${getActions(def)
      .map(a =>
        `
        it('applies a ${a.title} against the store state', () => {
          const state = reducer(undefined, ${h.renderActionCreatorCall(a)});
          t.is<t.ClientState>(state);
        });
        `.trim(),
      )
      .join('\n\n')}
  `.trim();

export function tsReducerTestWriter(results: WriterResults, ctx: GenCtx): WriterResults {
  const path = `${ctx.outputDir}/${ctx.def.name}.reducer.gen.test.ts`;
  return {
    ...results,
    files: results.files.concat({
      path,
      contents: writeContents(path, ctx.def, results),
      writerName: tsReducerTestWriter.name,
    }),
  };
}
