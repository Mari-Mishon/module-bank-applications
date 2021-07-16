<template>
  <div>
    <h1>Заявки</h1>
    <application-list :applications="applications" />
    <div @create="createApplication"></div>
  </div>
</template>

<script>
import ApplicationList from "@/components/ApplicationList";
import { mapGetters } from 'vuex';

export default {
  components: { ApplicationList },
  data() {
    return {
      applications: [],
    };
  },

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

  methods: {
    createApplication(application) {
      this.applications.push(application);
    },
  },
};
</script>

