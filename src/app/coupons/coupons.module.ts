import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { CategoriesComponent } from "./categories/categories.component";
import { ItemsComponent } from "./items/items.component";
import { RouterModule, Routes } from "@angular/router";
import { RouteSegments } from "../core/route-segments.enum";
import { CouponsComponent } from "./coupons.component";
import { AddEditCouponComponent } from './add-edit-coupon/add-edit-coupon.component';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: RouteSegments.GeneralRoutes.coupons,
    component: CouponsComponent
  },
  {
    path: "coupons/items",
    component: ItemsComponent
  },
  {
    path: "coupons/categories",
    component: CategoriesComponent
  }
];
@NgModule({
  declarations: [CategoriesComponent, ItemsComponent, AddEditCouponComponent],
  imports: [CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)],
  entryComponents:[AddEditCouponComponent],
  providers:[NgbModalConfig]
})
export class CouponsModule {}
