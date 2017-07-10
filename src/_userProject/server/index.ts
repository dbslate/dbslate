import {ServerCtx} from '$webdev-genstack/server/types';
import {logger} from '$webdev-genstack/server/utils/log';
import {initBasicServer} from '$webdev-genstack/server/main';

const log = logger('server/index');

initBasicServer(/* {registerRoutes: fn} */)
  .then((ctx: ServerCtx) => {
    log('created ctx', Object.keys(ctx));
  })
  .catch(err => {
    log('err', err, err.stack);
    throw err;
  });
