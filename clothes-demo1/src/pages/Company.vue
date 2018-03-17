<style scoped>
section {
  width: 100%;
  display: flex;
  font-size: 0;
}
.wrapper {
  width: 100%;
  max-width: 480px;
  margin: auto;
  position: relative;
}
.wrapper * {
  display: none;
}
.wrapper.in * {
  display: initial;
}
.wrapper img {
  z-index: 1;
  width: 100%;
}
.wrapper article {
  z-index: 2;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.wrapper article span {
  font-size: 0.5rem;
  line-height: 0.8rem;
  margin: 8px;
  color: #ffffff;
  font-weight: bold;
}
.wrapper .text-above {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
}
.wrapper .text-below {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
}
</style>

<template>
<div>
    <section v-for="(data, index) in sections" :key="index">
        <div class="wrapper">
            <article class="text-above" v-if="data.textAbove">
                <span>{{data.textAbove}}</span>
            </article>
            <img :src="data.img">
            <article class="text-below" v-if="data.textBelow">
               <span>{{data.textBelow}}</span>
            </article>
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: "Company",
  data() {
    return {
      sections: [
        {
          textAbove: "顶部文字",
          img: "static/company/1.jpg",
          textBelow: "底部文字"
        },
        {
          textAbove: "顶部文字",
          img: "static/company/2.jpg",
          textBelow: "底部文字"
        },
        {
          textAbove: "顶部文字",
          img: "static/company/3.jpg",
          textBelow: "底部文字"
        },
        {
          textAbove: "顶部文字",
          img: "static/company/4.jpg",
          textBelow: "底部文字"
        },
        {
          textAbove: "顶部文字",
          img: "static/company/5.jpg",
          textBelow: "底部文字"
        },
        {
          textAbove: "顶部文字",
          img: "static/company/6.jpg",
          textBelow: "底部文字"
        },
        {
          textAbove: "顶部文字",
          img: "static/company/7.jpg",
          textBelow: "底部文字"
        }
      ]
    };
  },
  mounted() {
    this.showNext(0);
  },
  methods: {
    showNext(index) {
      if (index < this.sections.length) {
        let $section = this.$el.querySelectorAll("section").item(index);
        let $wrapper = $section.querySelector(".wrapper");
        let $textAbove = $section.querySelector(".text-above");
        let $textBelow = $section.querySelector(".text-below");
        let $img = $section.querySelector("img");

        $wrapper.classList.add("in");
        $img.classList = "animated fadeIn";
        $textAbove.classList = "text-above animated slideInLeft";
        $textBelow.classList = "text-below animated slideInRight";
        setTimeout(() => {
          index = index + 1;
          this.showNext(index);
        }, 200);
      }
    }
  }
};
</script>
