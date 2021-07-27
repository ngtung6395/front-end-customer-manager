import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interface/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    })
  }
}
