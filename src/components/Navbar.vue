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
.navbar {
  height: 50px;
  background-color: rgb(248, 248, 140);
  box-shadow: 2px 2px 4px black;
  display: flex;
  align-items: center;
  padding: 0px 15px;
}

.navbar_btns {
  margin-left: auto;
}

button {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: gray;
  border: 1px solid gray;
}
</style>