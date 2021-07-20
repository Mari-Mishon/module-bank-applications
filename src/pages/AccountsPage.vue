<template>
  <v-app>
    <accounts-list />
  </v-app>
</template>

<script>
import AccountsList from "@/components/AccountsList";
export default {
  components: { AccountsList },

  mounted() {
    this.$store.dispatch("fetchAccounts");
  },
};
</script>