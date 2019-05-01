export interface Indexer<T> {
  [index: string]: T;
  [index: number]: T;
}

export type GenericFn = (...args: any[]) => any;
