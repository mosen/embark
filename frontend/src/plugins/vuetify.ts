// TODO: vuetify-loader isnt properly importing eg. AppBar styles without bringing in the whole stylesheet.
import Vue from 'vue';
import Vuetify, {UserVuetifyPreset} from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';


import '../assets/main.scss';

Vue.use(Vuetify);

const preset: UserVuetifyPreset = {
    theme: {
        dark: true,
        // themes: {
        //     light: embarklight,
        //     dark: embarkdark,
        // },
    },
    icons: {
        iconfont: 'mdi',
        values: {},
    }
};

export default new Vuetify(preset);
