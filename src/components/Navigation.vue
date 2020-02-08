<template lang="html">
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="(link, index) in links"
        :key="`link-${index}`"
        :style="link.extraStyle"
      >
        <router-link :to="link.link">
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  links: Link[] = [
    {
      text: "Home",
      link: "/",
      extraStyle: { fontWeight: "bold" }
    },
    {
      text: "css-grid",
      link: "/about"
    }
  ];
}

interface Link {
  text: string;
  link: string;
  extraStyle?: { [property: string]: string };
}
</script>

<style lang="scss" scoped>
.navigation {
  text-align: right;

  &__list {
    list-style: none;
  }
}
</style>
