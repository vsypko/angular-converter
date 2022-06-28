import { Component, Input } from '@angular/core';
import { ICurrency } from '../header/header.component'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  leftvalue = "1"
  rightvalue = "1"
  @Input() usedCurrencies: ICurrency[] = []
  leftselect = 1
  rightselect = 1



  constructor() { }

  handleInput(e: any) {
    switch (e.target.name) {
      case "leftselect":
        this.leftselect = Number(e.target.value);
        this.rightvalue = (Number(this.leftvalue) * this.leftselect / this.rightselect).toFixed(2);
        break
      case "leftinput":
        this.leftvalue = e.target.valueAsNumber
        this.rightvalue = (Number(this.leftvalue) * this.leftselect / this.rightselect).toFixed(2);
          break
      case "rightselect":
        this.rightselect = Number(e.target.value)
        this.leftvalue = (Number(this.rightvalue) * this.rightselect/this.leftselect).toFixed(2)
            break
      case "rightinput":
        this.rightvalue = e.target.valueAsNumber
        this.leftvalue = (Number(this.rightvalue) * this.rightselect / this.leftselect).toFixed(2);
              break
    }
  }
}
