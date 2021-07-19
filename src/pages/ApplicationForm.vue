<template>
<!-- FIX: Add validation  -->
<!-- FIX: Move to component -->

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
          placeholder="Телефон"
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
          placeholder="ИНН партнера"
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

        <v-card-actions class="mt-10">
          <v-btn color="indigo accent-1" @click="createApplication">
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
import { STGS, COMPANY_TYPES } from "@/constants.js";
import dayjs from "dayjs";

export default {

  data() {
    return {
      stgs: STGS,
      types: COMPANY_TYPES,
      application: {
        id: this.$store.getters["getLastId"] + 1,
        num: this.$store.getters["getLastNum"] + 1,
        dadd: null,
        profile_id: uuid.v4().toUpperCase(),
        lastUpd: dayjs().toISOString(),
        stg: [],
        state: "init",
        inn: null,
        company_name: null,
        person_phone: "",
        company_type: "",
        client_name: "",
        person_email: null,
        extra: {
          partner: {
            type: "partner",
            user_id: uuid.v4().toUpperCase(),
            client_name: "",
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
      this.application.id = this.getLastId  + 1;
      this.application.num = this.getLastNum + 1;

      this.$store.dispatch("addNewApplication", {
        application: this.application,
      });
      this.application = {
        dadd: null,
        stg: [],
        inn: null,
        company_name: null,
        person_phone: "",
        company_type: "",
        client_name: "",
        person_email: null,
        extra: {
          partner: {
            client_name: "",
            inn: null,
            ogrn: null,
          },
          crm_source_type: "",
        },
      };
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
  border-radius: 5px;
  box-shadow: 0.5px 1px 3px gray;
}
</style>