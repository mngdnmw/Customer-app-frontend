import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  // getCustomers(): Observable<Customer[]> {
  //   return this.http.get('http://customerapp-mtd-easv.azurewebsites.net';).map

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>
     (environment.apiEndpoint + '/customers');
  }
}
