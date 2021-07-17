<template>
  <div class="account">
    <div>
      <div><strong>Город:</strong> {{ account.client_city }}</div>
      <div><strong>ФИО клиента:</strong> {{ account.client_name }}</div>
      <!-- <div>
        <strong>Дата:</strong>
        {{
          application.dadd.split("T")[0].split("-").reverse().join(".") +
          " в " +
          application.dadd.split("T")[1].split(".")[0]
        }}
      </div> -->
      <div>
        <strong>Статус:</strong> <mark>{{ account.meeting_state }} </mark>
      </div>
      <!-- <div><strong>Продукт:</strong> {{ application.stg.join(", npm") }}</div> -->
      <div><strong>Банк:</strong> {{ account.bank_name }}</div>
      <div><strong>Место встречи:</strong> {{ account.meeting_place }}</div>
      <div><strong>Номер телефона:</strong>{{ account.person_phone }}</div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    account: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.account {
  padding: 10px;
  border: 2px solid gray;
  margin-top: 20px;
}
</style>