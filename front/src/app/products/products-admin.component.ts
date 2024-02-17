import { Component, OnInit } from '@angular/core';
import { Product } from './products-admin.model';
import { ProductService } from './products-admin.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      }
    )
  }
}

/*
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
*/
