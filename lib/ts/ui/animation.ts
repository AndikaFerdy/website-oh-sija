export function showFromCenter(images: HTMLImageElement[]) {
  setTimeout(() => {
    images[4].classList.add('show');
  }, 100);
  setTimeout(() => {
    images[5].classList.add('show');
  }, 200);
  setTimeout(() => {
    images[3].classList.add('show');
  }, 300);
  setTimeout(() => {
    images[0].classList.add('show');
  }, 400);
  setTimeout(() => {
    images[7].classList.add('show');
  }, 500);
  setTimeout(() => {
    images[1].classList.add('show');
  }, 600);
  setTimeout(() => {
    images[2].classList.add('show');
  }, 700);
  setTimeout(() => {
    images[8].classList.add('show');
  }, 800);
  setTimeout(() => {
    images[6].classList.add('show');
  }, 900);
}
