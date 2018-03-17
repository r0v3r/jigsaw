<style scoped>
.container {
  padding: 0.4rem 0;
}
.case {
  display: none;
  box-sizing: border-box;
  margin-bottom: 0.4rem;
  /* display: flex; */
  height: 3rem;
}
.case.in {
  display: flex;
  padding: 0 12px;
}
.case > img {
  display: inline-flex;
  width: calc(5rem - 12px);
  margin-right: 12px;
}
.case > img:last-child {
  margin-right: 0;
}
.case > .label {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}
.case > .label .title {
  margin: 0;
  font-size: 0.5rem;
  margin-bottom: 10px;
}
.case > .label .subtitle {
  margin: 0;
  font-size: 0.4rem;
}

.detail {
  display: none;
  z-index: 200;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: scroll;
}
.detail.in {
  display: block;
}
.detail header {
  z-index: 201;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.detail header .menu-button {
  background: transparent;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 1.8rem;
}
.detail .menu-button img {
  width: 0.8rem;
  height: 0.8rem;
}
.detail section {
  position: relative;
  padding: 0;
  margin: 0;
  font-size: 0;
}
.detail section > img {
  width: 100%;
}
.detail article {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #898989;
  font-size: 0.5rem;
  color: #ffffff;
  opacity: 0.5;
}
</style>
<template>
<div class="container">
   <section class="case" v-for="(data, index) in cases" :key="index" @click="openDetail(index)">
     <template v-if="index%2==0">
      <img :src="data.img">
       <article class="label">
           <p class="title">{{ data.title }}</p>
           <p class="subtitle">{{ data.subtitle }}</p>
       </article>
     </template>
     <template v-else>
      <article class="label">
           <p class="title">{{ data.title }}</p>
           <p class="subtitle">{{ data.subtitle }}</p>
      </article>
      <img :src="data.img">
     </template> 
   </section>

   <div class="detail">
    <header>
       <div class="menu-button" @click="closeDetail()"><img src="../assets/back.svg"></div>
       <b>{{ detail.title }}</b>
       <div style="width:2rem"></div>
    </header>
     <section v-for="(img, index) in detail.imgs" :key="index">
       <img :src="img">
       <!-- <p><p>描述</p></p> -->
     </section>
   </div>
</div>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      cnt: 0,
      cases: [
        {
          img: "static/cases/case1.jpeg",
          title: "主标题",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case2.jpeg",
          title: "主标题",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case3.jpeg",
          title: "主标题",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case4.jpeg",
          title: "主标题",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case5.jpg",
          title: "主标题",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case6.jpg",
          title: "主标题",
          subtitle: "西服,衬衫"
        }
      ],
      detail: { imgs: [] }
    };
  },
  created() {
    this.detail = this.cases[0];
  },
  mounted() {
    setTimeout(() => {
      this.showNext(0);
    }, 300);
  },
  methods: {
    showNext(index) {
      if (index < this.cases.length) {
        this.$el.querySelectorAll(".case").item(index).classList =
          "case in animated flipInX";
        setTimeout(() => {
          index = index + 1;
          this.showNext(index);
        }, 150);
      }
    },
    openDetail(index) {
      this.detail = this.cases[index];
      this.detail.imgs = [
        "static/details/1.jpg",
        "static/details/2.jpg",
        "static/details/3.jpg",
        "static/details/4.jpg",
        "static/details/5.jpg"
      ];
      let $detail = this.$el.querySelector(".detail");
      $detail.classList = "detail in animated zoomInDown";
    },
    closeDetail() {
      let $detail = this.$el.querySelector(".detail");
      $detail.classList = "detail in animated zoomOutUp";
      setTimeout(() => {
        $detail.classList.remove("in");
      }, 300);
    }
  }
};
</script>
