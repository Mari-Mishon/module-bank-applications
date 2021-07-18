<template>
<v-app>
  <div>
    <div v-if="application">
      <current-application :application="application" />
    </div>
    <div v-else-if="!application">
      <h4 style="margin-top: 10px">Идет загрузка...</h4>
    </div>
  </div>
</v-app>
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
    this.getApplication(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.getApplication(to.params.id);
    next();
  },
  methods: {
    async getApplication(applicationId) {
      await axios
        .get(`/orders/${applicationId}`)
        .then(
          (response) => (this.application = response.data),
          () => {
            let application =
              this.$store.getters.getApplicationById(applicationId);
            if (application === undefined) {
              throw "Not found";
            } else {
              this.application = application;
            }
          }
        )
        .catch((e) => alert(e));
    },
  },
};
</script>

<style scoped>
</style>