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
import Routes from "@/router/routes";

@Component
export default class Navigation extends Vue {
  links: Link[] = [
    {
      text: "Home",
      link: Routes.HOME_PAGE,
      extraStyle: { fontWeight: "bold" }
    },
    {
      text: "CSS Grid",
      link: Routes.CSS_GRID
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
