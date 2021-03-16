import Vue from 'vue'
import App from './App.vue'
import router from './router'
import styles from './libs/normalize.module.css'
import mainCss from './css/main.css'

Vue.config.productionTip = false

new Vue({
    router,
    styles,
    mainCss,
    render: h => h(App),
}).$mount('#app')
