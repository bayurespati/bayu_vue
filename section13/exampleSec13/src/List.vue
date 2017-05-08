
<template>

    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruit"><a> {{ fruit }} </a></li>
        </ul>
    </div>

</template>

<script>
  export default{
    data(){
      return{
          fruit: ['Jeruk','Mangga','Sirsak','Jambu','lengkeng'],
          filterText: ''
      }
    },
    computed:{
      filteredFruit(){
        return this.fruit.filter((element) =>{
            return element.match(this.filterText);
       });
      }
    }
  }
</script>