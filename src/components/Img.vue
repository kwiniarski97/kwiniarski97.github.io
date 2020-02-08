<template lang="html">
  <img class="image" :src="src" :alt="alt" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Img extends Vue {
  @Prop() private src!: string;
  @Prop() private alt!: string;
}
</script>

<style lang="scss">
.image {
  width: 100%;
}
</style>
