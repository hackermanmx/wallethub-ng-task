import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-contact-log',
  templateUrl: './contact-log.component.html',
  styleUrls: ['./contact-log.component.scss']
})
export class ContactLogComponent implements OnInit, OnChanges {
  @Input() formData: any;
  @Input() msg: string;
  msgChangeLog = [];
  formChangeLog = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
     for (let propName in changes) {
        let change = changes[propName];
        let curVal  = JSON.stringify(change.currentValue);
        let prevVal = JSON.stringify(change.previousValue);
        let log = `Current = ${curVal}<br/> Previous = ${prevVal}`;

        if (propName === 'msg') {
           this.msgChangeLog.push(log);
           this.msgChangeLog = Array.from(new Set(this.msgChangeLog));
        } else if (propName === 'formData') {
           this.formChangeLog.push(log);
           this.formChangeLog = Array.from(new Set(this.formChangeLog));
        }
     }
  }

}
