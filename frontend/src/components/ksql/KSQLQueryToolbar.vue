<template>
    <div class="pb-1">
        <v-btn :loading="loading" depressed @click="execute" class="mr-1">
            <v-icon v-if="loading">mdi-pause</v-icon>
            <v-icon v-else>mdi-play</v-icon>
        </v-btn>
        <v-btn depressed class="mr-1">
            <v-icon>mdi-undo</v-icon>
        </v-btn>
        <v-btn depressed class="mr-1">
            <v-icon>mdi-redo</v-icon>
        </v-btn>
        <v-btn @click="check" depressed class="mr-1">
            <v-icon>mdi-check</v-icon>
        </v-btn>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Emit} from "vue-property-decorator";

    @Component({})
    export default class KSQLQueryToolbar extends Vue {

        @Prop({ default: false })
        private readonly loading!: boolean;

        @Emit()
        public execute(e: MouseEvent) {
            return e;
        }

        @Emit()
        public check(e: MouseEvent) {
            return e;
        }
    }
</script>

<style scoped>

</style>