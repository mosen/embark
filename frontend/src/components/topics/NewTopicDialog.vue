<template>
    <v-layout>
        <v-dialog
                v-model="dialog"
                max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="accent" v-on="on">New
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">New Topic</span>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                            v-model="name"
                            autofocus
                            label="Name"
                            hint="Topic name (must be unique within the cluster)"
                            maxlength="249"
                            counter
                            :rules="[rules.required, rules.counter, rules.charset]"
                            required
                    ></v-text-field>

                    <v-text-field
                            v-model="partitions"
                            label="Partitions"
                            type="number"
                            hint="For best performance, must be a multiple of consumers"
                    ></v-text-field>

                    <v-text-field
                            v-model="replicas"
                            label="Replicas"
                            type="number"
                            :rules="[rules.maxBrokers]"
                    ></v-text-field>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dismiss">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {NewTopic} from "@/store/topics/types";
import {InputValidationRule, InputValidationRules} from "vuetify";

@Component({
    components: {},
})
export default class NewTopicDialog extends Vue {
    public dialog: boolean = false;

    private name: string = "";
    private replicas: number = 1;
    private partitions: number = 1;
    private rules: { [ruleName: string]: InputValidationRule } = {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 249 || 'Max 249 characters',
        charset: value => /[^a-zA-Z0-9._-]+/.test(value) && 'Must only contain alphanumeric characters, dot (.), underscore (_) or dash (-)',
        maxBrokers: value => (value <= 2) || 'Cannot specify more than the number of available broker(s): 2',
    };

    public dismiss() {
        this.dialog = false;
    }

    public save() {
        const req: NewTopic = {
            name: this.name,
            numPartitions: this.partitions,
            replicationFactor: this.replicas,
        };

        try {
            const result = this.$store.dispatch('createTopic', req);
            this.dismiss();
        } catch (e) {

        }
    }
}
</script>

<style scoped>

</style>