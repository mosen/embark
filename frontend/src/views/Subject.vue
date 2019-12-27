<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-card flat>
                    <v-card-text>
                        <h1 class="display-1">{{ $route.params.name }}</h1>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <v-tabs v-model="tabs">
                    <v-tab href="#subject-tabs-1">Latest</v-tab>
                    <v-tab href="#subject-tabs-2">Versions</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tabs">
                    <v-tab-item key="1" value="subject-tabs-1">
                        <Schema :id="latestSchema.id"
                                :subject="latestSchema.subject"
                                :schema="JSON.parse(latestSchema.schema)"
                                :version="latestSchema.version"
                        />
                    </v-tab-item>
                    <v-tab-item key="2" value="subject-tabs-2">
                        Previous Versions
                    </v-tab-item>
                </v-tabs-items>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {SchemaDetail} from '@/store/subjects/types';
import Schema from "@/components/subjects/Schema.vue";


@Component({
    components: {Schema}
})
export default class Subject extends Vue {

    public tabs: string = "subject-tabs-1";

    public mounted(): void {
        this.$store.dispatch('subjectSchemaLatest', this.$route.params.name);
        // this.$store.dispatch('subjectSchemaVersions', this.$route.params.name);
    }

    public get latestSchema(): SchemaDetail | null {
        if (this.$store.state.subjects.latestSchema) {
            return this.$store.state.subjects.latestSchema.attributes;
        } else {
            return null;
        }
    }
}
</script>