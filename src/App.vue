<template>
  <TopBar />
  <router-view />
</template>
<script>
import TopBar from "@/components/TopBar.vue";

export default {
  name: "App",
  components: { TopBar },
};
</script>
<style lang="scss">
.top-ribbon {
  background-color: $primary-color;
  height: 50px;
  display: flex;
  padding: 16px;
  align-items: center;

  .app-title {
    font-size: 16px;
    color: #ffffff;
    margin: 0;
  }

  .tools {
    margin: 0 0 0 auto;
  }
}
</style>
