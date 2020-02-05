import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnChanges {
  value1 = 42;
  value2 = 69;
  result = [];
  private count:number = 1;
  public items: Array<any>;

  constructor() {
    this.items = [];
    this.items.push(this.newItem());
    this.items.push(this.newItem());
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  updateBoxResult(value) {
    this.result.push(value);
  }

  pushItem() {
    this.items.push(this.newItem());
  }

  removeItemLast() {
    if (this.items.length > 0) {
      this.items.splice(this.items.length - 1, 1);
    }
  }

  unshiftItem() {
    this.items.unshift(this.newItem());
  }

  removeItemFirst() {
    if (this.items.length > 0) {
      this.items.splice(0, 1);
    }
  }

  newItem() {
    return {title: 'Item' + this.count++};
  }

}
