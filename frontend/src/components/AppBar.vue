<template>
    <v-app-bar
        app
        dark
        clipped-left>
        <v-app-bar-nav-icon @click.stop="toggleNavDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="title">Embark</v-toolbar-title>
        <v-spacer></v-spacer>
        <ProfileMenu firstName="joe" sn="bloggs"></ProfileMenu>
    </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ProfileMenu from "@/components/ProfileMenu.vue";

@Component({
    components: {ProfileMenu},
})
export default class AppBar extends Vue {
    public toggleNavDrawer(): void {
        this.$store.commit("navDrawer", !this.$store.state.drawer.open);
    }
}
</script>

<style scoped>

</style>