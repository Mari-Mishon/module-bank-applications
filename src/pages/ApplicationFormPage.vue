<template>
  <v-app>
    <application-form/>
  </v-app>
</template>

<script>
import ApplicationForm from "@/components/ApplicationForm";


export default {
  components: { ApplicationForm },

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
  border-radius: 5px;
  box-shadow: 0.5px 1px 3px gray;
}
</style>