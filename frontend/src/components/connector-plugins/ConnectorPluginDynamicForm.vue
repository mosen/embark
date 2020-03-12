<template>
    <v-form>
        <v-container>
            <!-- static section which is common across all connectors -->
            <v-row>
                <v-col cols="12">
                    <v-text-field flat name="connector.class" label="Connector Class" :value="connectorClass" readonly />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="8">
                    <v-text-field flat name="name" label="Connector Name" hint="Globally Unique Connector Name" />
                </v-col>
                <v-col cols="4">
                    <v-text-field flat name="tasks.max" label="Tasks Maximum" type="number" />
                </v-col>
            </v-row>
            <v-row>
                <v-subheader>Connector Configuration</v-subheader>
            <v-expansion-panels>
                <v-expansion-panel v-for="(validationItems, group) in definitionsByGroup" :key="group">
                    <v-expansion-panel-header>{{ group }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <ConfigField v-bind="vi.definition" v-for="vi in validationItems" :key="vi.definition.name">
                        </ConfigField>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-row>
        </v-container>
    </v-form>
</template>


<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {ConnectorPluginValidationItem} from "@/store/connector_plugins/types";
import ConfigField from "@/components/connector-plugins/ConfigField.vue";

@Component({
    components: {ConfigField}
})
export default class ConnectorPluginDynamicForm extends Vue {

    @Prop({})
    private readonly connectorClass!: string;

    @Prop({ default: ["connector.class", "name", "tasks.max"] })
    private readonly omitProps!: string[];

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
            return this.$store.state.connectorPlugins.validation.configs.reduce((memo: { [groupName: string]: ConnectorPluginValidationItem[] }, item: ConnectorPluginValidationItem) => {
                if (this.omitProps.indexOf(item.definition.name) !== -1) { return memo; }

                const groupName = item.definition.group != 'null' ? item.definition.group : 'Other';

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