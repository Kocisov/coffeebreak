<template>
  <div class="flex">
    <aside>
      <div class="logo">
        <img src="../assets/coffeebreak.svg" alt="" width="80">
      </div>
      <nav>
        <li>
          <router-link :to="{ path: '/' }" exact>
            <span class="icon icon-plus"></span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/get' }">
            <span class="icon icon-bag"></span>
          </router-link>
        </li>
      </nav>
    </aside>
    <main>
      <router-view class="view" transition="view" transition-mode="out-in" keep-alive></router-view>
    </main>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }

  *:before,
  *:after,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ::selection{
    background: #3A3E3E;
    color: #fff;
    text-shadow: none;
  }

  html,
  body {
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  p {
    margin: 0;
  }

  hr {
    border: 0;
    border-top: 1px solid #e5e5e5;
    height: 5px;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    font-size: 12px;
  }

  body {
    background: #fff;
    color: #333;
    font-family: Open Sans, sans-serif;
    font-weight: 300;
    overflow-x: hidden;
  }

  a {
    display: block;
    text-decoration: none;
    outline: 0;
  }

  .icon {
    font-size: 24px;
  }

  .flex {
    display: flex;
  }

  .box {
    flex: 1;
    margin-right: 5px;
  }

  aside {
    width: 100px;
    height: 100vh;
    text-align: center;
  }

  aside li {
    display: block;
  }

  aside li a {
    padding: 10px;
    text-decoration: none;
    color: #999;
  }

  .logo {
    margin: 5px;
  }

  main {
    flex: 1;
    padding: 10px;
  }

  input {
    border-radius: 3px;
    border: 1px solid #e5e5e5;
    padding: 2px;
  }

  .view {
    transition: all .3s ease-in-out;
  }

  .view-enter, .view-leave {
    opacity: 0;
    transform: translate3d(10px, 0, 0);
  }

  .router-link-active {
    color: #333;
  }

  [v-cloak] {
    display: none;
  }
</style>
