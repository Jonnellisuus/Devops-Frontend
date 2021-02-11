import { Component, OnInit } from '@angular/core';
import {ForexRates} from "./forex-rates";
import {ForexService} from "./forex.service";

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {

  forexList: string[];
  forexRates: ForexRates;
  selectedForex: string | undefined;
  targetForex: string | undefined;
  currentRate: number;
  inputAmount: number | undefined;
  targetAmount: string;

  constructor(private forexRatesService: ForexService) {
    this.targetAmount = '';
    this.currentRate = 1;
    this.forexList = ['EUR'];
    this.forexRates = new ForexRates();
  }

  ngOnInit() {
    this.forexRatesService.getRatesData().subscribe(response => {
      const ratesArray = Object.entries(response.rates);
      ratesArray.forEach(([key]) => {
        this.forexList.push(key);
      });
    });
  }

  onChange() {
    if (this.targetForex !== undefined && this.inputAmount !== undefined && this.selectedForex !== undefined) {
      this.forexRatesService.getData(this.selectedForex).subscribe(response => {
        this.forexRates = response;
        // @ts-ignore
        const ratesArray = Object.entries(this.forexRates.rates);

        ratesArray.forEach(([key, value]) => {
          if (key === this.targetForex) {
            this.currentRate = value;
          }
        });
        // @ts-ignore
        console.log('Summa = ' + this.inputAmount * this.currentRate);
        // @ts-ignore
        this.targetAmount = (this.inputAmount * this.currentRate).toFixed(2);
      });
    }
  }
}
