import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-math-box',
  templateUrl: './math-box.component.html',
  styleUrls: ['./math-box.component.scss']
})
export class MathBoxComponent implements OnInit {
  @Input() value1 = 42;
  @Input() value2 = 69;
  @Output() sendOperation = new EventEmitter();
  operatorList = ['+', '-', '*', '/'];

  constructor() { }

  ngOnInit() {
  }


  doMath() {
    const operator1 = this.operatorList[Math.floor(Math.random() * 3) + 1];
    const operator2 = this.operatorList[Math.floor(Math.random() * 3) + 1];
    const operation = `${this.value1} ${operator1} ${this.value2} ${operator2} ${this.value1 ^ this.value2}`;
    this.sendOperation.emit({
      result: eval(operation),
      operation: operation
    });
  }
}
