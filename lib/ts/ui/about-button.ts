import { AnimationAgent } from './animation-agent';
import { $, $$ } from './utils-ui';

function getParentContainer(target: Element, current: Element): Element | null {
  if (current == target) {
    return current;
  }

  if (current.parentElement) {
    return getParentContainer(target, current.parentElement);
  }

  return null;
}

function animateExpand(element: HTMLElement) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    const elementsInside = $$('*', element) as HTMLElement[];
    if (elementsInside) {
      elementsInside.forEach(el => {
        AnimationAgent.animate(el, 'fadeOut', {
          speed: AnimationAgent.Constants.SPEED_VERY_FAST,
        }).then(done => {
          el.style.display = 'none';
        });
      });
    }

    AnimationAgent.animate(element, 'scaleUp', {
      // removeAnimatedClassAfterExecuted: false
    }).then(done => {
      element.classList.remove('scaleDown-prop');
      element.classList.add('scaleUp-prop');

      const content = `#${element.getAttribute('data-target')}`;
      const target = ($(content) as HTMLElement).parentElement;
      if (target) {
        // @ts-ignore
        const animEnter = target.dataset.animationName.split(',')[0];

        // @ts-ignore
        target.style.display = 'flex';
        // @ts-ignore
        AnimationAgent.animate(target, animEnter).then(done => {
          resolve(done);
        });
      }
    });
  });
}

function animateCollapse(element: HTMLElement) {
  return new Promise((resolve, reject) => {
    const content = `#${element.getAttribute('data-target')}`;
    const target = ($(content) as HTMLElement).parentElement;
    if (target) {
      // @ts-ignore
      const animOut = target.dataset.animationName.split(',')[1];
      AnimationAgent.animate(target, animOut).then(done => {
        target.style.display = 'none';

        AnimationAgent.animate(element, 'scaleDown').then(done => {
          element.classList.remove('scaleUp-prop');
          element.classList.add('scaleDown-prop');
          // @ts-ignore
          const elementsInside = $$('*', element) as HTMLElement[];
          elementsInside.forEach(el => {
            el.style.display = 'inline';
            AnimationAgent.animate(el, 'fadeIn', {
              // removeAnimatedClassAfterExecuted: false,
            }).then(done => {
              resolve(done);
            });
          });
        });
      });
    }
  });
}

const aboutButtons = $$('.about-img-container');
if (aboutButtons) {
  aboutButtons.forEach(btn => {
    btn.addEventListener('click', (e: Event) => {
      const target = e.target as Element;
      const parent = getParentContainer(btn as Element, target);
      // @ts-ignore
      animateExpand(parent).then(done => {
        // @ts-ignore
      });
    });
  });
}

const backButtons = $$('.back-button');
if (backButtons) {
  backButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const target = e.currentTarget as HTMLElement;
      const parent = `#${target.getAttribute('data-button-parent')}`;
      const elemParent = $(parent);
      // @ts-ignore
      animateCollapse(elemParent);
    });
  });
}
