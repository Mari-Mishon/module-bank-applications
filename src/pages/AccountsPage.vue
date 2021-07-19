<template>
  <v-app>
    <accounts-list :accounts="accounts" />
  </v-app>
</template>

<script>
import AccountsList from "@/components/AccountsList";
export default {
  components: { AccountsList },

  data() {
    return {
      accounts: [],
    };
  },

  mounted() {
    this.$store.dispatch("fetchAccounts");
  },
};
</script>