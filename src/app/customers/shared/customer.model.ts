import {Address} from '../../addresses/shared/address.model';

export class Customer {
  id?: number;
  firstName: string;
  lastName: string;
  addresses?: Address[];
  //The question mark means it's something you may or may not use
  addressIds?: number[];
}
