import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CouponsComponent } from './coupons/coupons.component';
import { MenuModule } from './menu/menu.module';
import { CouponsModule } from './coupons/coupons.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    CouponsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MenuModule,
    CouponsModule
  ],
  providers: [NgbTabsetConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
