export function showFromCenter(images: HTMLImageElement[]) {
  setTimeout(() => {
    images[1].classList.add('show');
  }, 100);
  setTimeout(() => {
    images[0].classList.add('show');
  }, 200);
  setTimeout(() => {
    images[2].classList.add('show');
  }, 300);
}
