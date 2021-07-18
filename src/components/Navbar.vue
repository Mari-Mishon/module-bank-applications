<template v-slot:extension>
    <v-toolbar color="deep-purple accent-4" dark flat>
      <v-tabs fixed-tabs slider-color="white">
        <v-tab
          v-for="openedApplication in getOpenedApplications"
          :key="openedApplication"
          :to="`/applications/${openedApplication}`"
        >
          Заявка № {{ openedApplication }}
        </v-tab>

        <v-tab key="tab-1" to="/"> Заявки </v-tab>
        <v-tab key="tab-2" to="/accounts"> Счета </v-tab>
        <v-tab key="tab-3" to="/new_application"> Создать новую заявку </v-tab>
      </v-tabs>
    </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getOpenedApplications"]),
  },
};
</script>

<style>

</style>