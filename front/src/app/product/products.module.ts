import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { SharedModule } from 'app/shared/shared.module';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsAdminComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataViewModule
  ],
  exports: [ProductsComponent, ProductsAdminComponent]
})
export class ProductsModule { }
