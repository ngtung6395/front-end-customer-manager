import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  customer = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

;
  constructor(private customerService:CustomerService,
    private activeRouter:ActivatedRoute) {
      this.activeRouter.paramMap.subscribe((paraMap:ParamMap)=>{
         this.customerService.findCustomerById(paraMap.get('id')).subscribe((customer)=>{
            this.customer.controls["id"].setValue(customer.id);
            this.customer.controls["name"].setValue(customer.name);
         });
      })
     }


    

  ngOnInit(): void {
    
  }


  updateCustomer(){
  this.customerService.updateCustomer(this.customer.controls["id"].value,this.customer.value).subscribe(()=>{
    alert("sua thanh cong");
  });
  }
}
