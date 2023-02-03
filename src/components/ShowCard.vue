<template>
  <RouterLink
    v-if="show"
    class="card-link plain-link"
    :title="show.name"
    :to="'/shows/' + show.id"
  >
    <div :style="{ 'background-image': backgroundImage }" class="show-card">
      <h6 class="show-title">{{ show.name }}</h6>
    </div>
  </RouterLink>
</template>

<script>
import { DEFAULT_IMAGE } from "@/helpers/default-image";

export default {
  name: "ShowCard",
  props: {
    show: { type: Object, required: true },
  },
  computed: {
    backgroundImage() {
      return `url('${this.show.image?.medium || DEFAULT_IMAGE}')`;
    },
  },
};
</script>

<style scoped lang="scss">
.card-link {
  &,
  &:hover,
  &:focus,
  &:focus-visible {
    color: $primary-color;

    .show-card {
      width: 250px;
      height: 350px;
      background: 0% / cover no-repeat;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      border-radius: 4px;

      .show-title {
        display: none;
        margin: 0;
        width: 100%;
        padding: 8px;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.6),
          white,
          rgba(255, 255, 255, 0.6)
        );
        text-align: center;
        font-size: 28px;
      }
    }
  }

  &:hover,
  &:focus {
    .show-card {
      box-shadow: inset 0 0 10px #ffffff;

      .show-title {
        display: block;
      }
    }
  }
}
</style>
