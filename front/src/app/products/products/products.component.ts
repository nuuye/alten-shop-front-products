import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products-admin.service';
import { Product } from '../products-admin.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
