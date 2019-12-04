import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

Vue.use(Vuex);
Vue.use(Vuetify, { iconFont: 'mdi'});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
