<template>
  <div class="page-wrap">
    <h1>Search Results</h1>
    <div v-if="results.length" class="results">
      <p class="hint">Showing results for "{{ query }}"</p>
      <div class="result-cards">
        <ShowCard
          v-for="(show, index) in results"
          :show="show"
          :key="`show-${index}`"
        />
      </div>
    </div>
    <h3 v-else>No results match your search query!</h3>
  </div>
</template>

<script>
import ShowCard from "@/components/ShowCard.vue";
import { SEARCH_QUERY_PARAM_NAME } from "@/router/route-partials.config";
import { searchShows } from "@/api/api-calls";

export default {
  name: "SearchView",
  props: [SEARCH_QUERY_PARAM_NAME],
  data() {
    return {
      results: [],
    };
  },
  computed: {
    query() {
      return this[SEARCH_QUERY_PARAM_NAME];
    },
  },
  components: { ShowCard },
  watch: {
    query() {
      this.handleRouteChange(this.query);
    },
  },
  created() {
    this.handleRouteChange(this.$route.query[SEARCH_QUERY_PARAM_NAME]);
  },
  methods: {
    handleRouteChange(newValue) {
      searchShows(decodeURIComponent(newValue)).then(
        (results) => (this.results = results.map((result) => result.show))
      );
    },
  },
};
</script>
<style scoped lang="scss">
.page-wrap {
  padding: 16px;

  .search-input {
    max-width: 300px;
  }

  .results {
    flex-grow: 1;

    .result-cards {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      flex-wrap: wrap;

      & > * {
        margin: 8px 0;
      }
    }
  }
}
</style>
