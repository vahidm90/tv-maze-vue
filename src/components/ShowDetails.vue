<template>
  <div class="top-banner">
    <div class="banner-photo">
      <img class="show-img" src="{{src}}" alt="{{showDetails.name}}" />
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
export default {
  name: "ShowDetails",
  props: {
    showDetails: { type: Object, required: true },
  },
};
</script>

<style scoped></style>
