<template>
    <v-row>
        <v-col>
            <v-text-field
                    v-if="type === 'CLASS'"
                    :v-model="model"
                    :name="name"
                    :label="display_name"
                    :hint="documentation"
                    :required="required"
            />
            <v-text-field
                    v-if="type === 'STRING'"
                    :v-model="model"
                    :name="name"
                    :label="display_name"
                    :hint="documentation"
                    :required="required"
            />
            <v-text-field
                    v-if="type === 'LONG' || type === 'INT'"
                    :v-model="model"
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
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {
        ConfigFieldType,
        ConfigFieldWidth,
    } from "@/store/connector_plugins/types";

    @Component({})
    export default class ConfigField extends Vue {

        private _model: any = null;

        public get model(): any {
            if (this._model === null) {
                return this.default_value;
            } else {
                return this._model;
            }
        }

        public set model(value: any) {
            this._model = value;
        }

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

        @Prop({ default: 0 })
        private readonly order!: number;

        @Prop()
        private readonly dependents!: string[];

    }
</script>

<style scoped>

</style>