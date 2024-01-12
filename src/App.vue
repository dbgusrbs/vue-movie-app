<template>
  <MovieHeader />
  <RouterView />
  <MovieFooter />
</template>

<script>
import MovieHeader from '~/components/MovieHeader'
import MovieFooter from '~/components/MovieFooter'

export default {
  components: {
    MovieHeader,
    MovieFooter
  }
}
</script>