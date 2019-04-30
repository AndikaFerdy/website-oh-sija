/**
 * Setup service worker.
 */

export default function setupServiceWorker() {
  return new Promise((resolve, reject) => {
    if (!('serviceWorker' in navigator)) {
      reject('Service worker is not available in your browser!');
    }

    navigator.serviceWorker
      .register('./service-worker.js')
      .then(success => {
        resolve('Service worker has been activated!');
      })
      .catch(err => {
        reject(`Error registering service worker: ${err}`);
      });
  });
}
