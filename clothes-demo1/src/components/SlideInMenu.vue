<style scoped>
.shader {
  position: fixed;
  z-index: 100;
  left: 0;
  width: 100%;
  top: 0;
  bottom: 0;
  background: #898989;
  opacity: 0.7;
}
.shader.in {
  display: block;
}
.shader.fadeIn {
  animation-name: fadeIn;
}
.shader.out {
  display: none;
}
.shader.fadeOut {
  animation-name: fadeOut;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}
@keyframes fadeOut {
  from {
    opacity: 0.7;
  }
  to {
    opacity: 0;
  }
}

.wrapper {
  z-index: 101;
  position: fixed;
  max-width: 400px;
  width: 70%;
  left: 0;
  top: 0;
  height: 100%;
  overflow-y: scroll;
}
.wrapper > img {
  width: 100%;
}
.wrapper nav img {
  width: 0.5rem;
  margin-right: 12px;
}
.wrapper nav a {
  padding-left: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 1.5rem;
  color: #222222;
  font-size: 0.5rem;
  text-decoration: none;
}
.wrapper nav a.active {
  background: #ececec;
}
.wrapper.in {
  display: block;
}
.wrapper.out {
  display: none;
}
</style>

<template>
<div>
    <div class="shader" @click="onClose"></div>
    <div class="wrapper">
        <img src="../assets/menu-bg.jpg">
        <nav>
            <a class="active" href="#/example" @click="onClose">
                <img src="../assets/case.svg"><span>案例展示</span>
            </a>
            <a href="#/company" @click="onClose">
                <img src="../assets/company.svg"><span>公司形象</span>
            </a>
            <a href="#/partner" @click="onClose">
                <img src="../assets/friends.svg"><span>合作伙伴</span>
            </a>
            <a href="#/about" @click="onClose">
                <img src="../assets/card.svg"><span>个人名片</span>
            </a>
        </nav>
    </div>
</div>
</template>

<script>
export default {
  name: "SlideInMenu",
  props: ["active"],
  data() {
    return {};
  },
  mounted() {
    let $shader = this.$el.querySelector(".shader");
    let $wrapper = this.$el.querySelector(".wrapper");
    if (this.active) {
      $shader.classList.add("in");
      $wrapper.classList.add("in");
    } else {
      $shader.classList.add("out");
      $wrapper.classList.add("out");
    }
  },
  methods: {
    onClose(event) {
      this.$emit("onClose");
    },
    activeChange() {
      let $shader = this.$el.querySelector(".shader");
      let $wrapper = this.$el.querySelector(".wrapper");
      if (this.active) {
        $shader.classList = "shader in animated fadeIn";
        $wrapper.classList = "wrapper in animated slideInLeft";
      } else {
        $shader.classList = "shader animated fadeOut";
        $wrapper.classList = "wrapper animated slideOutLeft";
        setTimeout(() => {
          $shader.classList.add("out");
          $wrapper.classList.add("out");
        }, 300);
      }
    },
    routeChange() {
      let $anchors = this.$el.querySelectorAll("nav a");
      for (let $anchor of $anchors) {
        $anchor.classList = "";
      }
      switch (this.$route.path) {
        case "/example":
          $anchors.item(0).classList = "active";
          break;
        case "/company":
          $anchors.item(1).classList = "active";
          break;
        case "/partner":
          $anchors.item(2).classList = "active";
          break;
        case "/about":
          $anchors.item(3).classList = "active";
          break;
      }
    }
  },
  watch: {
    active: "activeChange",
    $route: "routeChange"
  }
};
</script>
