import { AnimationAgent } from './ui/animation-agent';
import { ActionBinder } from './ui/event/action-binder';
// CSS imports
// require('tachyons/css/tachyons.min.css');
require('../sass/index.scss');
require('animate.css/animate.min.css');

import { GenericFn } from './index.d';
import setupServiceWorker from './service-worker';
import { $$ } from './ui/utils-ui';
import './ui/scroll';
import { showFromCenter } from './ui/animation';
import './ui/about-button';
import './ui/easter-egg';

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

/* window.addEventListener('scroll', e => {
  const els = $$('.animate-within-viewport');
  if (els) {
    els.forEach(el => {
      const bounding = el.getBoundingClientRect();
      if (bounding.top < 0 || bounding.left < 0) {
        const images = $$('.inner-karya-container');
        showFromCenter(images as HTMLImageElement[]);
      }
    });
  }
}); */
