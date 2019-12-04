<template>
    <v-app id="app">
        <navigation-drawer></navigation-drawer>
        <app-bar></app-bar>
        <v-content>
            <router-view/>
            <v-snackbar v-model="snackbarVisible">{{ snackbarText }}</v-snackbar>
        </v-content>
    </v-app>
</template>

<style lang="scss">

</style>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NavigationDrawer from './components/NavigationDrawer.vue';
import AppBar from '@/components/AppBar.vue';


@Component({
    components: {
        NavigationDrawer,
        AppBar,
    }
})
export default class App extends Vue {
    public get snackbarVisible(): boolean {
        return this.$store.state.snackbar.open;
    }

    public set snackbarVisible(value: boolean) {

    }

    public get snackbarText(): string {
        return this.$store.state.snackbar.text;
    }


}
</script>