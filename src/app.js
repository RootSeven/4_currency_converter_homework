import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      exchangeRates: {},
      eurosAmount: 0,
      otherAmount: 0,
      chosenCurrency: ""
    },
    computed: {
      eurosToOther: function() {
        return "hi";
      }
    },
    mounted(){
        this.fetchExchangeRates();
    },
    methods: {
        fetchExchangeRates: function() {
            fetch('https://api.exchangeratesapi.io/latest')
            .then( response => response.json() )
            .then( exchangeRates => this.exchangeRates = exchangeRates )
            .catch( err => console.error(err))
        }
    }
  })
})
