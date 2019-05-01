import { AnimationAgent } from './ui/animation-agent';
import { ActionBinder } from './ui/event/action-binder';
// CSS imports
// require('tachyons/css/tachyons.min.css');
require('../sass/index.scss');

import { GenericFn } from './index.d';
import setupServiceWorker from './service-worker';
import { $$ } from './ui/utils-ui';
import './ui/scroll';
import { showFromCenter } from './ui/animation';

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
  const images = $$('.content-section--hasilKarya img');
  console.log(images);
  setTimeout(() => {
    showFromCenter(images as HTMLImageElement[]);
  }, 2000);
});
