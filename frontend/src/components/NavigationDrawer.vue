<template>
    <v-navigation-drawer
        v-model="open"
        app clipped light
    >
        <v-list flat>
            <v-list-item to="/">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item to="/groups" disabled>
                <v-list-item-action>
                    <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Groups</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Kafka
                    </v-list-item-title>
                    <v-list-item-subtitle>

                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item to="/topics">
                <v-list-item-action>
                    <v-icon>mdi-forum</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Topics</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                        <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-list-item to="/consumer-groups">
                <v-list-item-action>
                    <v-icon>mdi-basket-fill</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Consumer Groups</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Kafka Connect
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        connectors
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item to="/connectors">
                <v-list-item-action>
                    <v-icon>mdi-arrow-left-right-bold-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Connectors</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item to="/connector-plugins">
                <v-list-item-action>
                    <v-icon>mdi-power-plug</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Plugins</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Schema Registry
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item to="/subjects">
                <v-list-item-action>
                    <v-icon>mdi-table</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Subjects</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        KSQL
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item to="/ksql">
                <v-list-item-action>
                    <v-icon>mdi-database</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>KSQL Editor</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
    import {Component,Vue} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class NavigationDrawer extends Vue {

    public get open(): boolean {
        return this.$store.state.drawer.open;
    }

    public set open(value: boolean) {
        this.$store.commit("NAV_DRAWER_OPEN", value);
    }

}
</script>

<style scoped>

</style>