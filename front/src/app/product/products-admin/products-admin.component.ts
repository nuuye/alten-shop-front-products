import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';
import { MessageService, SelectItem } from 'primeng/api';
import { ProductService } from '../products.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
  providers: [MessageService]
})

export class ProductsAdminComponent implements OnInit {

  products: Product[] = [];
  selectedProducts!: Product;

  clonedProducts: { [s: string]: Product } = {};

  constructor(private productService: ProductService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProductList();
    this.primengConfig.ripple = true;
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.products = response.data;
        console.log(response);
      }
    )
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id as unknown as string] = { ...product };
  }

  onRowEditSave(product: Product) {
    if (product.name.length === 0) {
      delete this.clonedProducts[product.id as unknown as string];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Input' });
    }
  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id as unknown as string];
    delete this.clonedProducts[product.id as unknown as string];
  }
}

