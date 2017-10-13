// import { Vue } from 'vue';
var Vue = require('vue').default;
import { App } from './app.vue';


// var appT = new Vue(app);
console.log(App)

new Vue({

    components: {
        App: App
    },
    data() {
        return {
            message: 123
        }
    }
}).$mount('#app')
 Vue.component('my-div',{
     template:'<div>test</div>>'
 });