import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ProductCreateComponent} from './component/product-create/product-create.component';


const routes: Routes = [
  {
  path: 'products/list',
  component: ProductListComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
