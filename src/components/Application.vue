<template>
  <v-container fluid>
    <div><strong>Номер заявки: </strong> {{ application.num }}</div>
    <div><strong>Продукт: </strong> {{ application.stg.join(", ") }}</div>

    <div>
      <strong>Дата: </strong>
      {{ formatDatetime(application.dadd) }}
    </div>
    <div><strong>Клиент: </strong> {{ application.client_name }}</div>
    <div>
      <strong>Статус: </strong>
      <span :class="getStatusClass">{{ states[application.state] }}</span>
    </div>
    <div><strong>Телефон: </strong>{{ application.person_phone }}</div>

    <v-card-actions class="card-actions">
      <v-btn
        color="indigo accent-2"
        text
        @click="openApplication"
        >Открыть</v-btn
      >
      <v-btn
        color="indigo accent-1
"
        text
        @click="editApplication"
        >Изменить</v-btn
      >
    </v-card-actions>
  </v-container>
</template>

<script>
import datetime from "../mixins/datetime";
import {STATES} from "@/constants";
export default {
  props: {
    application: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      colors: {
        init: "init-status",
      },
            states: STATES,

    };
  },
  computed: {
    getStatusClass() {
      return this.colors[this.application.state];
    },
  },
  mixins: [datetime],
  methods: {
    openApplication() {
      this.$store.dispatch("addOpenApplication", {
        applicationId: this.application.id,
      });

      this.$router.push(`/applications/${this.application.id}`);
    },

    editApplication() {
      this.$router.push(`/applications/edit/${this.application.id}`);
    },
  },
};
</script>

<style scoped>
.init-status {
  color: orange;
  font-weight: 600;
}
.card-actions {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>