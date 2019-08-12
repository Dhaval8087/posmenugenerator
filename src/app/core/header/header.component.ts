import { Component, OnInit } from '@angular/core';
import { RouteSegments } from '../route-segments.enum';

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  RouteSegments=RouteSegments;
  constructor() { }

  ngOnInit() {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
