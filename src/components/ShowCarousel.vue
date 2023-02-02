<template>
  <div class="carousel-wrap">
    <h5 class="carousel-title" v-if="title">{{ title }}</h5>
    <div class="carousel-container">
      <div
        v-for="(show, index) in shows"
        :key="`show-${index}`"
        class="carousel-item"
      >
        <ShowCard :show="show"></ShowCard>
      </div>
    </div>
  </div>
</template>

<script>
import ShowCard from "@/components/ShowCard.vue";

export default {
  name: "ShowCarousel",
  components: { ShowCard },
  props: {
    title: { type: String },
    shows: { type: Object, required: true },
  },
};
</script>

<style scoped lang="scss">
.carousel-wrap {
  .carousel-title {
    padding: 0 16px;
    margin: 16px 0 8px;
    font-size: 18px;
    color: $primary-color;
  }

  .carousel-container {
    padding: 16px;
    display: flex;
    overflow-x: auto;
    background: linear-gradient(90deg, #00000014, transparent, #00000014);

    .carousel-item:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
