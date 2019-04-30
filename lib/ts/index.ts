// @ts-ignore
require('bootstrap/dist/css/bootstrap.min.css');

import setupServiceWorker from './service-worker';

window.addEventListener('load', evt => {
  setupServiceWorker().then(success => {
    console.log(success);
  });

  const headTypesetting = document.querySelector(
    '.head-typesetting'
  ) as HTMLHeadingElement;
  const text = 'Welcome';

  let idx = 0;
  setInterval(() => {
    if (idx !== text.length) {
      headTypesetting.textContent += text[idx++];
    }
  }, 100);
});
