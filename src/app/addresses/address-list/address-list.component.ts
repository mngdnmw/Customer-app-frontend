import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../shared/address.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addressGroup: FormGroup;
  @Input()
  addresses: Address[];

  constructor(private fb: FormBuilder) {
    this.addressGroup = fb.group({
      street: '',
      number: '',
      city: ''
    });
  }

  ngOnInit() {
    // this.addresses = [{
    //   id: 11,
    //   street: 'you',
    //   number: '22',
    //   city: 'wish'
    // }, {
    //   id: 12,
    //   street: 'ahha',
    //   number: '22',
    //   city: 'nope'
    // }];
  }

  saveAddress() {
    const values = this.addressGroup.value;
    this.addresses.push({
      street: values.street,
      number: values.number,
      city: values.city
    });
    this.addressGroup.reset();
  }

  deleteAddress(i, $event) {
    $event.preventDefault();
    this.addresses.splice(i, 1);
    // const index = this.addresses.indexOf(address, 0);
    // if (index > -1) {
    //   this.addresses.splice(index, 1);
    // }
  }
}
