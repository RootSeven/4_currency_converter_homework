import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      exchangeRates: {}
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
