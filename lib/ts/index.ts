// @ts-ignore
require('bootstrap/dist/css/bootstrap.min.css');

import setupServiceWorker from './service-worker';

type GenericFn<T = any, U = any> = (e: T) => U;

function promisifySetInterval(
  cb: (resolve: GenericFn, reject: GenericFn) => TimerHandler,
  timeout: number
) {
  return new Promise((resolve, reject) => {
    setInterval(cb(resolve, reject), timeout);
  });
}

window.addEventListener('load', evt => {
  /* setupServiceWorker().then(success => {
    console.log(success);
  }); */

  const headTypesetting = document.querySelector(
    '.head-typesetting'
  ) as HTMLHeadingElement;
  const text = 'Selamat datang';
  let displayedText = '';

  let idx = 0;

  promisifySetInterval((resolve, reject) => {
    return () => {
      if (idx !== text.length) {
        displayedText += text[idx++];
        headTypesetting.textContent = displayedText;
      } else {
        resolve('done');
      }
    };
  }, 100).then(success => {
    promisifySetInterval((resolve, reject) => {
      const text = displayedText.split('');
      return () => {
        if (text.length > 0) {
          text.pop();
          headTypesetting.textContent = text.join('');
        }
      };
    }, 50);
  });
});
