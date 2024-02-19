import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../products.model';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;
  products: Product[] = [];
  sortKey: any;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.products = response.data;
        console.log(this.products);
      }
    )
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

}
