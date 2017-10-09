import {Component} from '@angular/core';
import {Customer} from './customers/shared/customer.model';
import {CustomerService} from './customers/shared/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // create arrays in typescript
  customers: Customer[];
  // customerFromAppComponent: Customer;

  // dependency injection: moving the data responsiblity of grabbing the data to the service
  // and that is used in the app component where it is dependency injected
  constructor(private customerService: CustomerService) {
    // Ask for a bunch of code to execute
    customerService.getCustomers().subscribe(
        // Executing and explaining when done and let's me know
        customers => {
          this.customers = customers;
        }
      );
  }
}
