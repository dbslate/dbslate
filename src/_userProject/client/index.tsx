import {initBasic} from '$webdev-genstack/client/main';
import {logger} from '$webdev-genstack/client/utils/log';
import {ClientCtx} from '$webdev-genstack/client/types';

const log = logger('client/index');

function main(): void {
  initBasic()
    .then((ctx: ClientCtx) => {
      log('created client ctx', Object.keys(ctx));

      // set some convenient globals
      Object.assign(window, {ctx, store: ctx.store, st: ctx.store.getState});
    })
    .catch(err => {
      log('err', err, err.stack);
      throw err;
    });
}

main();
