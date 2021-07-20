<template>
  <v-app>
    <div v-if="application">
      <application-edit-form :application="application" />
    </div>
  </v-app>
</template>

<script>
import ApplicationEditForm from "@/components/ApplicationEditForm";
export default {
  components: { ApplicationEditForm },
  data() {
    return {
      application: null,
    };
  },
  mounted() {
    if (this.$store.getters.getAllApplications.length === 0) {
      this.$router.push("/");
    } else {
      this.application = this.$store.getters.getApplicationById(
        this.$route.params.id
      );
    }
  },
};
</script>