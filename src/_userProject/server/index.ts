import {ServerCtx} from '$webdev-genstack/server/types';
import {initBasicServer} from '$webdev-genstack/server/main';
import {logger} from '$webdev-genstack/server/utils/log';

const log = logger('server/index');

function main(): void {
  initBasicServer()
    .then((ctx: ServerCtx) => {
      log('created ctx', Object.keys(ctx));
    })
    .catch(err => {
      log('err', err, err.stack);
      throw err;
    });
}

main();
