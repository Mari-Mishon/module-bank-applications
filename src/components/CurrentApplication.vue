<template>
  <v-app>
    <v-card class="ma-10">
      <v-card-title
        class="headline font-weight-bold"
        v-text="`Заявка № ` + application.id"
      ></v-card-title>
      <v-divider></v-divider>

      <v-card-text class="subheading text--primary">
        <div><strong>id: </strong> {{ application.id }}</div>
        <div><strong>Номер: </strong> {{ application.num }}</div>
        <div>
          <strong>Дата: </strong>
          {{ formatDatetime(application.dadd) }}
        </div>
        <div><strong>Номер профиля: </strong> {{ application.profile_id }}</div>
        <div>
          <strong>Статус: </strong> <span :class="getStatusClass">{{ application.state }} </span>
        </div>
        <div>
          <strong>Последние изменения: </strong>
          {{ formatDatetime(application.lastUpd) }}
        </div>
        <div><strong>Продукт: </strong> {{ application.stg.join(", ") }}</div>
        <div><strong>ИНН: </strong> {{ application.inn }}</div>
        <div><strong>Имя компании: </strong> {{ application.company_name }}</div>
        <div>
          <strong>Телефон: </strong>{{ application.person_phone }}
        </div>
        <div>
          <strong>Форма собственности: </strong> {{ application.company_type }}
        </div>
        <div><strong>Клиент: </strong> {{ application.person_fullname }}</div>
        <div>
          <strong>Электронная почта: </strong> {{ application.person_email }}
        </div>
        <div v-if="application.extra">
          <strong>Дополнительные контакты: </strong>

          <ul>
            <li>
              <strong>Тип: </strong>

              {{ application.extra.partner.type }}
            </li>
            <li>
              <strong>ID пользователя: </strong>

              {{ application.extra.partner.user_id }}
            </li>
            <li>
              <strong>Имя клиента: </strong>

              {{ application.extra.partner.client_name }}
            </li>
            <li>
              <strong>ИНН: </strong>

              {{ application.extra.partner.inn }}
            </li>
            <li>
              <strong>ОГРН: </strong>

              {{ application.extra.partner.ogrn }}
            </li>
            <li>
              <strong>Название CRM: </strong>

              {{ application.extra.crm_source_type }}
            </li>

          </ul>
        </div>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import datetime from "@/mixins/datetime";

export default {

  props: {
    application: Object,
    required: true,
  },
  data() {
    return{
      colors: {
        init: "init-status",
      },
    };
  },
  computed: {
      getStatusClass() {
      return this.colors[this.application.state];
    },
  },

  mixins: [datetime],

};
</script>

<style scoped>
.init-status {
  color: orange;
  font-weight: 600;
}
</style>