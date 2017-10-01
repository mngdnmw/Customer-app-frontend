import {Component} from '@angular/core';
import {Customer} from './customers/shared/customer.model';
import {CustomerService} from './customers/shared/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //create arrays in typescript
  customers: Customer[];
  //customerFromAppComponent: Customer;

  //dependency injection: moving the data responsiblity of grabbing the data to the service
  //and that is used in the app component where it is dependency injected
  constructor(private customerService: CustomerService) {
    this.customers = customerService.getCustomers();
    //initalise arrays in typescript
    // this.customers = [
    //   {firstName: 'Person', lastName: 'PersonLast'},
    //   {firstName: 'Person2', lastName: 'PersonLast2'},
    //   {firstName: 'Person3', lastName: 'PersonLast3'},
    // ];

    //this.customerFromAppComponent = {firstName: 'Lars', lastName: 'Bob'};
  }
}
