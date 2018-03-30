<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section {
  position: relative;
  display: none;
  width: 80%;
  margin: 10px auto;
  padding: 12px;
  max-width: 400px;
  box-shadow: 0 3px 6px #cdcdcd;
}
section.in {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
section > img {
  max-width: 100%;
  max-height: 3rem;
}
section .mask {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
}
section .mask.in {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
section .mask p {
  margin: 8px;
}
</style>

<template>
  <div class="wrapper">
      <section v-for="(partner, index) in partners" :key="index" @click="toggleMask(index)">
          <img :src="partner.logo">
          <p>{{partner.name}}</p>
          <div class="mask">
              <p>金牌供应商</p>
              <p>战略合作伙伴</p>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  name: "Partners",
  data() {
    return {
      partners: [
        { logo: "static/partner/1.jpg", name: "优衣库", mask: [""] },
        { logo: "static/partner/2.jpg", name: "杉杉", mask: [""] },
        { logo: "static/partner/3.jpg", name: "edwin", mask: [""] },
        { logo: "static/partner/4.png", name: "H&M", mask: [""] },
        { logo: "static/partner/5.jpg", name: "Forever 21", mask: [""] },
        { logo: "static/partner/6.png", name: "七匹狼", mask: [""] }
      ]
    };
  },
  mounted() {
    this.showNext(0);
  },
  methods: {
    showNext(index) {
      if (index < this.partners.length) {
        let $section = this.$el.querySelectorAll("section").item(index);
        $section.classList = "in animated slideInUp";
        setTimeout(() => {
          index = index + 1;
          this.showNext(index);
        }, 100);
      }
    },
    toggleMask(index) {
      let $section = this.$el.querySelectorAll("section").item(index);
      let $mask = $section.querySelector(".mask");
      if ($mask.classList.contains("in")) {
        $mask.classList = "mask animated fadeOut";
      } else {
        $mask.classList = "mask in animated fadeIn";
      }
    }
  }
};
</script>

