import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbAlertModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbTabsetModule,
  NgbTimepickerModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MgButtonComponent } from './components/mg-button/mg-button.component';

@NgModule({
  declarations: [MgButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTabsetModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    NgbAlertModule,
    NgbModalModule,
    AngularFontAwesomeModule
  ],
  exports : [
    NgbTabsetModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    NgbAlertModule,
    NgbModalModule,
    MgButtonComponent,
    AngularFontAwesomeModule
  ]
})
export class SharedModule { }
