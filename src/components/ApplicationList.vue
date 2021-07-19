<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          v-for="application in $store.getters.getAllApplications"
          :key="application.id"
          :application="application"
          cols="12"
          sm="3"
        >
          <v-card class="card-outter ma-2" height="100%">
            <v-card-text class="text--primary">
              <v-card-title
                v-text="`Заявка № ` + application.id"
              ></v-card-title>
              <application :application="application" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Application from "./Application.vue";

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
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
</style>