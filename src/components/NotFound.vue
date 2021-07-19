<template>
  <div id="app" class="back">
    <v-app id="inspire">
      <v-container fluid fill-height>
        <v-flex xs12 sm8 md4>
          <div pb-2>
            <h1>404</h1>
            <h2>Oops!</h2>
            <h2>Something's missing.</h2>
            <p>This is not the page you are looking for :)</p>
            <v-btn @click="redirectToMain"> go back</v-btn>
          </div>
        </v-flex>
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
  /* FIX: Move to assets */
  background-image: url(https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/blank_canvas_3rbb.svg);
  background-size: cover;
}

#inspire {
  background: none;
}
</style>