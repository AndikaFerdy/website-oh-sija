import { Indexer } from './../index.d';

export class UtilsArray {
  static findObject(array: Indexer<any>[], props: Indexer<any>): number {
    let i = -1;
    array.forEach((item, index) => {
      for (let key in props) {
        if (item[key] && item[key] === props[key]) {
          i = index;
        }
      }
    });

    return i;
  }
}
