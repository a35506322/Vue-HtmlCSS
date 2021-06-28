<template>
  <div>
    <div class="box">
      <p>Margin Padding練習</p>
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur in sed voluptas blanditiis saepe nesciunt labore officia quidem officiis distinctio. Voluptatem dolorum unde architecto omnis ipsa, hic optio minus blanditiis?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam provident dolor et unde doloribus odio magnam. Error ratione, dolorum qui laudantium, consequatur amet libero esse pariatur officia nesciunt id debitis.</p>
      </div>
    </div>
    <p>重點</p>
      <ul>
        <li>1.盡量不要不知道內容時候設置高度</li>
        <li>2.區塊元素會自己因為父元素而設置寬度</li>
        <li>3.Margin向外推Padding向內推</li>
        <li>4.padding border是會列入實際寬高 所以我box高寬度是300+30+30</li>
        <li>5.margin 是佔元素整個的寬高也就是說我上面的box是300+30+30+20+20,但不代表盒模型實際寬高</li>
    </ul>
    <br>
    <br>
    <div>
      <p>水平置中版型</p>
      <div class="wrap">
        <div class="header"></div>
        <div class="content">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolorum voluptate earum doloribus tempora exercitationem quam fuga fugit laborum, atque modi corporis a velit maxime deserunt dolorem odit cum non.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi aliquam similique cupiditate placeat recusandae laboriosam dignissimos non repudiandae eos, ipsum ipsam ab debitis ea praesentium laborum totam id voluptatem.</p>
        </div>
        <div class="footer">
          <p>
            地址:新北市三重區<br>
            電話:0978822811
          </p>
        </div>
      </div>
    </div>
    <p>重點整理</p>
    <ul>
      <li>1.margin 0 auto 是對區塊元素水平置中</li>
      <li>2.text-algin 是對文字</li>
    </ul>
    <br>
    <br>
    <div>
      <p>border-box</p>
      <div class="borderbox">
      </div>
    </div>
    <p>重點整理</p>
    <ul>
      <li>border-box 代表你區塊元素寬度高度設多少就是多少，不會累加border padding</li>
      <li>Bootstrap 他的預設就是border-box </li>
    </ul>
  </div>
</template>

<style scoped src='../assets/css/composing3.css'></style>
