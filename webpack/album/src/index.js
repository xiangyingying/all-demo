import Vue from 'vue';
import '../assets/index.css';
import App from './App.vue';
const root =document.createElement("div");
document.body.append(root)
new Vue({
    render:h=>h(App)
}).$mount(root)