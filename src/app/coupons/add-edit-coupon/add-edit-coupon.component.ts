import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "mg-add-edit-coupon",
  templateUrl: "./add-edit-coupon.component.html",
  styleUrls: ["./add-edit-coupon.component.scss"]
})
export class AddEditCouponComponent implements OnInit {
  categoryForm: FormGroup;
  constructor(private fb: FormBuilder, public activeModel: NgbActiveModal) {}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name:['', [Validators.required]],
      id: ['', [Validators.required]],
      cropid: ""
    });
  }
  onCancel() {
    this.activeModel.dismiss();
  }
  onSave() {

  }
}
