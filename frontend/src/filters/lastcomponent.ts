import Vue from "vue";

Vue.filter('lastcomponent', (value: string): string => {
    if (!value) return '';
    return value.substr(value.lastIndexOf('.'));
});

