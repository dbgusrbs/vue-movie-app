<template>
  <MovieHeadline />
  <MovieSearch />
  <MovieList />
</template>

<script>
import MovieHeadline from '~/components/MovieHeadline'
import MovieSearch from '~/components/MovieSearch'
import MovieList from '~/components/MovieList'

export default {
  components: {
    MovieHeadline,
    MovieSearch,
    MovieList
  },
  created() {
    this.$store.commit('movie/resetMovies')
  }
}
</script>