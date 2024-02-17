import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Footer } from 'primeng/api';
import { NavbarComponent } from './base/navbar/navbar.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsAdminComponent } from './products/products-admin.component';

//define routes
const routes: Routes = [
  {
    path: 'admin/products',
    component: ProductsAdminComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
