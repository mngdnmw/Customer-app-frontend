import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {CustomerService} from '../shared/customer.service';
import {Customer} from '../shared/customer.model';
import {Address} from '../../addresses/shared/address.model';
import {AddressService} from '../../addresses/shared/address.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerGroup: FormGroup;
  customerCreatedSuccessfully = false;
  addressesIn: Address[];

  constructor(private router: Router,
              private fb: FormBuilder,
              private customerService: CustomerService,
              private addressService: AddressService) {
    this.customerGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
    this.addressesIn = [];
  }

  back() {
    this.router.navigateByUrl('/customers');
  }

  save() {
    //Loop that runs through all the addresses in the list and takes and sends them to the rest api and saves them
    //individually as addresses

    const addressIds = [];
    const addressRequests = [];
    const values = this.customerGroup.value;
    // this.addressesIn.forEach(address => {
    //   this.addressService.create(address)
    //     .subscribe(addressBack => {
    //       addressIds.push(addressBack.id);
    //     });
    // });


    //subscribe means to do it, and map or switchmap means prepare to do it and only do it when you are ready
    this.addressesIn.forEach(address => {
      addressRequests.push(this.addressService.create(address)
        .map(addressBack => {
          addressIds.push(addressBack.id);
        }));
    });

    //executing the requests
    Observable.forkJoin(addressRequests)
    // .subscribe(() => {
    //   //Add an AddressIds [] to the CustomerModel so it can be stored in the backend
    //   const values = this.customerGroup.value;
    //   const customer: Customer = {
    //     firstName: values.firstName,
    //     lastName: values.lastName,
    //     addressIds: addressIds
    //   };
    //   this.customerService.create(customer)
    //     .subscribe(newCustomer => this.customerGroup.reset());
    //   this.customerCreatedSuccessfully = true;
    //   setTimeout(() => {
    //     this.customerCreatedSuccessfully = false;
    //   }, 3000);
    // });
      .switchMap(() =>
        this.customerService.create({
          firstName: values.firstName,
          lastName: values.lastName,
          addressIds: addressIds
        }))
      .subscribe(newCustomer => {
        this.customerGroup.reset();
        this.customerCreatedSuccessfully = true;
        this.addressesIn = [];
        setTimeout(() => {
          this.customerCreatedSuccessfully = false;
        }, 3000);
      });
  }

  closeAlert() {
    this.customerCreatedSuccessfully = false;
  }

  isInvalid(controlName: string) {
    const control = this.customerGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  isValid(controlName: string) {
    const control = this.customerGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }
}

