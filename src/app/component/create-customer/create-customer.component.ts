import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  customer = new FormGroup({
    name: new FormControl()
  })

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  create(){
    let customer = this.customer.value;
    this.customerService.saveCustomer(customer).subscribe(() =>{
      alert('tạo thành công');
      
    },e=>{console.log(e)});
  }


}
