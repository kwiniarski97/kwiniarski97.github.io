<template>
  <a
    class="meme"
    v-if="meme"
    :href="meme.postLink"
    :aria-label="meme.title"
    target="_blank"
  >
    <Img :src="meme.url" :alt="meme.title" />
  </a>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getMeme } from "@/services/meme";
import Img from "./Img.vue";
import Meme from "@/models/meme";

@Component({
  components: {
    Img
  }
})
export default class MemeComponent extends Vue {
  meme: Meme = {};

  mounted() {
    this.fetchMeme();
  }

  async fetchMeme() {
    this.meme = await getMeme();
  }
}
</script>

<style lang="scss" scoped>
.meme {
  display: block;
}
</style>
