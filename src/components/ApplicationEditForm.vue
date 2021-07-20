<template>
  <v-card class="ma-10">
    <v-card-title
      class="headline font-weight-bold justify-center"
      v-text="`Изменение заявки №` + application.id"
    ></v-card-title>
    <v-divider></v-divider>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form class="ma-10" @submit.prevent>
        <validation-provider
          v-slot="{ errors }"
          name="Номер заявки"
          rules="required"
        >
          <v-text-field
            solo
            clearable
            :error-messages="errors"
            v-model="applicationForm.num"
            label="Номер заявки*"
            required
          ></v-text-field
        ></validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="Продукт"
          rules="required"
        >
          <v-select
            multiple
            solo
            :error-messages="errors"
            :items="stgs"
            v-model="applicationForm.stg"
            type="text"
            label="Продукт*"
            required
          />
        </validation-provider>

        <v-text-field
          solo
          clearable
          v-model="applicationForm.client_name"
          label="Клиент"
        ></v-text-field>

        <validation-provider
          v-slot="{ errors }"
          name="Телефон"
          rules="required"
        >
          <v-text-field
            solo
            clearable
            :error-messages="errors"
            v-model="applicationForm.person_phone"
            type="number"
            label="Телефон*"
            required
          />
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="Дата" rules="required">
          <div>
            <input
              v-model="applicationForm.dadd"
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
            text
            @click="updateApplication"
            :disabled="invalid"
          >
            Изменить заявку
          </v-btn>
        </v-card-actions>
      </form>
    </validation-observer>
  </v-card>
</template>

<script>
import { STGS } from "@/constants.js";
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

  props: {
    application: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      stgs: STGS,
      applicationForm: Object.assign({}, this.application),
    };
  },
  methods: {
    updateApplication() {
      this.$store.dispatch("updateApplication", {
        application: this.applicationForm,
      }),
      this.$refs.observer.reset();
      this.$router.push(`/`);
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