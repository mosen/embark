<template>
  <v-container>
    <h1 class="display-1 pt-2 pb-2">Services</h1>
    <v-row>
      <v-col>
        <BrokerStatus />
      </v-col>
      <v-col>
        <RegistryStatus />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ConnectStatus />
      </v-col>
      <v-col>
        <KSQLStatus />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ConnectStatus from '@/components/dashboard/ConnectStatus.vue';
import RegistryStatus from "@/components/dashboard/RegistryStatus.vue";
import BrokerStatus from "@/components/dashboard/BrokerStatus.vue";
import KSQLStatus from "@/components/dashboard/KSQLStatus.vue";

@Component({
    components: {
        BrokerStatus,
        ConnectStatus,
        RegistryStatus,
        KSQLStatus,
    },
})
export default class Home extends Vue {}
</script>
