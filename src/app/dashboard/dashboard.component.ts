import { Component, OnInit } from "@angular/core";
import { NgbTabsetConfig } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { RouteSegments } from "../core/route-segments.enum";

@Component({
  selector: "mg-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  menucls: string;
  constructor(private router: Router) {
    this.menucls = "collapse";
  }

  ngOnInit() {}

}
