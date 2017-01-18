<template>
    <div class="row">
        <app-quote v-for="quote in quoteSe">{{ quote }}</app-quote>
    </div>
</template>

<script>
    import quote from './quote.vue'
    export default{
        props: ['quoteSe'],
        components:{
            appQuote: quote
        }
    }
</script>

<style>

</style>