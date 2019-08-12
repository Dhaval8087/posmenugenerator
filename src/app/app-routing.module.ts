import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteSegments } from "./core/route-segments.enum";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MenuComponent } from "./menu/menu.component";
import { CouponsComponent } from "./coupons/coupons.component";
import { ItemsComponent } from "./coupons/items/items.component";
import { CategoriesComponent } from './coupons/categories/categories.component';

const routes: Routes = [
  {
    path: RouteSegments.GeneralRoutes.menu,
    component: MenuComponent
  },
  {
    path: RouteSegments.GeneralRoutes.dashboard,
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
