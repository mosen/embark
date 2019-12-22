<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="8">
                    <v-text-field flat label="Connector Name" hint="Globally Unique Connector Name" />
                </v-col>
                <v-col cols="4">
                    <v-text-field flat label="Tasks Maximum" type="number" />
                </v-col>
            </v-row>
            <v-row>
                <v-subheader>Connector Configuration</v-subheader>
            <v-expansion-panels>
                <v-expansion-panel v-for="(validationItems, group) in definitionsByGroup">
                    <v-expansion-panel-header>{{ group }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ConfigField v-bind="vi.definition" v-for="vi in validationItems">
                        </ConfigField>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-row>
        </v-container>
    </v-form>
</template>


<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {ConfigDefinition, ConnectorPluginValidationItem} from "@/store/connector_plugins/types";
import ConfigField from "@/components/connector-plugins/ConfigField.vue";

@Component({
    components: {ConfigField}
})
export default class ConnectorPluginDynamicForm extends Vue {

    public get groups(): string[] {
        if (this.$store.state.connectorPlugins.validation === null) {
            return [];
        } else {
            return this.$store.state.connectorPlugins.validation.groups;
        }
    }

    public get definitionsByGroup(): { [group: string]: ConnectorPluginValidationItem[] } {
        if (this.$store.state.connectorPlugins.validation === null) {
            return {};
        } else {
            return this.$store.state.connectorPlugins.validation.configs.reduce((memo, item: ConnectorPluginValidationItem) => {
                let groupName = item.definition.group != 'null' ? item.definition.group : 'Other';

                if (!memo[groupName]) {
                    memo[groupName] = [];
                }

                memo[groupName].unshift(item);
                return memo;
            }, {});
        }
    }

}
</script>

<style scoped>

</style>