import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductInfoService, Product } from '../product-info.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentComponent implements OnInit {
  products: Product[];
  helloName: String;
  constructor(private ProductInfo: ProductInfoService) {
    this.products = ProductInfo.getProducts();
    this.helloName = `I'm child.`;
  }

  ngOnInit() {
  }

}
