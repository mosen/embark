<template>
    <v-list>
        <v-list-group
                v-for="(permissions, principal) in principals"
                :key="principal"
                no-action
        >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="principal"></v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item v-for="permission in permissions">
                <v-list-item-content>
                    <span v-if="permission.permissionType == 'ALLOW'">
                        <v-icon>mdi-check</v-icon>
                        Allow
                    </span>

                    <span>
                        <em>{{ permission.operation }}</em>
                    </span>

                    <span>
                        From host
                        <em>{{ permission.host }}</em>
                    </span>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>
        <!--        <v-flex v-for="partition in partitions" v-bind:key="partition.id" xs8 md3>-->
        <!--            <Partition-->
        <!--                v-bind:id="partition.id"-->
        <!--                v-bind:inSyncReplicas="partition.inSyncReplicas"-->
        <!--                v-bind:leader="partition.leader"-->
        <!--                v-bind:replicas="partition.replicas"-->
        <!--            >-->
        <!--            </Partition>-->
        <!--        </v-flex>-->
    </v-list>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import AclBinding = Kafka.AclBinding;
    import {Resource} from "@/jsonapi";

    interface PrincipalPermissionEntry {
        permissionType: string;
        operation: string;
        host: string;
    }

    interface PrincipalPermissionsModel {
        [principal: string]: PrincipalPermissionEntry[];
    }

    @Component({
        components: {},
    })
    export default class Permissions extends Vue {

        @Prop()
        private bindings!: Resource<AclBinding>[];

        public get principals() {
            if (!this.bindings) { return {}; }
            return this.bindings.reduce((memo: PrincipalPermissionsModel, binding: Resource<AclBinding>): PrincipalPermissionsModel => {
                if (!memo.hasOwnProperty(binding.attributes.entry.principal)) { memo[binding.attributes.entry.principal] = []; }
                let perm = {
                  permissionType: binding.attributes.entry.permissionType,
                  operation: binding.attributes.entry.operation,
                  host: binding.attributes.entry.host,
                };

                memo[binding.attributes.entry.principal].unshift(perm);
                return memo;
            }, {})
        }
    }
</script>

<style scoped>

</style>