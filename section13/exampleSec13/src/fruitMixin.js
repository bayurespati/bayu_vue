export const fruitMixin = {
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
};
