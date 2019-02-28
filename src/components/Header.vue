<template>
  <header class="row">
    <nav class="navbar navbar-togglable-md navbar-light">
      <a href="/" class="navbar-brand">Pizza Home</a>
      <ul class="nav">
        <router-link :to="{ name: 'home' }" tag="li">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link :to="{ name: 'menu' }" tag="li">
          <a href class="nav-link">Menu</a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  margin-bottom: 20px;
}

.navbar-brand {
  font-size: 1.5em;
}
</style>
