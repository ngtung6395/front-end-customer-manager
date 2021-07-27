import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})

export class DeleteCustomerComponent implements OnInit {
  id:any;
  constructor(private customerService:CustomerService,
    private activeRouter:ActivatedRoute,
    private router:Router) { 
      this.activeRouter.paramMap.subscribe((paraMap:ParamMap)=>{
        this.id =paraMap.get('id')
    })
  }

  ngOnInit(): void {
  }
  deleteCustomer(){
    console.log(this.id)
    this.customerService.deleteCustomer(this.id).subscribe(()=>
    this.router.navigateByUrl('/home'));
    
  }
}
