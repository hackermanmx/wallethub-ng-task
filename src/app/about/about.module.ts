import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MathBoxComponent } from './math-box/math-box.component';


@NgModule({
  declarations: [AboutComponent, MathBoxComponent],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
