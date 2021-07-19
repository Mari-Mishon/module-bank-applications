<template>
<!-- Fix: add validation -->
  <v-card class="ma-10">
    <v-card-title
      class="headline font-weight-bold justify-center"
      v-text="`Изменение заявки №` + application.id "
    ></v-card-title>
    <v-divider></v-divider>

    <form class="ma-10" @submit.prevent>
      <v-text-field
        solo
        clearable
        v-model="application.num"
        placeholder="Номер заявки"
      ></v-text-field>

      <v-select
        multiple
        solo
        :items="stgs"
        v-model="application.stg"
        type="text"
        placeholder="Продукт"
      />

      <v-text-field
        solo
        clearable
        v-model="application.client_name"
        placeholder="Клиент"
      ></v-text-field>

      <v-text-field
        solo
        clearable
        v-model="application.person_phone"
        type="number"
        placeholder="Телефон"
      ></v-text-field>

      <input
        v-model="application.dadd"
        type="datetime-local"
        placeholder="Дата"
      />

      <v-card-actions class="mt-10">
        <v-btn color="indigo accent-1" text @click="updateApplication">
          Изменить заявку
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import { STGS } from "@/constants.js";

export default {
  props: {
    application: {
      type: Object,
      required: true,
    },
  },
  data() {
    console.log(this.application.dadd)
    return {
      stgs: STGS,
      applicationForm: this.application,
    };
  },
  methods: {
    updateApplication() {
      // Fix: Redirect to applications after submit
      this.$store.dispatch("updateApplication", {
        application: this.applicationForm,
      });
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0.5px 1px 3px gray;
}
</style>