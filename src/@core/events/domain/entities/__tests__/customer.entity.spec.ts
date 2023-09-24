import Cpf from './../../../../../../src/@core/common/domain/value-objects/cpf.vo';
import { Name } from './../../../../../../src/@core/common/domain/value-objects/name.vo';
import { Customer, CustomerId } from '../customer.entity';

test('Should be create a customer entity', () => {
  const customer = Customer.create({
    cpf: new Cpf('111.111.111-11'),
    name: new Name('John Doe'),
  });

  expect(customer.id).toBeInstanceOf(CustomerId);
  expect(customer.cpf).toBeInstanceOf(Cpf);
  expect(customer.name).toBeInstanceOf(Name);
});
