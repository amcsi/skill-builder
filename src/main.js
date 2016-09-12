import Vue from 'vue'
import App from './App'
import VueDragula from 'vue-dragula'
import 'vue-dragula/styles/dragula.min.css'

Vue.use(VueDragula)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
