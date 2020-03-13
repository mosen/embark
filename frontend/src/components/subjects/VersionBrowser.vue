<template>
    <v-list>
        <v-subheader>Versions</v-subheader>
        <v-list-item-group v-model="value">
            <v-list-item value="latest" :to="urlPrefix + 'latest'">
                <v-list-item-content>
                    <v-list-item-title>Latest</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item
                v-for="version in versions"
                :key="version"
                :value="'' + version"
                :to="urlPrefix + version"
                >
                <v-list-item-content>
                    <v-list-item-title v-text="'Version ' + version"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script lang="ts">
    import {Component, Prop, Emit, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class VersionBrowser extends Vue {

        private value = "";

        @Prop({ required: true })
        private urlPrefix!: string;

        @Prop()
        private versions!: number[];

        @Prop({ default: "" })
        private selection!: string;

        @Emit()
        private select(e: MouseEvent): number {
            console.log('clicked!');
            console.dir(e);
            return 0;
        }
    }
</script>

<style scoped>

</style>