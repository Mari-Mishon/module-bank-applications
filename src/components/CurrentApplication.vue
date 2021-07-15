<template>
  <div class="application">
    <div>
      <div><strong>id:</strong> {{ application.id }}</div>
      <div><strong>Номер:</strong> {{ application.num }}</div>
      <div>
        <strong>Дата:</strong>
        {{
          application.dadd.split("T")[0].split("-").reverse().join(".") +
          " в " +
          application.dadd.split("T")[1].split(".")[0]
        }}
      </div>
      <div><strong>Номер профиля:</strong> {{ application.profile_id }}</div>
      <div>
        <strong>Статус:</strong> <mark>{{ application.state }} </mark>
      </div>
      <div><strong>Последние изменения:</strong> {{ application.lastUpd }}</div>
      <div><strong>Продукт:</strong> {{ application.stg.join(", npm") }}</div>
      <div><strong>ИНН:</strong> {{ application.inn }}</div>
      <div><strong>Имя компании:</strong> {{ application.company_name }}</div>
      <div><strong>Номер телефона:</strong>{{ application.person_phone }}</div>
      <div>
        <strong>Форма собственности:</strong> {{ application.company_type }}
      </div>
      <div><strong>ФИО клиента:</strong> {{ application.client_name }}</div>
      <div>
        <strong>Электронная почта:</strong> {{ application.person_email }}
      </div>
      <!-- <div><strong>Дополнительные контакты:</strong> {{ application.extra }}</div> -->
      <div><strong>Название CRM:</strong> {{ application.extra.crm_source_type }}</div>
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
}
</style>