<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/vuecssmanagement">VueCSS作用域問題</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/html1">基礎Html</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/html2">基礎Html2</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/composing1">Css元素種類</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/composing2">後代選擇器</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/marginpadding">Margin和Padding</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
