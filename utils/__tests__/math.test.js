import { add } from '../math';

test('add two number together', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(100, 200)).toBe(300);
});
