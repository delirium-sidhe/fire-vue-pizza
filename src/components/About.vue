<template>
  <div>
    <p>Click on the links below to see more info</p>
    <nav class="navbar navbar-togglable-md navbar-light">
      <ul class="nav">
        <router-link :to="{ name: 'history' }" tag="li">
          <a class="nav-link">Our History</a>
        </router-link>
        <router-link :to="{ name: 'contact' }" tag="li">
          <a href class="nav-link">Contacts</a>
        </router-link>
        <router-link :to="{ name: 'OrderingGuide' }" tag="li">
          <a href class="nav-link">How to order</a>
        </router-link>
        <router-link :to="{ name: 'delivery' }" tag="li">
          <a href class="nav-link">Delivery</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
