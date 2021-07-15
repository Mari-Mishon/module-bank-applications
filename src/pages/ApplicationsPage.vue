<template>
  <div>
    <h1>Заявки</h1>
    <application-form @create = "createApplication" />
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

    async addClients() {
      try {
        const responce = await axios.get("/list");
        this.applications = responce.data;
      } catch (e) {
        alert("Error");
      }
    },
  },

  mounted(){
    this.addClients();
  }
};
</script>

