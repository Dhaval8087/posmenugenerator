import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { AddEditCouponComponent } from "../add-edit-coupon/add-edit-coupon.component";

@Component({
  selector: "mg-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private modalConfig: NgbModalConfig
  ) {
    this.modalConfig.backdrop = "static";
  }

  ngOnInit() {}
  onAddCategory() {
    this.modalService.open(AddEditCouponComponent, { centered: true });
  }
}
