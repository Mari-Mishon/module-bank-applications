<template>
  <v-app>
    <v-card-title
      class="headline font-weight-bold justify-center"
      v-text="`Создание заявки`"
    ></v-card-title>
    <v-divider></v-divider>

    <form class="ma-10" @submit.prevent>
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
        v-model="application.inn"
        placeholder="ИНН"
      ></v-text-field>

      <v-text-field
        solo
        clearable
        v-model="application.client_name"
        type="text"
        placeholder="ФИО"
      />
      <v-text-field
        solo
        clearable
        v-model="application.person_phone"
        type="number"
        placeholder="Номер телефона"
      />

      <input
        v-model="application.dadd"
        type="datetime-local"
        placeholder="Дата"
      />

      <v-card-actions class="card-actions">
        <v-btn color="orange" text @click="createApplication">
          Отправить новую заявку
        </v-btn>
      </v-card-actions>
    </form>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      stgs: ["ACCOPEN", "FNS.REG"],

      application: {
        id: "",
        num: "",
        dadd: "",
        state: "init",
        stg: "",
        inn: "",
        client_name: "",
        person_phone: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getLastId", "getLastNum"]),
  },
  methods: {
    createApplication() {
      this.application.id = this.getLastId + 1;
      this.application.num = this.getLastNum + 1;

      this.$store.dispatch("addNewApplication", {
        application: this.application,
      });
      this.application = {};
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

input {
  width: 100%;
  padding: 10px 15px;
  margin-top: 15px;
  border: 1px solid gray;
}
</style>