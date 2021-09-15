import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Home2 from '../views/Home2.vue';
import Home3 from '../views/Home3.vue';
import Home4 from '../views/Home4.vue'; 
import Home5 from '../views/Home5.vue'; 
import Home6 from '../views/Home6.vue'; 
import Home7 from '../views/Home7.vue'; 
import Home8 from '../views/Home8.vue'; 
import login from '../views/login.vue';
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
 
  { path: '/Home2',
    name: 'Home2',
    component: Home2
},

{ path: '/Home3',
name: 'Home3',
component: Home3
},

{ path: '/Home4',
name: 'Home4',
component: Home4
},

{ path: '/Home5',
name: 'Home5',
component: Home5
},

{ path: '/Home6',
name: 'Home6',
component: Home6
},

{ path: '/Home7',
name: 'Home7',
component: Home7
},

{ path: '/Home8',
name: 'Home8',
component: Home8
},
{ path: '/login',
name: 'login.vue',
component: login
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


