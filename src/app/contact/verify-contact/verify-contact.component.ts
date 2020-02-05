import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/internal/operators';
import {Subject} from "rxjs/index";

@Component({
  selector: 'app-verify-contact',
  templateUrl: './verify-contact.component.html',
  styleUrls: ['./verify-contact.component.scss']
})
export class VerifyContactComponent implements OnInit, OnDestroy {
  formData = null;
  destroy$ = new Subject();

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe( data => {
      this.formData = data;
   });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
