import Vue from 'vue'
import App from './App'
import VueDragula from 'vue-dragula'
import 'vue-dragula/styles/dragula.min.css'

Vue.use(VueDragula)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render (h) {
    return h(App)
  },
  components: { App }
})
