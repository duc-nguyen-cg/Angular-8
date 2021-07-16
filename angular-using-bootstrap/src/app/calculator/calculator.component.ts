import {Component, OnInit} from '@angular/core';
import {Calculation} from './calculation';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculation: Calculation = {};

  constructor() {
  }

  ngOnInit() {
  }

  calculate(): number {
    switch (this.calculation.operator) {
      case '+': {
        return this.calculation.first + this.calculation.second;
      }
      case '-': {
        return this.calculation.first - this.calculation.second;
      }
      case '*': {
        return this.calculation.first * this.calculation.second;
      }
      case '/': {
        return this.calculation.first / this.calculation.second;
      }
    }
  }
}
