<template>
    <v-data-table
        :headers="headers"
        :items="items"
    ></v-data-table>
</template>

<script lang="ts">
    import {Vue, Component, Emit, Watch, Prop} from 'vue-property-decorator';
    import {KSQLStatementResult} from "@/store/ksql/types";
    import {TableHeader} from "vuetify/src/components/VDataTable/mixins/header";
    import {polyHeaders} from "@/components/ksql/headers";

    const resultKeys: { [ksqlMetaType: string]: string } = {
        "kafka_topics": "topics",
        "streams": "streams",
    };

    @Component({
        components: {},
    })
    export default class KSQLResultPolyTable extends Vue {

        @Prop({ default: [] })
        private readonly results!: KSQLStatementResult[];

        private get headers(): TableHeader[] {
            return polyHeaders(this.results[0]["@type"]);
        }

        private get items(): any {
            if (resultKeys.hasOwnProperty(this.results[0]["@type"])) {
                const resultKey = resultKeys[this.results[0]["@type"]];
                return this.results[0][resultKey];
            }
        }
    }
</script>

<style scoped>

</style>