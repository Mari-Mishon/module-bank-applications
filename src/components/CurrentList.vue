<template>
  <div>
    <h3>Текущая Заявка</h3>
    <current-application
      v-for="application in $store.getters.getAllApplications"
      :key="application.id"
      :application="application"
    />
  </div>
</template>

<script>
import CurrentApplication from './CurrentApplication.vue';

export default {
  components: {CurrentApplication },
  props: {
    applications: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>