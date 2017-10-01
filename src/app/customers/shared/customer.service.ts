import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import {Http} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(url:'http://cs2017lbilde.azurewebsites.net/api/customers').map(resp=>resp.json() as Customer[]);
    // [
    // {firstName: 'Person', lastName: 'PersonLast'},
    // {firstName: 'Person2', lastName: 'PersonLast2'},
    // {firstName: 'HEEEYYYY', lastName: 'YOU'}
    // ];
  }
}
