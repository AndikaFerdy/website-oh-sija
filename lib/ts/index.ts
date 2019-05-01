import { AnimationAgent } from './ui/animation-agent';
import { ActionBinder } from './ui/event/action-binder';
<<<<<<< HEAD
=======
// CSS imports
// require('tachyons/css/tachyons.min.css');
require('../sass/index.scss');

>>>>>>> c43eee1794bfb90e69720bd613189f046d9d784a
import { GenericFn } from './index.d';
import setupServiceWorker from './service-worker';
import { $$ } from './ui/utils-ui';
import './ui/scroll';

// CSS imports
require('../sass/index.scss');

function promisifySetInterval(
  cb: (resolve: GenericFn, reject: GenericFn) => TimerHandler,
  timeout: number
) {
  return new Promise((resolve, reject) => {
    setInterval(cb(resolve, reject), timeout);
  });
}

window.addEventListener('load', evt => {
  ActionBinder.bindAll('[data-action]', 'data-action');
});
