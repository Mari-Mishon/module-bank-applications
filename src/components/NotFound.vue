<template>
  <div id="app" class="back">
    <v-app id="inspire">
      <v-container fluid fill-height>
        <div class="text-error">
          <h1>404</h1>
          <h2>Oops!</h2>
          <h2>Something's missing.</h2>
          <p>This is not the page you are looking for :)</p>
          <v-btn @click="redirectToMain"> go back</v-btn>
        </div>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToMain() {
      this.$router.push(`/`);
    },
  },
};
</script>

<style scoped>
.back {
  background-image: url(../assets/img/error.jpg);
  background-size: contain;
  background-position: center;
}

.text-error{
  position: absolute;
  top:0;
}

#inspire {
  background: none;
}
</style>