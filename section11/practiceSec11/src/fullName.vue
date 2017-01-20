<template>
    <div class="row">
        <div class="form-group">
            <div class="col-sm-6">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" class="form-control" :value="firstName" @input="nameChanged(true, $event)">
            </div>
            <div class="col-sm-6">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" class="form-control" :value="lastName" @input="nameChanged(false, $event)">
            </div>
            <div class="col-xs-12">
            </div>
            <!--{{ test() }}-->
        </div>
    </div>

</template>

<script>
    export default{
        /*data(){
            return{
                   firstName: '',
                   lastName:  '',
                   fullName: function(){
                       return this.firstName + ' '+this.lastName
                   },
            };
        },
        methods:{
            test(){
                this.$emit('Test', this.fullName());
            }
        }*/

        props: ['value'],
        methods:{
            nameChanged(isFirst, event){
                let name = '';
                if(isFirst){
                    name= event.target.value+ ' ' + this.lastName;
                } else{
                    name= this.firstName +' '+event.target.value;
                }
                this.value= name;
                this.$emit('input', this.value);
            }
        },
        computed:{
            firstName(){
                return this.value.split(" ")[0];
            },
            lastName(){
                return this.value.split(" ")[1];
            }
        }
    }
</script>
