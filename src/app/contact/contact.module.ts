import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { VerifyContactComponent } from './verify-contact/verify-contact.component';
import {CustomCurrencyDirective} from '../directives/custom-currency.directive';
import {CustomCurrencyPipe} from '../pipes/custom-currency.pipe';
import { ContactLogComponent } from '../common/contact-log/contact-log.component';

@NgModule({
  declarations: [
    ContactLogComponent,
    CustomCurrencyDirective,
    ContactComponent,
    VerifyContactComponent],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    ContactRoutingModule
  ],
  providers: [
    CustomCurrencyPipe
  ]
})
export class ContactModule { }
