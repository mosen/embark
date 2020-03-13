<template>
    <v-card>
        <v-card-text>
            <p class="title">Version {{ version }} Schema ID {{ id }}</p>

            <VueJsonPretty showLine :data="schema"></VueJsonPretty>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VueJsonPretty from 'vue-json-pretty';

@Component({
    components: {VueJsonPretty},
})
export default class Schema extends Vue {

    @Prop(Number)
    private readonly id?: number;

    @Prop(Object)
    private readonly schema!: Record<string, any>;

    @Prop(Number)
    private readonly version!: number;

    @Prop(String)
    private readonly subject?: string;

}
</script>

<style scoped>

</style>