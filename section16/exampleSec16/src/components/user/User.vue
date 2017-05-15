<template>
    <div>
        <h1>The User page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
    </div>
</template>

<script>
    export default{
        methods:{
            navigateToHome(){
                this.$router.push('/');
            }
        }
    }
</script>