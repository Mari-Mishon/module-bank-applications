<template>
  <v-container fluid>
    <div><strong>Город:</strong> {{ account.client_city }}</div>
    <div><strong>ФИО клиента:</strong> {{ account.client_name }}</div>
    <div><strong>Банк:</strong> {{ account.bank_name }}</div>
    <div><strong>Продукт:</strong> {{ account.stg.join(", ") }}</div>
    <div>
      <strong>Статус: </strong>
      <span :class="getStatusClass">{{ account.meeting_state }} </span>
    </div>
    <div>
      <strong>Дата:</strong>
      {{ formatDatetime(account.dadd) }}
    </div>

    <div><strong>Место встречи:</strong> {{ account.meeting_place }}</div>
    <div><strong>Номер телефона: </strong>{{ account.person_phone }}</div>

  </v-container>
</template>

<script>
import datetime from "@/mixins/datetime";

export default {
  props: {
    account: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      colors: {
        error: "error-status",
        process: "process-status",
        upload_docs: "upload-status",
        reupload_fls: "reupload-status",
      },
    };
  },
  mixins: [datetime],

  computed: {
    getStatusClass() {
      return this.colors[this.account.meeting_state];
    },
  },
};
</script>

<style scoped>
.error-status {
  color: red;
  font-weight: 600;
}
.process-status {
  color: green;
  font-weight: 600;
}
.upload-status {
  color: blue;
  font-weight: 600;
}
.reupload-status {
  color: aqua;
  font-weight: 600;
}
</style>