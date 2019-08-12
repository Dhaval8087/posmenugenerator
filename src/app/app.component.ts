import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteSegments } from './core/route-segments.enum';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'menugenerator';
  navbarOpen = false;
  menucls: string;
  constructor(private router : Router){
    this.menucls = "collapse";
  }
  onMenu() {
    if (this.menucls === "collapse") {
      this.menucls = "collapse show";
    } else if (this.menucls === "collapse show") {
      this.menucls = "collapse";
    }
  }
  onMenuClicked() {
    this.router.navigateByUrl(RouteSegments.GeneralRoutes.menu);
  }
  onCouponsClicked() {
    this.router.navigateByUrl(RouteSegments.GeneralRoutes.coupons);
  }
  ngOnInit() {
  this.router.navigateByUrl('dashboard');
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
