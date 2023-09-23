import { Name } from './name.vo';

test('Should be create a valid name of a customer', () => {
  const name = new Name('John Doe');
  expect(name.value).toBe('John Doe');
});
