<template>
  <v-app>
    <v-card class="ma-10">
      <v-card-title
        class="headline font-weight-bold justify-center"
        v-text="`Создание заявки`"
      ></v-card-title>
      <v-divider></v-divider>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form class="ma-10" @submit.prevent>
          <validation-provider
            v-slot="{ errors }"
            name="select"
            rules="required"
          >
            <v-select
              label="Продукт*"
              multiple
              solo
              :error-messages="errors"
              :items="stgs"
              v-model="application.stg"
              required
          /></validation-provider>
          <validation-provider v-slot="{ errors }" name="ИНН" rules="numeric">
            <v-text-field
              label="ИНН"
              solo
              clearable
              :error-messages="errors"
              v-model="application.inn"
            ></v-text-field>
          </validation-provider>

          <v-text-field
            solo
            clearable
            v-model="application.company_name"
            label="Название компании"
          ></v-text-field>

          <v-select
            :items="types"
            solo
            clearable
            v-model="application.company_type"
            label="Тип компании"
          ></v-select>

          <v-text-field
            solo
            clearable
            v-model="application.client_name"
            type="text"
            label="ФИО"
          />
          <validation-provider
            v-slot="{ errors }"
            name="select"
            rules="required"
          >
            <v-text-field
              solo
              clearable
              :error-messages="errors"
              v-model="application.person_phone"
              type="number"
              label="Телефон*"
              required
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              solo
              clearable
              v-model="application.person_email"
              :error-messages="errors"
              required
              label="Электронная почта*"
          /></validation-provider>

          <v-text-field
            solo
            clearable
            v-model="application.extra.partner.client_name"
            type="text"
            label="ФИО партнера"
          />
          <validation-provider v-slot="{ errors }" name="ИНН" rules="numeric">
            <v-text-field
              solo
              clearable
              v-model="application.extra.partner.inn"
              :error-messages="errors"
              label="ИНН партнера"
            />
          </validation-provider>

          <v-text-field
            solo
            clearable
            v-model="application.extra.partner.ogrn"
            type="text"
            label="ОГРН"
          />

          <v-text-field
            solo
            clearable
            v-model="application.extra.crm_source_type"
            type="text"
            label="Тип CRM"
          />

          <validation-provider v-slot="{ errors }" name="Дата" rules="required">
            <div>
              <input
                v-model="application.dadd"
                required
                type="datetime-local"
                label="Дата*"
              />
              <span class="date_error">{{ errors[0] }}</span>
            </div>
          </validation-provider>

          <v-card-actions class="mt-10">
            <v-btn
              color="indigo accent-1"
              @click="createApplication"
              :disabled="invalid"
            >
              Отправить новую заявку
            </v-btn>
          </v-card-actions>
        </form>
      </validation-observer>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { uuid } from "vue-uuid";
import { STGS, COMPANY_TYPES } from "@/constants.js";
import dayjs from "dayjs";

import { required, email, numeric } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "Поле {_field_} не заполнено",
});
extend("email", {
  ...email,
  message: "Email введен некорректно",
});
extend("numeric", {
  ...numeric,
  message: "{_field_} содержит только цифры",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

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
      this.$refs.observer.validate();
      this.application.id = this.getLastId + 1;
      this.application.num = this.getLastNum + 1;

      this.$store.dispatch("addNewApplication", {
        application: this.application,
      });
      (this.application = {
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
      }),
        this.$refs.observer.reset();
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

.date_error {
  color: red;
  font-size: 9pt;
  opacity: 90%;
  margin-left: 10px;
}
</style>
