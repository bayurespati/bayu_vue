<template>
  <div class="container">
      <app-quote-grid :quoteSe="quotes"></app-quote-grid>
  </div>
</template>

<script>
    import quoteGrid from './components/quoteGrid.vue';
    export default {
        data: function(){
          return{
            quotes:[
              'just a Quote to see something'
            ],
            maxQuotes: 10
          }
        },
        components: {
            appQuoteGrid: quoteGrid
        }
    }
</script>

<style>
</style>
