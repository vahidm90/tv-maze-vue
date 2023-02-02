<template>
  <div class="top-ribbon">
    <RouterLink class="plain-link" to="/">
      <h2 class="app-title">TV MAZE DEMO</h2>
    </RouterLink>
    <div class="tools">
      <TopBarSearch></TopBarSearch>
    </div>
  </div>
</template>

<script>
import TopBarSearch from "@/components/TopBarSearch.vue";

export default {
  name: "TopBar",
  components: {
    TopBarSearch,
  },
};
</script>

<style scoped></style>
