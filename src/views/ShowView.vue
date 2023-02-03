<template>
  <div class="page-wrap">
    <ShowDetails v-if="showDetails" :show-details="showDetails"></ShowDetails>
  </div>
</template>

<script>
import { SHOW_PATH_PARAM_NAME } from "@/router/route-partials.config";
import { getShowDetails } from "@/api/api-calls";
import ShowDetails from "@/components/ShowDetails.vue";

export default {
  name: "ShowView",
  props: [SHOW_PATH_PARAM_NAME],
  data() {
    return {
      showDetails: null,
    };
  },
  components: { ShowDetails },
  created() {
    getShowDetails(this[SHOW_PATH_PARAM_NAME]).then(
      (details) => (this.showDetails = details)
    );
  },
};
</script>
<style scoped lang="scss">
.page-wrap {
  background-color: #000;
  color: #fff;
}
</style>
