<template>
  <div class="continer">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animation</h1>
        <hr>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br><br>
        <button class="btn btn-primary" @click="show = !show" k>Show Alert</button>
        <br><br>
        <transition
                enter-active-class="animated bounceInUp"
                leave-active-class="animated fadeOutLeftBig"
                appear>
          <div class="alert alert-success" v-if="show">This is some Info.</div>
        </transition>
        <transition
                name="fade"
                leave-active-class="animated zoomOutUp">
          <div class="alert alert-info" v-if="show">This is some Info.</div>
        </transition>
        <transition
                enter-active-class="animated bounceInDown"
                leave-active-class="animated fadeOutRightBig"
                appear>
          <div class="alert alert-danger" v-if="show">This is some Info.</div>
        </transition>
        <transition
                :name="alertAnimation"
                appear>
          <div class="alert alert-warning" v-if="show">This is some Info.</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        show:false,
       alertAnimation:''
      }
    }
  }
</script>

<style>
  .fade-enter{
    opacity: 0;
  }

  .fade-enter-active{
    transition: opacity 1s;
  }

  .fade-leave{
  }

  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter{
  }
  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave{
  }
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }

  @keyframes slide-in{
    from{
      transform: translateY(-60px);

    }
    to{
      transform: translateY(0);
    }
  }
  @keyframes slide-out{
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(-60px);
    }
  }
</style>