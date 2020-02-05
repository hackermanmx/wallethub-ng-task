import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup = null;
  amount = 0;
  msg = null;

  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    // Have 2 inputs with some simple validation (like an email validation) without the require of angular-forms and ngModel
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Passes data between pages. Have an input field in one page of which contents is displayed in the second page.
  sendName() {
    const form = this.form.getRawValue();
    this.router.navigate(['/contact/verify-contact'], { queryParams: form  } ).then();
  }
}
