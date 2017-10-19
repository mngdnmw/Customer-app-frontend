import {Component} from '@angular/core';
import {Customer} from './customers/shared/customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// create arrays in typescript
  customers: Customer[];
  constructor() {
  }
}
