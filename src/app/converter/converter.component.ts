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
  leftrate = 1
  rightrate = 1



  constructor() { }

  handleInput(e: any) {
    switch (e.target.name) {
      case "leftselect":
        this.leftrate = Number(e.target.value);
        this.rightvalue = (Number(this.leftvalue) * this.leftrate / this.rightrate).toFixed(2);
        break
      case "leftinput":
        this.leftvalue = e.target.value
        this.rightvalue = (Number(this.leftvalue) * this.leftrate / this.rightrate).toFixed(2);
          break
      case "rightselect":
        this.rightrate = Number(e.target.value)
        this.leftvalue = (Number(this.rightvalue) * this.rightrate/this.leftrate).toFixed(2)
            break
      case "rightinput":
        this.rightvalue = e.target.value
        this.leftvalue = (Number(this.rightvalue) * this.rightrate / this.leftrate).toFixed(2);
              break
    }
  }
}
