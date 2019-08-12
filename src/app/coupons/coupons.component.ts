import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mg-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onItem() {
   this.router.navigateByUrl('items');
  }
  onCategories() {
    this.router.navigateByUrl('categories');
  }
}
