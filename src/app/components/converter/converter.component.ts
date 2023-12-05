import { Component, OnInit } from '@angular/core';
import { CustomInputComponent } from '../common/custom-input/custom-input.component';
import { CustomDropdownComponent } from '../common/custom-dropdown/custom-dropdown.component';
import { Currencies, currencies } from '../../currencies';
import { ButtonComponent } from '../common/button/button.component';
import { CurrencyService } from '../../currency.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CustomInputComponent, CustomDropdownComponent, ButtonComponent],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent implements OnInit {
  exchangeRates?: any;
  currencyOptions = currencies;
  fromCurrency: Currencies = this.currencyOptions[1]; // GBP currency
  toCurrency: Currencies = this.currencyOptions[2]; // EUR currency
  fromOptions: Currencies[] = [];
  toOptions: Currencies[] = [];
  amount: number = 10;
  convertedAmount: number = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.fromOptions = this.currencyOptions.filter(
      (option: any) => option.value !== this.fromCurrency.value
    );
    this.toOptions = this.currencyOptions.filter(
      (option: any) => option.value !== this.toCurrency.value
    );
    this.currencyService
      .getExchangeRates(this.fromCurrency.value)
      .subscribe((data) => {
        this.exchangeRates = data.rates;
      });
  }
  handleFrom(option: any): void {
    const newOptions = [...this.currencyOptions];
    this.fromCurrency = option;
    this.fromOptions = newOptions.filter((opt) => option.value !== opt.value);

    this.currencyService.getExchangeRates(option.value).subscribe((data) => {
      this.exchangeRates = data.rates;
    });

    this.convertedAmount = 0;
  }

  handleTo(option: any): void {
    const newOptions = [...this.currencyOptions];
    this.toCurrency = option;
    this.toOptions = newOptions.filter((opt) => option.value !== opt.value);

    this.convertedAmount = 0;
  }

  convert(): void {
    if (this.exchangeRates && this.toCurrency) {
      const toRate = this.exchangeRates[this.toCurrency.value];

      if (toRate) {
        this.convertedAmount = this.amount * toRate;
        console.log(this.convertedAmount);
      } else {
        console.error('Invalid currency selected');
      }
    }
  }
}
