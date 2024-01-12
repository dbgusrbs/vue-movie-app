<template>
  <footer>
    <MovieLogo />
    <a
      href="https://github.com/dbgusrbs"
      target="_blank">
      (c){{ new Date().getFullYear() }} dbgusrbs
    </a>
  </footer>
</template>

<script>
import MovieLogo from '~/components/MovieLogo'

export default {
  components: {
    MovieLogo
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .4;
  .logo {
    display: block;
  }
}
</style>