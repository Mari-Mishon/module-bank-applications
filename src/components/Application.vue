<template>
  <div class="application">
    <div>
      <!-- <div><strong>Номер заявки:</strong> {{ application.num }}</div>
      <div><strong>Продукт:</strong> {{ application.stg.join(", npm") }}</div>
      <div>
        <strong>Дата:</strong>
        {{
          application.dadd.split("T")[0].split("-").reverse().join(".") +
          " в " +
          application.dadd.split("T")[1].split(".")[0]
        }}
      </div> -->
      <div><strong>Клиент:</strong> {{ application.client_name }}</div>
      <!-- <div>
        <strong>Статус:</strong> <mark>{{ application.state }} </mark>
      </div> -->
      <div><strong>Номер телефона:</strong>{{ application.person_phone }}</div>
    </div>

  <div>
      <button>Удалить</button>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    application: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.application {
  padding: 10px;
  border: 2px solid gray;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>