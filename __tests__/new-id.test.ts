import newId, { mongoObjectId, uuid58Id } from '../src';

describe('function default newId()', () => {
  test('contrived: generates unique ids', () => {
    const list: string[] = [];
    const count = 100;
    for (let i = 0; i < count; i++) {
      list.push(newId());
    }
    const uniqueIds = Array.from(new Set(list));
    expect(list.length).toBe(uniqueIds.length);
  });
});

describe('function mongoObjectId()', () => {
  test('mongoObjectId: generates unique ids', () => {
    const list: string[] = [];
    const count = 100;
    for (let i = 0; i < count; i++) {
      list.push(mongoObjectId());
    }
    const uniqueIds = Array.from(new Set(list));
    expect(list.length).toBe(uniqueIds.length);
  });
});

describe('function uuid58Id()', () => {
  test('uuid58Id: generates unique ids', () => {
    const list: string[] = [];
    const count = 100;
    for (let i = 0; i < count; i++) {
      list.push(uuid58Id());
    }
    const uniqueIds = Array.from(new Set(list));
    expect(list.length).toBe(uniqueIds.length);
  });
});
