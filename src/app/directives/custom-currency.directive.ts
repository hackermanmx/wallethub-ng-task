import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {CustomCurrencyPipe} from '../pipes/custom-currency.pipe';

@Directive({
  selector: '[appCustomCurrency]'
})
export class CustomCurrencyDirective implements OnInit {
private el: any;

  constructor(
    private elementRef: ElementRef,
    private pipe: CustomCurrencyPipe) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit(){
    this.el.value = this.pipe.transform(this.el.value);
  }

  @HostListener('keydown', ['$event.target.value', '$event']) onKeyDown(value, event) {
    this.el.value = this.el.value.replace(/\D/g,'');
    this.el.value = this.pipe.transform(this.el.value);

    let e = <KeyboardEvent> event;
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }

      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
  }
}
