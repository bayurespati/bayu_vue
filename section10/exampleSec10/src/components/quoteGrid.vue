<template>
    <div class="row">
        <app-quote v-for="(quote,index) in quoteSe" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
</template>

<script>
    import quote from './quote.vue'
    export default{
        props: ['quoteSe'],
        components:{
            appQuote: quote
        },
        methods:{
            deleteQuote(index){
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style>

</style>