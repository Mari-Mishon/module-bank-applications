<template>
  <form @submit.prevent>
    <h4 class="header">Создание заявки</h4>
    <!-- <input v-model="application.dadd" type="text" placeholder="Дата" /> -->
    <input v-model="application.state" type="text" placeholder="Статус" />

    <!-- <input v-model="application.stg" type="text" placeholder="Продукт" /> -->
    <input v-model="application.inn" type="text" placeholder="ИНН" />

    <input v-model="application.client_name" type="text" placeholder="ФИО" />
    <input
      v-model="application.person_phone"
      type="number"
      placeholder="Номер телефона"
    />

    <button @click="createApplication" class="btn">
      Отправить новую заявку
    </button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      application: {
        id: "",
        num: "",
        // dadd:"",
        state: "",
        // stg:"",
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
      this.application = {
        id: "",
        num: "",
        // dadd:"",
        state: "",
        // stg:"",
        inn: "",
        client_name: "",
        person_phone: "",
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
  border: 1px solid gray;
}

.header {
  margin-top: 20px;
}
</style>