import { Customer } from '../../../events/domain/entities/customer.entity';
import { Name } from './name.vo';

test('Should be create a valid name of a customer', () => {
  const name = new Name('John Doe');
  expect(name.value).toBe('John Doe');

  const customer = new Customer({
    cpf: '12345678901',
    name,
  });

  customer.name = new Name('John Blank');

  expect(customer.name.value).toBe('John Blank');
});
