<template>
  <div class="navbar">
    <div class="navbar_btns">
      <button
        v-for="openedApplication in getOpenedApplications"
        :key="openedApplication"
        @click="$router.push(`/applications/${openedApplication}`)"
      >
        Заявка № {{ openedApplication }}
      </button>

      <button @click="$router.push('/')" style="margin-left: 15px">
        Заявки
      </button>
      <button @click="$router.push('/accounts')" style="margin-left: 15px">
        Счета
      </button>
      <button
        @click="$router.push('/new_application')"
        style="margin-left: 15px"
      >
        Создать новую заявку
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getOpenedApplications"]),
  },
};
</script>

<style>


button {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
}
</style>