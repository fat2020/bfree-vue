import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

/* import BootstrapVue from 'bootstrap-vue' */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

this.axios.get("http://localhost:8000/annonce/FindAll")
      .then(res => {
          console.log(res.data);
          this.annonces = res.data.annonce
      })
      .catch(err => {
          alert(err);
      }),

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


 /* render :  function ( createElement ) {
  return  createElement (App);
}La render()fonction est un élément central de Vue.
 */

new Vue({
  router,
  store,
  // h un alias createElement
  render: h => h(App),
  // “mount” signifie le moment où votre composant est inséré dans le DOM.
  // Ce code crée une nouvelle instance de Vue et la monte sur l'élément HTML avec l'ID d'application. 
}).$mount('#app')