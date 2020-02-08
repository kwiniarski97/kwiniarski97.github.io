<template>
  <div class="home">
    <h1>My notebook</h1>
    <p>
      Here I add some random things that I find interesting.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>
