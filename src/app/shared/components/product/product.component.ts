import { Component, OnInit } from '@angular/core';
import { Imobile } from 'src/app/models/mobileinterface';
import { mobileProducts } from '../../constant/mobiledata';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public mobileData !: Array<Imobile>
  constructor() { }

  ngOnInit(): void {
    this.mobileData = mobileProducts
    console.log(this.mobileData);
  }

}
