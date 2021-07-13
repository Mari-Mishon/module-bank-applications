<template>
  <div class="app">
    <h1>Заявки</h1>
    <application-form @create = "createApplication" />

    <button @click="removeClients">Получить зявки</button>
    <application-list :applications="applications" /> 
  </div>
</template>

<script>
import ApplicationList from "@/components/ApplicationList";
import ApplicationForm from "@/components/ApplicationForm";

import axios from "axios";

export default {
  components: { ApplicationList, ApplicationForm },
  data() {
    return {
      applications: [],
    };
  },

  methods: {
    createApplication(application){
        this.applications.push(application)
    },

    async removeClients() {
      try {
        const responce = await axios.get(
          "https://my-json-server.typicode.com/plushevy/demo/list"
        );
        this.applications = responce.data;
      } catch (e) {
        alert("Error");
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>