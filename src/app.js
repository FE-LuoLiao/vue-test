// import { Vue } from 'vue';
var Vue = require('vue').default;
import { App } from './app.vue';


// var appT = new Vue(app);
console.log(App)

new Vue({
    // el: '#example',
    // template: '<App>{{message}</App>',
    components: {
        App: App
    },
    data() {
        return {
            message: 123
        }
    }
}).$mount('#app')

// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// });