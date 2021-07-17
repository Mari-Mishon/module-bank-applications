<template>
  <div>
    <h1>Cчета</h1>
    <accounts-list :accounts="accounts" />
  </div>
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

<style scoped>
</style>