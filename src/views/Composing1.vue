<template>
  <div>
    <h1>區塊元素1</h1>
    <h1>區塊元素2</h1>
    <p>重點整理</p>
    <ul>
      <li>會預設佔的空間趨近於滿版</li>
      <li>區塊元素會另起一行</li>
    </ul>
    <a href="#">行內元素</a>
    <a href="#">行內元素</a>
    <span>行內元素</span>
    <p>重點整理</p>
    <ul>
      <li>比較常用在段落裡</li>
      <li>沒辦法直接設定寬高 => 設定成display:block，
        用意是可以讓行內元素變大，方便使用者點選</li>
    </ul>
  </div>
</template>

<style scoped src='../assets/css/composing.css'></style>
<style scoped>
/* @import '../assets/css/composing.css' */
  /* h1 {
    background-color: gray;
    color: white;
  } */
</style>
