import Vue, {VNode} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.filter('lastcomponent', (value: string): string => {
    if (!value) return '';
    return value.substr(value.lastIndexOf('.') + 1);
});

new Vue({
    router,
    store,
    vuetify,
    render: (h): VNode => h(App)
}).$mount('#app');
