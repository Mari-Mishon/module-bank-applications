<template>
  <div>
    <h3>Список клиентов</h3>
    <application
      v-for="application in applications"
      :key="application.id"
      :application="application"
    />
  </div>
</template>

<script>
import Application from './Application.vue';
export default {
  components: { Application },
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