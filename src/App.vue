<template>
  <div id="app">
    <header id="header"></header>
    <Navigation id="nav" />
    <main id="main">
      <router-view />
    </main>
    <div id="meme-wrapper"><Meme id="meme"></Meme></div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import MemeComponent from "./components/Meme";

export default {
  name: "App",
  components: {
    Navigation,
    Meme: MemeComponent
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
@import "scss/variables";

$headerHeight: 40px;
#app {
  position: relative;
  display: grid;
  grid-template-areas:
    ". header ."
    "nav main ad";
  grid-template-columns: minmax(150px, 1fr) 9fr 2fr;
  grid-template-rows: $headerHeight auto;
  grid-gap: 16px;
}

#header {
  grid-area: header;
}

#nav {
  grid-area: nav;
  text-align: right;

  li {
    list-style: none;
    padding: 0;
  }
}

#main {
  grid-area: main;
}

#meme-wrapper {
  grid-area: ad;
  text-align: center;
  #meme {
    top: $headerHeight;
    position: sticky;
  }
}

@media screen and (max-width: 1024px) {
  #app {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "ad";
    grid-template-columns: 12fr;
    grid-template-rows: $headerHeight $headerHeight auto 400px;
  }

  #nav {
    text-align: left;

    li {
      display: inline;
      padding: 5px;
    }
  }
}
</style>
