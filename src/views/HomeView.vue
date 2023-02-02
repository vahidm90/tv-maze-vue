<template>
  <div class="page-wrap">
    <ShowCarousel
      v-for="(genre, index) in Object.keys(showsByGenre)"
      :key="`genre-${index}`"
      :title="genre"
      :shows="showsByGenre[genre]"
    />
  </div>
</template>

<script>
import ShowCarousel from "@/components/ShowCarousel.vue";
import { getShowList } from "@/api/api-calls";
import { UTIL } from "@/utils/util";

export default {
  name: "HomeView",
  components: {
    ShowCarousel,
  },
  data() {
    return {
      showsByGenre: null,
    };
  },
  created() {
    getShowList().then(
      (shows) => (this.showsByGenre = UTIL.groupShowsByGenre(shows))
    );
  },
};
</script>
