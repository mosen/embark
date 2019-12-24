<template>
    <v-sheet class="ksql-results">
        {{ results }}
    </v-sheet>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import {KSQLStatementResult} from "@/store/ksql/types";

    @Component({})
    export default class KSQLResultsPane extends Vue {

        @Prop()
        private readonly results!: KSQLStatementResult[] | null;

    }
</script>

<style scoped>
    .ksql-results {
        min-height: 20rem;
    }
</style>