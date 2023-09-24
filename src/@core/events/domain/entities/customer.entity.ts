import { AggregateRoot } from '../../../../../src/@core/common/domain/aggregate-root';
import Cpf from 'src/@core/common/domain/value-objects/cpf.vo';
import { Name } from 'src/@core/common/domain/value-objects/name.vo';
import Uuid from './../../../../../src/@core/common/domain/value-objects/uuid.vo';

export class CustomerId extends Uuid {}

export type CustomerConstructorProps = {
  id?: CustomerId | string;
  cpf: Cpf;
  name: Name;
};

export class Customer extends AggregateRoot {
  id: CustomerId;
  cpf: Cpf;
  name: Name;

  constructor(props: CustomerConstructorProps) {
    super();
    this.id =
      typeof props.id === 'string'
        ? new CustomerId(props.id)
        : props.id ?? new CustomerId();
    this.cpf = props.cpf;
    this.name = props.name;
  }

  static create(command: CustomerConstructorProps): Customer {
    return new Customer(command);
  }

  toJSON(): CustomerConstructorProps {
    return {
      id: this.id,
      cpf: this.cpf,
      name: this.name,
    };
  }
}
