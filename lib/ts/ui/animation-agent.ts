import { UtilsArray } from '../utils/utils-array';

// https://gist.github.com/gordonbrander/2230317
function _generateAnimationID() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

export interface AnimationOptions {
  speed?: string;
  interruptible?: Boolean;
  repeat?: Boolean;
  removeClassAfterExecuted?: Boolean;
  removeAnimatedClassAfterExecuted?: Boolean;
}

setInterval(() => {
  //  console.log(AnimationAgent.animationsOnGoing);
}, 100);

export const AnimationAgent = {
  Constants: {
    SPEED_FAST: 'fast',
    SPEED_VERY_FAST: 'faster',
    SPEED_SLOW: 'slow',
    SPEED_VERY_SLOW: 'slower',
  },

  animationsOnGoing: [],

  animate(
    element: HTMLElement,
    animationName: string,
    opts: AnimationOptions = {}
  ) {
    let defaultOpts = {
      interruptible: false,
      speed: this.Constants.SPEED_FAST,
      repeat: false,
      removeClassAfterExecuted: true,
      removeAnimatedClassAfterExecuted: true,
    };

    opts = { ...defaultOpts, ...opts };
    if (opts.repeat) {
      opts.interruptible = true;
    }

    return new Promise((resolve, reject) => {
      let animationIndex = UtilsArray.findObject(this.animationsOnGoing, {
        element,
      });

      if (
        animationIndex > -1 &&
        // @ts-ignore
        !this.animationsOnGoing[animationIndex].opts.interruptible
      ) {
        reject('animation is ongoing');
      }

      if (animationIndex > -1) {
        AnimationAgent.cancel(element);
      }

      let _animationName = ['animated', animationName, opts.speed];
      if (opts.repeat) {
        _animationName.push('infinite');
      }
      element.classList.add(...(_animationName as string[]));

      element.addEventListener('animationstart', e => {
        //if (e.target !== e.currentTarget) return;
        let id = _generateAnimationID();

        // sometimes animationstart fired twice
        let identicalAnimation = UtilsArray.findObject(this.animationsOnGoing, {
          element,
          animationName: _animationName,
        });
        if (identicalAnimation > -1) {
          return;
        }

        // @ts-ignore
        this.animationsOnGoing.push({
          // @ts-ignore
          element,
          // @ts-ignore
          animationName: _animationName,
          // @ts-ignore
          id,
          // @ts-ignore
          opts,
        });
      });

      element.addEventListener(
        'animationend',
        e => {
          console.log('animationend');
          if (opts.removeAnimatedClassAfterExecuted) {
            element.classList.remove('animated');
          }

          _animationName.shift();
          if (opts.removeClassAfterExecuted) {
            element.classList.remove(...(_animationName as string[]));
          }

          let animationIndex = UtilsArray.findObject(
            this.animationsOnGoing,
            // @ts-ignore
            { element }
          );
          this.animationsOnGoing.splice(animationIndex, 1);
          setTimeout(() => {
            const _animIdx = UtilsArray.findObject(this.animationsOnGoing, {
              element,
            });
            if (_animIdx > -1) {
              this.animationsOnGoing.splice(_animIdx, 1);
            }
          }, 100);

          resolve();
        },
        {
          once: true,
        }
      );
    });
  },

  cancel(element: HTMLElement) {
    let animationIndex = UtilsArray.findObject(this.animationsOnGoing, {
      element,
    });

    if (animationIndex > -1) {
      let object = this.animationsOnGoing[animationIndex];
      // @ts-ignore
      object.element.classList.remove(
        // @ts-ignore
        ...object.animationName
      );

      this.animationsOnGoing.splice(animationIndex, animationIndex + 1);
    }
  },
};
