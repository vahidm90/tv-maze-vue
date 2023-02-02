<template>
  <div class="search-wrap">
    <div class="small-screen-search">
      <div class="input-wrap">
        <input
          v-if="showInput"
          type="text"
          v-model="input"
          @keyup="(event) => onInputKeyUp(event)"
          class="search-input"
          placeholder="show name..."
        />
      </div>
    </div>
    <div class="wide-screen-search">
      <div class="input-wrap">
        <input
          type="text"
          v-model="input"
          @keyup="(event) => onInputKeyUp(event)"
          class="search-input"
          placeholder="show name..."
        />
      </div>
    </div>
    <button class="toggle" @click="showInput = !showInput">Search</button>
  </div>
</template>

<script>
import { SEARCH_QUERY_PARAM_NAME } from "@/router/route-partials.config";
import { UTIL } from "@/utils/util";

export default {
  name: "TopBarSearch",
  methods: {
    onInputKeyUp: (event) => {
      if (event.key === "Enter") {
        this.$router.replace(
          `/search?${SEARCH_QUERY_PARAM_NAME}=${encodeURIComponent(
            UTIL.sanitizeSearchTerm(this.input)
          )}`
        );
      }
    },
  },
  data() {
    return {
      showInput: false,
    };
  },
};
</script>

<style scoped lang="scss">
.search-wrap {
  position: relative;

  .small-screen-search {
    width: 90vw;
    max-width: 300px;
    position: absolute;
    top: 100%;
    right: 0;

    .input-wrap {
      width: 100%;
      z-index: 9;

      input {
        width: 100%;
      }
    }
  }

  .input-wrap {
    position: relative;

    .suggestions {
      position: absolute;
      top: 100%;
      right: 0;
    }
  }

  @media screen and (max-width: 550px) {
    .wide-screen-search {
      display: none;
    }
  }
  @media screen and (min-width: 551px) {
    .small-screen-search {
      display: none;
    }
    .toggle {
      display: none;
    }
  }
}
</style>
