import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstValue = 0;
  secondValue = 0;
  calcExp= '+';

  calculate() {
    switch (this.calcExp) {
      case '-': return this.firstValue * 1 - this.secondValue * 1;
      case'/': return this.firstValue * 1 / this.secondValue * 1;
      case'*': return this.firstValue * 1 * this.secondValue * 1;
      default: return this.firstValue * 1 + this.secondValue * 1;
    } }
}
