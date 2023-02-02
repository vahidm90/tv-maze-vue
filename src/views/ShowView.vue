<template>
  <ShowDetails v-if="showDetails" :show-details="showDetails"></ShowDetails>
</template>

<script>
import { DEFAULT_IMAGE } from "@/helpers/default-image";
import { SHOW_PATH_PARAM_NAME } from "@/router/route-partials.config";
import { getShowDetails } from "@/api/api-calls";
import ShowDetails from "@/components/ShowDetails.vue";

export default {
  name: "ShowView",
  data() {
    return {
      showDetails: null,
    };
  },
  components: { ShowDetails },
  computed: {
    src: () => this.showDetails.image?.original || DEFAULT_IMAGE,
  },
  created() {
    getShowDetails(this.$route.params[SHOW_PATH_PARAM_NAME]).then(
      (details) => (this.showDetails = details)
    );
  },
};
</script>
