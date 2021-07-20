<template>
  <v-app>
    <application-list />
  </v-app>
</template>

<script>
import ApplicationList from "@/components/ApplicationList";
import { mapGetters } from 'vuex';

export default {
  components: { ApplicationList },

  mounted() {
    if (this.getAllApplications.length === 0) {
      this.$store.dispatch("fetchApplications")
    };
  },
  computed: {
    ...mapGetters([
      'getAllApplications'
    ])
  },
};
</script>

