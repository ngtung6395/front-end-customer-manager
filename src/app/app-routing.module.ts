import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
import { CustomerComponent } from './component/customer/customer.component';
import { EditCustomerComponent } from './component/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './component/delete-customer/delete-customer.component';

const routes: Routes = [{path:'home',component:CustomerComponent},
{path:'create',component:CreateCustomerComponent},
{path:'detail',component:CustomerDetailsComponent},
{path:'edit/:id',component:EditCustomerComponent},
{path:'delete/:id',component:DeleteCustomerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
