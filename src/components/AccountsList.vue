<template>
  <div>
    <account
      v-for="account in $store.getters.getAllAccounts"
      :key="account.id"
      :account="account"
    />
  </div>
</template>

<script>
import Account from '@/components/Account.vue';

export default {
  components: { Account},
  props: {
    accounts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>