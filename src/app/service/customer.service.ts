
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../interface/customer';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // customers:Customer[]= [];

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/list');
  };

  // private thhpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':'application/json',
  //     //Authorization : 'my-auth-token'
  
  //   }),
  // };

  // getAll(): Observable<Customer[]> { 
  //   return this.httpClient.get<Customer[]>(API_URL + '/list', this.thhpOptions);
  // }

  saveCustomer(customer:Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(API_URL + '/create', customer);
  }

  findCustomerById(id:any):Observable<Customer>{
    return this.httpClient.get<Customer>(API_URL+'/'+id);
  }

  updateCustomer(id: any, customer: Customer):Observable<any> {
    console.log(id,customer);

   
    return this.httpClient.put(API_URL+'/edit/'+id, customer);
  }

  deleteCustomer(id:any){
    return this.httpClient.delete(API_URL+'/delete/'+id)
  }
}
