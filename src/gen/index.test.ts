import {getWritersList, loadCommentedJson} from '../tasks/helpers';

import {GenCtx, generate} from '../gen';

it('generates some files', async () => {
  const defPath = '../_userProject/defs/app.def.json';
  const prettierCfg = await loadCommentedJson('../../config/prettier.json');
  const ctx: GenCtx = {
    def: await loadCommentedJson(defPath),
    defPath,
    prettierCfg,
  };
  const writers = await getWritersList();
  const generated = generate(ctx, writers);
  expect(generated.files.length).toBe(6);
});
