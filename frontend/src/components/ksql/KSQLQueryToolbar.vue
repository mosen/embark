<template>
    <v-toolbar flat dense>
        <v-btn @click="execute">
            <v-icon v-if="loading">mdi-pause</v-icon>
            <v-icon v-else>mdi-play</v-icon>
        </v-btn>
        <v-btn>
            <v-icon>mdi-undo</v-icon>
        </v-btn>
        <v-btn>
            <v-icon>mdi-redo</v-icon>
        </v-btn>
        <v-btn @click="check">
            <v-icon>mdi-check</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Emit} from "vue-property-decorator";

    @Component({})
    export default class KSQLQueryToolbar extends Vue {
        @Prop({ default: false })
        private readonly loading!: boolean;

        @Emit()
        public execute() {

        }

        @Emit()
        public check() {

        }
    }
</script>

<style scoped>

</style>