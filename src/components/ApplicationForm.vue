<template>
  <form @submit.prevent>
    <h4>Создание заявки</h4>
    <input v-model="application.client_name" type="text" placeholder="ФИО" />
    <input
     v-model="application.person_phone"
      type="number"
      placeholder="Номер телефона"
    />
    <button @click="createApplication" class="btn">Отправить новую заявку</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      application: {
        client_name: "",
        person_phone: "",
      },
    };
  },
  methods: {
    createApplication() {
    this.$emit('create', this.application)
    this.application = {
        client_name: "",
        person_phone: "",
    }
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

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: gray;
  border: 1px solid gray;
}
</style>