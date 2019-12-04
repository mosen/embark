<template>
    <v-menu
            disabled
        transition="slide-y-transition"
        bottom
        offset-y
        min-width="300px"
    >
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon tile title="Profile">
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>{{ firstName }} {{ sn }}</v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>joe@email</v-list-item-title>
                            <v-list-item-subtitle>SAML Principal</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>User:joe</v-list-item-title>
                            <v-list-item-subtitle>Kafka Principal</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-btn text>Sign out</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class ProfileMenu extends Vue {

    @Prop()
    private readonly firstName!: string;

    @Prop()
    private readonly sn!: string;

}
</script>

<style scoped>

</style>