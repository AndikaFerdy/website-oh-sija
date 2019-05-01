import { Indexer, GenericFn } from './../../index.d';

interface EventHandlerNamespace extends Indexer<EventHandler> {}
interface EventHandler extends GenericFn {}

export const EventHandlers: Indexer<EventHandlerNamespace> = {};

// testing
EventHandlers.EventHandlerBody = {
  foo(e: MouseEvent) {
    alert('Alo!');
  },
};
