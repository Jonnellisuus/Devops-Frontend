export class ForexRates {
  base: string | undefined;
  date: string | undefined;
  rates: [] | undefined;

  constructor(base?: string, date?: string, rates?: []) {
    this.base = base;
    this.date = date;
    this.rates = rates;
  }
}
