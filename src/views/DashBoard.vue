<template>
  <div class="container-fluid mt-3 position-relative">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style src='../assets/css/reset.css'></style>
