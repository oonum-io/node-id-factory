import { newId } from '../src'

describe('function newId()', () => {

  test('contrived: generates unique ids', () => {
    const list: string[] = [];
    let i = -1;
    const count = 100;
    while (++i < count) {
      list.push(newId());
    }
    i = -1;
    while (++i < count) {
      const id = list.pop();
      console.log(id);
      expect(list.indexOf(id)).toBe(-1);

    }
  });

});
