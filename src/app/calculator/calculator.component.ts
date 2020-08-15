import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
  numberButtons: number[];
  operatorButtons: string[];
  result: string;
  firstNumber = '';
  secondNumber = '';
  sign = '';
  constructor() {
    this.numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.operatorButtons = ['+', '-', '*', '/', '='];
    this.result = '';
  }

  processValue(event): void {
    const val = event.target.value;
    // let firstNumber = '';
    // let secondNumber = '';
    // let sign = '';

    // debugger;

    if (this.operatorButtons.includes(val)) {
      if (val === '=') {
        this.result = this.calculate().toString();
        return;
      } else {
        if (this.sign === '') {
          this.sign = val;
        } else {
          this.result = this.calculate().toString();
          this.firstNumber = this.result;
          this.secondNumber = '';
          this.sign = val;
        }
      }
    } else {
      if (this.sign === '') {
        this.firstNumber += val;
      } else {
        this.secondNumber += val;
      }
    }
    this.result += val;
  }

  calculate(): number {
    if (
      this.firstNumber === '' ||
      this.secondNumber === '' ||
      this.sign === ''
    ) {
      return 0;
    }

    switch (this.sign) {
      case '*':
        return parseInt(this.firstNumber, 10) * parseInt(this.secondNumber, 10);
      case '+':
        return parseInt(this.firstNumber, 10) + parseInt(this.secondNumber, 10);
      case '-':
        return parseInt(this.firstNumber, 10) - parseInt(this.secondNumber, 10);
      case '/':
        return parseInt(this.firstNumber, 10) / parseInt(this.secondNumber, 10);

      default:
        return 0;
    }
  }
}
