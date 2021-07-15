<template>
  <div>
    <h1>Заявка № {{ $route.params.id }}</h1>
    <div v-if="application">
      <current-application :application="application" />
    </div>
  </div>
</template>

<script>
import CurrentApplication from "@/components/CurrentApplication";
import axios from "axios";

export default {
  components: { CurrentApplication },

  data() {
    return {
      application: null,
    };
  },
  methods: {
    async getApplication() {
      try {
        const responce = await axios.get(`/orders/${this.$route.params.id}`);
        this.application = responce.data;
      } catch (e) {
        alert("Error");
      }
    },
  },

  mounted() {
    this.getApplication();
  },
};
</script>

<style scoped>
</style>