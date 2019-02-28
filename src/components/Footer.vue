<template>
  <footer class="row">
    <nav class="navbar navbar-togglable-md navbar-light">
      <ul class="nav">
        <router-link :to="{ name: 'home' }" tag="li">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link :to="{ name: 'about' }" tag="li">
          <a href class="nav-link">About</a>
        </router-link>
        <router-link :to="{ name: 'admin' }" tag="li">
          <a href class="nav-link">Admin</a>
        </router-link>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped></style>
