<template>
  <div id="app">
    <header id="header"></header>
    <Navigation id="nav" />
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
@import "scss/variables";
#app {
  display: grid;
  grid-template-areas:
    ". header ."
    "nav main ad";
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 40px auto;
  grid-gap: 16px;
}

#header {
  grid-area: header;
}

#nav {
  grid-area: nav;
}

#main {
  grid-area: main;
}
</style>
