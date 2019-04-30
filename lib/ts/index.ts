import setupServiceWorker from './service-worker';

setupServiceWorker().then(success => {
  console.log(success);
});
