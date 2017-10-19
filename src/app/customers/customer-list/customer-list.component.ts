import { Component, OnInit } from '@angular/core';
import {Customer} from '../shared/customer.model';
import {CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // create arrays in typescript
  customers: Customer[];
  // customerFromAppComponent: Customer;

  // dependency injection: moving the data responsiblity of grabbing the data to the service
  // and that is used in the app component where it is dependency injected
  constructor(private customerService: CustomerService) {
    // Ask for a bunch of code to execute
    customerService.getAll().subscribe(
      // Executing and explaining when done and let's me know
      customers => {
        this.customers = customers;
      }
    );
  }

  ngOnInit() {
  }

}
