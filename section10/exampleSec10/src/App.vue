<template>
  <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
      <app-new-quote @quoteAdded="newQuotes"></app-new-quote>
      <app-quote-grid :quoteSe="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">
              Info : Click on a Quote to delete it!
            </div>
        </div>
      </div>
  </div>
</template>

<script>
    import quoteGrid from './components/quoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

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
            if(this.quotes.length >= this.maxQuotes){
              return alert('Please Delete Quotes first!');
            }
            this.quotes.push(quote);
          },
          deleteQuote(index){
            this.quotes.splice(index, 1);
          }
        },
        components: {
            appQuoteGrid: quoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
