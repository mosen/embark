<template>
    <v-app-bar
        app
        dark
        clipped-left
    >
        <v-app-bar-nav-icon @click.stop="toggleNavHidden"></v-app-bar-nav-icon>

        <v-toolbar-title class="title">Embark</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon tile title="KSQL Terminal" to="/ksql">
            <v-icon>mdi-powershell</v-icon>
        </v-btn>

        <ProfileMenu firstName="joe" sn="bloggs"></ProfileMenu>
    </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ProfileMenu from "@/components/ProfileMenu.vue";

@Component({
    components: {ProfileMenu},
})
export default class AppBar extends Vue {
    public toggleNavHidden() {
        this.$store.commit("NAV_DRAWER_OPEN", !this.$store.state.drawer.open);
    }
}
</script>

<style scoped>

</style>