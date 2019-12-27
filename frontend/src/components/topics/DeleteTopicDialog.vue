<template>
    <v-layout>
        <v-dialog
            v-model="visible"
            max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">Delete Topic</span>
                </v-card-title>
                <v-card-text>
                    <p>Really delete the topic <em>{{ name }}</em>?</p>
                    <p>This action is irreversible</p>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dismiss">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="confirmDelete">Confirm Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class DeleteTopicDialog extends Vue {

    @Prop({ default: false, type: Boolean })
    public visible!: boolean;

    @Prop(String)
    private name!: string;

    public dismiss() {
        this.$store.commit('dismissDeleteTopic');
    }

    public confirmDelete() {
        console.log("Delete topic");

        this.$store.dispatch('deleteTopic', this.name).then(() => {
            this.$store.dispatch('confirmedDelete', this.name);
        });
    }
}
</script>

<style scoped>

</style>