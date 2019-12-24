<template>
    <v-container>
        <v-row>
            <v-col>
                <KSQLQueryEditor />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import KSQLQueryEditor from "@/components/ksql/KSQLQueryEditor.vue";

@Component({
    components: {KSQLQueryEditor}
})
export default class KSQL extends Vue {

}
</script>

<style scoped>

</style>