<template>
  <div class="container">
    <div
      :class="{ 'no-result': !movies.length }"
      class="inner">
      <MovieLoader v-if="loading" />
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div
        v-else
        class="movies">
        <MovieItem
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MovieItem from '~/components/MovieItem'
import MovieLoader from '~/components/MovieLoader'

export default {
  components: {
    MovieItem,
    MovieLoader
  },
  computed: {
    ...mapState('movie', [
      'movies',
      'message',
      'loading'
    ])
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  .inner {
    padding: 10px;
    background-color: $gray-200;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }
  .message {
    color: $gray-400;
    font-size: 20px;
  }
  .movies {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>