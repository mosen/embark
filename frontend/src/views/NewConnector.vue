<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>New Connector</h1>
            </v-col>
        </v-row>
        <ConnectorPluginDynamicForm :connector-class="this.$route.params.classname"/>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ConnectorPluginDynamicForm from "@/components/connector-plugins/ConnectorPluginDynamicForm.vue";

@Component({
    components: {ConnectorPluginDynamicForm}
})
export default class NewConnector extends Vue {

    public created() {
        // Blank POST to get all possible configuration vars
        this.$store.dispatch('validateConnectorPlugin', {
            classname: this.$route.params.classname,
            config: {
                "connector.class": this.$route.params.classname,
            },
        });
    }
}
</script>

<style scoped>

</style>