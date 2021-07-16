<template>
  <div>
    <h1>Заявка № {{ $route.params.id }}</h1>
    <div v-if="application">
      <current-application :application="application" />
    </div>
    <div v-else-if="!application">
     <h4 style="margin-top:10px">Идет загрузка...</h4>
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
  
  mounted() {
    this.getApplication();
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

};
</script>

<style scoped>
</style>