<template>
  <v-app>
    <v-card class="ma-10">
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
        v-model="application.company_name"
        placeholder="Название компании"
      ></v-text-field>

      <v-select
        :items="types"
        solo
        clearable
        v-model="application.company_type"
        placeholder="Тип компании"
      ></v-select>

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

      <v-text-field
        solo
        clearable
        v-model="application.person_email"
        type="email"
        placeholder="Электронная почта"
      />

      <v-text-field
        solo
        clearable
        v-model="application.extra.partner.client_name"
        type="text"
        placeholder="ФИО партнера"
      />

      <v-text-field
        solo
        clearable
        v-model="application.extra.partner.inn"
        type="text"
        placeholder="ИНН"
      />

      <v-text-field
        solo
        clearable
        v-model="application.extra.partner.ogrn"
        type="text"
        placeholder="ОГРН"
      />

      <v-text-field
        solo
        clearable
        v-model="application.extra.crm_source_type"
        type="text"
        placeholder="Тип CRM"
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
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { uuid } from "vue-uuid";

export default {
  data() {
    return {
      stgs: ["ACCOPEN", "FNS.REG"],
      types: ["IP", "UL"],
      application: {
        id: this.$store.getters['getLastId']+1,
        num: this.$store.getters['getLastNum']+1,
        dadd: "",
        profile_id: uuid.v4().toUpperCase(),
        lastUpd: new Date().toISOString(),
        stg: [],
        state: "init",
        inn: null,
        company_name: null,
        person_phone: "",
        company_type: "",
        client_name:"",
        person_email: null,
        extra: {
          partner: {
            type: "partner",
            user_id: uuid.v4().toUpperCase(),
            client_name:"",
            inn: null,
            ogrn: null,
          },
          crm_source_type: "",
        },
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