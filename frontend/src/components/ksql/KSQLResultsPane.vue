<template>
    <v-sheet class="ksql-results">
        <div class="text-lg-center pa-5">
            <span v-if="!results || results.length === 0" class="headline">No results</span>
            <KSQLResultPolyTable v-else :results="results" />
        </div>
    </v-sheet>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import {KSQLStatementResult} from "@/store/ksql/types";
import KSQLResultPolyTable from "@/components/ksql/KSQLResultPolyTable.vue";

@Component({
    components: {KSQLResultPolyTable},
})
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