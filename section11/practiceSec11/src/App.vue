<!-- Exercise 1 -->
<!-- Create a Signup Form where you retrieve the following Information -->
<!-- Full Name (First Name + Last Name) -->
<!-- Mail -->
<!-- Password -->
<!-- Store Data? Yes/No -->

<!-- Exercise 2 -->
<!-- Only display the Form if it has NOT been submitted -->
<!-- Display the Data Summary ONCE the Form HAS been submitted -->

<!-- Exercise 3 -->
<!-- Edit the Example from above and create a custom "Full Name" Control -->
<!-- which still holds the First Name and Last Name Input Field -->
<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Form Signup</h1>

          <keep-alive>
          <app-full-name v-model="dataUser.name"></app-full-name>
          </keep-alive>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
                    type="text"
                    id="email"
                    class="form-control"
                    v-model="dataUser.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
                    type="password"
                    id="password"
                    class="form-control"
                    v-model="dataUser.password">
          </div>

          <div class="row">
            <div class="col-xs-12 form-group">
              <p>Store in Database?</p>
              <label for="Yes">
                <input
                        type="radio"
                        id="Yes"
                        value="Yes"
                        v-model="choice"> Yes
              </label>
              <label for="No">
                <input
                        type="radio"
                        id="No"
                        value="No"
                        v-model="choice"> No
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
                  class="btn btn-primary"
                  @click.prevent="submitted">Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ dataUser.name }}</p>
            <!--<p>Full Name: {{ dataUser.firstName+' '+dataUser.lastName }}</p>-->
            <p>Mail: {{ dataUser.email }}</p>
            <p>Password: {{ dataUser.password }}</p>
            <p>Store in Database: {{ choice }}</p>
            <div class="row">
              <div class="col-xs-12">
                <button @click="back" class="btn btn-warning">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import fullName from './fullName.vue'

    export default {
      data(){
        return{
          dataUser:{
            name: ' ',
            email: '',
            password: '',
          },
          choice: '',
          isSubmitted: false,
        };
      },
      methods:{
        submitted(){
          this.isSubmitted = true;
        },
        back(){
          this.isSubmitted = false;
        }
      },
      components:{
        appFullName : fullName
      }
    }
</script>

<style>
</style>
