<template>
  <div class="container-fluid mt-3 position-relative">
    <NavBar></NavBar>
    <router-view></router-view>
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
