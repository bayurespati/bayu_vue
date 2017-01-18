<template>
  <div class="container">
      <app-new-quote @quoteAdded="newQuotes"></app-new-quote>
      <app-quote-grid :quoteSe="quotes"></app-quote-grid>
  </div>
</template>

<script>
    import quoteGrid from './components/quoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data: function(){
          return{
            quotes:[
              'just a Quote to see something'
            ],
            maxQuotes: 10
          }
        },
        methods:{
          newQuotes(quote){
            this.quotes.push(quote);
          }
        },
        components: {
            appQuoteGrid: quoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
