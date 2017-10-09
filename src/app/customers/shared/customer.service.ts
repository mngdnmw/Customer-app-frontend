import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  // getCustomers(): Observable<Customer[]> {
  //   return this.http.get('http://customerapp-mtd-easv.azurewebsites.net';).map

  getCustomers(): Observable<Customer[]> {
    return this.http.get('http://customerapp-mtd-easv.azurewebsites.net/api/customers').map(resp => resp.json() as Customer[]);
  }
}
