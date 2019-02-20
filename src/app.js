import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data: {
      rates: {},
      convertingFrom: null,
      convertingTo: null,
      exchangedCurrency: null,
      amountToConvert: null,
      baseCurrencyType: null

    },
    mounted: function () {
      this.getForex()
    },
    methods: {
      getForex: function () {
      fetch('https://api.exchangeratesapi.io/latest')
      .then(res => res.json())
      .then(forexData => this.rates = forexData.rates)
      },
      currencyExchange: function () {
        this.exchangedCurrency = (1 / this.convertingFrom * this.amountToConvert) * this.convertingTo;
        this.exchangedCurrency = Math.round(this.exchangedCurrency * 100) / 100
                // this.exchangedCurrency = ((this.rates[this.convertingFrom] / this.rates[this.amountToConvert]) * this.convertingTo).toFixed(2)
                // this.exchangedCurrency = null
      }
    }
  });
});
