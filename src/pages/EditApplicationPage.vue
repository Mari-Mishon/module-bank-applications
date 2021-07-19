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
    this.application = this.$store.getters.getApplicationById(
      this.$route.params.id
    );
  },
};
</script>