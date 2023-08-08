import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  @Input() productData :any
  constructor() { }

  ngOnInit(): void {
  }

}
