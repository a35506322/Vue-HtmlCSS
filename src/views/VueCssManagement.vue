<template>
  <h1>
    vue css 管理
  </h1>
  <p>
    在vue css管理當中有兩種方式
  </p>
  <ul>
    <li>
      <p> 在.vue檔案中引用style 並加上scoped src</p>
      <a href="https://segmentfault.com/a/1190000012728854">相關知識</a>
    </li>
    <li>
      <p>或者 在.vue檔案中引用style 並加上scoped，直接在裡面撰寫</p>
      <a href="https://medium.com/@debbyji/deep-%E6%98%AF%E4%BB%80%E9%BA%BC-%E8%81%8A%E8%81%8A-vue-%E8%A3%A1%E7%9A%84-scoped-css-d1877f902845">相關知識</a>
    </li>
  </ul>
  <p>可以查看本專案內的Html2和Composing的範例</p>
  <p>會這麼做是因為vue loader會把你引入的style都會為全域變數，所以需要scoped讓他不互吃</p>
  <p>
    這邊有針對@import的作用域相關連結
    <a href="https://ithelp.ithome.com.tw/questions/10189351">
      相關知識
    </a>
  </p>
</template>
