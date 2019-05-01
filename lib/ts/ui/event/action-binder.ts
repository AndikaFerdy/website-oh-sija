import { $$ } from '../utils-ui';
import { EventHandlers } from './event-handlers';

interface Identifier {
  evt: string;
  filter?: string;
  namespace: string;
  handler: string;
}

export class ActionBinder {
  static readonly boundNodes: Node[] = [];

  public static bindAll(selectorIdentifier: string, attributeName: string) {
    const els = $$(selectorIdentifier);
    if (!els) {
      return;
    }

    els.forEach(el => {
      const attr = el.getAttribute(attributeName) as string;
      const parsedIndentifier = ActionBinder._parseIdentifier(attr);
      if (!parsedIndentifier) {
        return;
      }

      el.addEventListener(parsedIndentifier.evt, e => {
        const handler =
          EventHandlers[parsedIndentifier.namespace][parsedIndentifier.handler];

        if (
          parsedIndentifier.filter &&
          ActionBinder._isValidFilter(parsedIndentifier.filter)
        ) {
          ActionBinder._filterHandler(parsedIndentifier.filter, e, handler)();
        } else {
          handler(e);
        }
      });
    });
  }

  private static _isValidFilter(filter: string) {
    let isValidSelector;

    try {
      // @ts-ignore
      isValidSelector = !!$$(filter).length;
    } catch {
      isValidSelector = false;
    }

    return isValidSelector;
  }

  private static _filterHandler(
    filter: string,
    e: Event,
    cb: (e: Event) => void
  ) {
    // filter is a selector
    return function() {
      let filteredElements = $$(filter);
      if (
        filteredElements &&
        filteredElements.includes(e.target as HTMLElement)
      ) {
        cb(e);
      }
    };
  }

  private static _parseIdentifier(identifier: string): Identifier | null {
    // valid identifiers
    // event:filter:handlerNamespace:handlerFn
    // event:handlerNamespace:handlerFn
    const entities = identifier.split(':');
    if (!entities) {
      console.error(`Invalid identifier string`, identifier);
      return null;
    }

    let evt, filter, namespace, handler;
    evt = entities[0];
    /* try {
      evt = entities[0];
      
    } catch (e) {
      console.error(e);
      return null;
    } */

    try {
      filter = entities[1];
      // @ts-ignore
      document.querySelector(filter).textContent.split('');
    } catch (e) {
      if (filter && EventHandlers[filter]) {
        namespace = entities[1];
        handler = entities[2];
      }
      filter = '';
    }

    if (!namespace && !handler) {
      namespace = entities[2];
      handler = entities[3];
    }

    // @ts-ignore
    return { evt, filter, namespace, handler };
  }
}
