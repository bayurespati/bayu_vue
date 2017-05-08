<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>

        <p class="btn btn-primary">{{ text | toUppercase | to-lowercase}}</p>
        <hr>

        <input v-model="filterText">

        <ul>
         <li v-for="fruit in filteredFruit"><a> {{ fruit }} </a></li>
        </ul>
        <hr>

        <app-list></app-list>

      </div>
    </div>
  </div>
</template>

<script>
  import List from './List.vue';
  export default{
    data(){
      return{
          text: "How Fucking are you?",
          fruit: ['Jeruk','Mangga','Sirsak','Jambu','lengkeng'],
          filterText: ''
      }
    },
    filters: {
      toUppercase(value){
      return value.toUpperCase();
      }
    },
    computed:{
      filteredFruit(){
        return this.fruit.filter((element) =>{
        return element.match(this.filterText);
       });
      }
    },
    components:{
      appList: List
    }

  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
