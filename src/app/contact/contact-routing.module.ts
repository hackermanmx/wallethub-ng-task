import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import {VerifyContactComponent} from './verify-contact/verify-contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
  // Has one route that demonstrates how nested <router-outlet> works.
  { path: 'verify-contact', component: VerifyContactComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
