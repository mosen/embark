<template>
    <v-row>
        <v-col>
            <v-text-field
                    v-if="type === 'CLASS'"
                    :name="name"
                    :label="display_name"
                    :hint="documentation"
                    :required="required"
            />
            <v-text-field
                    v-if="type === 'STRING'"
                    :name="name"
                    :label="display_name"
                    :hint="documentation"
                    :required="required"
            />
            <v-text-field
                    v-if="type === 'LONG' || type === 'INT'"
                    :name="name"
                    :label="display_name"
                    type="number"
                    :required="required"
            />
            <v-switch
                    v-if="type === 'BOOLEAN'"
                    :name="name"
                    :label="display_name"
                    :hint="documentation"
            />
            <v-combobox
                    v-if="type === 'LIST'"
                    :name="name"
                    :label="display_name"
                    :hint="documentation"
                    chips deletable-chips
                    multiple
                    />
        </v-col>
    </v-row>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";
    import {
        ConfigFieldType,
        ConfigFieldWidth,
    } from "@/store/connector_plugins/types";

    @Component({})
    export default class ConfigField extends Vue {

        @Prop()
        private readonly name!: string;

        @Prop()
        private readonly type!: ConfigFieldType;

        @Prop()
        private readonly display_name!: string;

        @Prop()
        private readonly documentation!: string;

        @Prop({ default: false })
        private readonly required!: boolean;

        @Prop({ default: null })
        private readonly default_value!: string | number | null;

        @Prop()
        private readonly width!: ConfigFieldWidth;

        @Prop()
        private readonly importance!: string;

        @Prop()
        private readonly group!: string;

        @Prop()
        private readonly order!: number;

        @Prop()
        private readonly dependents!: string[];

    }
</script>

<style scoped>

</style>