import Vue from 'vue'
import App from './App.vue'
import dayjs from './plugins/dayjs'

Vue.config.productionTip = false

Vue.use(dayjs)

new Vue({
	render: (h) => h(App),
}).$mount('#app')
