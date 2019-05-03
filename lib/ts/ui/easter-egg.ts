import { $, $$ } from './utils-ui';
import { getParentContainer } from './about-button';

const animals = ['monyet', 'babi', 'anjing'];
let keys: string[] = [];

function isExist(arr: string[], str: string) {
  for (let item of arr) {
    if (str.match(item)) {
      return item;
    }
  }

  return '';
}

window.addEventListener('keydown', (e: KeyboardEvent) => {
  const keysJoin = keys.join('');
  if (keys.length >= 10 && isExist(animals, keysJoin)) {
    keys = [];
  }

  let capturedName;
  if ((capturedName = isExist(animals, keysJoin))) {
    alert('you have triggered an easter egg');
    keys = [];
    activateEasterEgg(capturedName);
  }

  keys.push(e.key);
});

function activateEasterEgg(animal: string) {
  const image = $(
    `.easter-egg-asset[data-image-name="${animal}"]`
  ) as HTMLImageElement;
  const images = $$('img') as HTMLImageElement[];
  images.forEach(img => {
    img.src = image.src;
  });
}

// document.body.style.backgroundImage = 'url(../../res/img/polkadot.png)';
