<template>
  <div class="top-banner">
    <div class="banner-photo">
      <img class="show-img" :src="src" :alt="showDetails.name" />
    </div>
    <div class="banner-text">
      <h1 class="show-name">{{ showDetails.name }}</h1>
      <div v-if="showDetails.rating?.average" class="score">
        Rate: {{ showDetails.rating.average }}
      </div>
      <ul class="genre plain-list">
        <li
          v-for="(genre, index) in showDetails.genres"
          :key="`genre-${index}`"
        >
          {{ genre }}
        </li>
      </ul>
      <ul class="details plain-list">
        <li v-if="showDetails.language">
          <span class="label">Language: </span>{{ showDetails.language }}
        </li>
        <li v-if="showDetails.network?.name">
          <span class="label">Network: </span>{{ showDetails.network?.name }}
        </li>
        <li v-if="showDetails.officialSite" class="site">
          <a href="{{showDetails.officialSite}}" target="_blank"
            >Official Website</a
          >
        </li>
      </ul>
      <section class="summary">
        <h2>Summary</h2>
        <div class="summary-content" v-html="showDetails.summary"></div>
      </section>
    </div>
  </div>
</template>

<script>
import { DEFAULT_IMAGE } from "@/helpers/default-image";

export default {
  name: "ShowDetails",
  props: {
    showDetails: { type: Object, required: true },
  },
  computed: {
    src() {
      return this.showDetails.image?.original || DEFAULT_IMAGE;
    },
  },
};
</script>

<style scoped lang="scss">
.top-banner {
  flex-grow: 1;
  display: flex;
  height: 100%;

  .banner-photo {
    position: relative;
    flex-grow: 1;
    width: 100%;
    max-width: 350px;
    overflow: hidden;

    img {
      position: absolute;
      height: auto;
      width: 100%;
    }
  }

  .banner-text {
    height: 100%;
    padding: 16px;

    .show-name {
      font-size: 48px;
      margin: 32px 0;
    }

    .genre {
      margin-top: 16px;

      li:not(:last-child) {
        margin-right: 8px;

        &:after {
          content: ",";
        }
      }
    }

    .details {
      flex-direction: column;

      li {
        margin-top: 16px;
      }
    }

    .summary {
      h2 {
        margin: 32px 0 8px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .top-banner {
    position: relative;
    height: auto;
    flex-direction: column;

    .banner-photo {
      position: absolute;
      width: 100%;
      height: 100%;
      max-width: unset;
    }

    .banner-text {
      position: relative;
      top: 60vh;
      background: linear-gradient(#00000078, #000);
    }
  }
}
</style>
