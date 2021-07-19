<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="account in $store.getters.getAllAccounts"
          :key="account.id"
          :account="account"
          cols="12"
          sm="3"
        >
          <v-card class="ma-3 pa-3" height="100%">
            <v-card-title v-text="`Счет № ` + account.num"></v-card-title>
            <v-card-text class="text--primary">
              <account :account="account" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Account from "@/components/Account.vue";

export default {
  components: { Account },
  props: {
    accounts: {
      type: Array,
      required: true,
    },
  },
};
</script>
