import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to,from,savePosition){
        if(to.hash){
            return { selector: to.hash };
        }
    }
});

router.beforeEach((to,from,next)=>{
    console.log('global beforeEach');
    next();
});

new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
