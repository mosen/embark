<template>
    <v-container>
        <v-row>
            <v-col xs12>
                <h4>Subject</h4>
                <h1 class="display-1">{{ $route.params.name }}</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2">
                <VersionBrowser
                        :url-prefix="'/subject/' + name + '/versions/'"
                        :versions="versions"
                        :selected="selected"
                />
            </v-col>
            <v-col>
                <v-alert v-if="loading || schema === null">
                    Loading
                </v-alert>
                <Schema v-else
                        :id="schema.id"
                        :subject="schema.subject"
                        :schema="JSON.parse(schema.schema)"
                        :version="schema.version"
                />
            </v-col>
        </v-row>

    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {SchemaDetail} from '@/store/subjects/types';
import Schema from "@/components/subjects/Schema.vue";
import VersionBrowser from "@/components/subjects/VersionBrowser.vue";


@Component({
    components: {VersionBrowser, Schema}
})
export default class Subject extends Vue {

    public tabs = "subject-tabs-1";

    public mounted(): void {
        this.$store.dispatch('schemaVersion', { subject: this.$route.params.name, version: this.$route.params.version });
        this.$store.dispatch('schemaVersions', this.$route.params.name);
    }

    public get name(): string {
        return this.$route.params.name;
    }

    public get loading(): boolean {
        return this.$store.state.subjects.schema.loading;
    }

    public get schema(): SchemaDetail | null {
        if (Object.prototype.hasOwnProperty.call(this.$store.state.subjects.schema.versions, this.$route.params.version)) {
            return this.$store.state.subjects.schema.versions[this.$route.params.version];
        } else {
            return null;
        }

        // if (Object.prototype.hasOwnProperty.call(this.$store.state.subjects.schema.versions, this.$route.params.version)) {
        //     return this.$store.state.subjects.schema.versions[this.$route.params.version];
        // } else {
        //     return null;
        // }
    }

    public get selected(): string {
        return this.$route.params.version;
    }

    public get versions(): number[] | null {
        return this.$store.state.subjects.schema.versionCount;
    }
}
</script>