<template>
  <div class="application">
    <div>
      <div><strong>id:</strong> {{ application.id }}</div>
      <div><strong>Номер заявки:</strong> {{ application.num }}</div>
      <div>
        <strong>Дата:</strong>
        {{ formatDatetime(application.dadd) }}
      </div>
      <div>
        <strong>Статус:</strong> <mark>{{ application.state }} </mark>
      </div>
      <!-- <div><strong>Продукт:</strong> {{ application.stg.join(", npm") }}</div> -->
      <div><strong>ФИО клиента:</strong> {{ application.client_name }}</div>
      <div><strong>Номер телефона:</strong>{{ application.person_phone }}</div>
    </div>

    <button @click="openApplication">Открыть</button>
  </div>
</template>

<script>
import datetime from "../mixins/datetime";

export default {
  props: {
    application: {
      type: Object,
      required: true,
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
  },
};
</script>

<style scoped>
.application {
  padding: 10px;
  border: 2px solid gray;
  margin-top: 20px;
}
</style>