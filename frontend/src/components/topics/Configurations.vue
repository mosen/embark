<template>
    <v-list>
        <v-list-item
            v-for="item in configurations"
            :key="item.name"
        >
            <v-list-item-content>
                <v-list-item-title>{{ item.value }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {ConfigEntry} from "@/store/types";

@Component({
    components: {},
})
export default class Configurations extends Vue {
    @Prop()
    private configurations!: ConfigEntry[];
}
</script>

<style scoped>

</style>