<template>
  <div id="app">
     <header class="header">
      <button class="menu-button" @click="menuActive=true">
          <img src="./assets/menu.svg">
      </button>
      <div class="caption"><b>LOGO</b></div>
      <slide-in-menu :active="menuActive" @onClose="menuActive=false"></slide-in-menu>
    </header>
    <router-view class="main"/>
  </div>
</template>

<script>
import SlideInMenu from "./components/SlideInMenu";
export default {
  components: { SlideInMenu },
  name: "App",
  data() {
    return {
      menuActive: false,
      cnt: 1
    };
  },
  created() {
    this.changeHtmlFontSize();
    window.onresize = this.changeHtmlFontSize();
  },
  mounted() {
    let $header = this.$el.querySelector("header");
    $header.classList.add("animated");
    $header.classList.add("fadeIn");
  },
  methods: {
    onChangeRoute() {},
    changeHtmlFontSize() {
      let windowWidth = document.body.clientWidth;
      let $html = document.querySelector("html");
      $html.style.fontSize = windowWidth / 10 + "px";
    }
  },
  watch: {
    $route: "onChangeRoute"
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
div,
section,
header {
  touch-action: auto;
  box-sizing: border-box;
  background: #ffffff;
}
ul,
li {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
* {
  animation-duration: 0.3s !important;
  animation-fill-mode: both;
}
.header {
  height: 1.8rem;
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 3px 6px #cdcdcd;
  z-index: 10;
  font-size: 0.6rem;
  color: #222222;
}
.header .menu-button {
  position: absolute;
  background: transparent;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 1.8rem;
}
.header .menu-button img {
  width: 0.8rem;
  height: 0.8rem;
}
.header .caption {
  height: 1.8rem;
  padding: 0.4rem 0;
  line-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  margin-top: 1.8rem;
  color: #222222;
  font-size: 0.5rem;
  overflow-x: hidden;
}
</style>
