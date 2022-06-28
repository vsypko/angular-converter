import { Component, OnInit } from '@angular/core';
import currencySigns from '../../assets/json/currencies.json';

export interface ICurrency {
  unit: string;
  sign: string;
  rate: number;
  exchangedate: string;
};

interface IStatExchangeNBU {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  usedCurrencies: ICurrency[] = [{
    unit:"UAH",
    sign: currencySigns['UAH'].c_sign,
    rate: 1,
    exchangedate: new Date().toDateString()
  }];
  
  constructor() { };

  async ngOnInit(): Promise<void> {

    const res: Response = await fetch(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    );

    const data: IStatExchangeNBU[] = await res.json();

    data.forEach((el) => {
      if (el.cc === 'USD' || el.cc === 'EUR') {
        this.usedCurrencies.push({
          unit: el.cc,
          sign: currencySigns[el.cc].c_sign,
          rate: el.rate,
          exchangedate: el.exchangedate
        });
      };
    });
  };
};
