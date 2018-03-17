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
}
.case > img {
  display: inline-flex;
  width: 5rem;
}
.case > .detail {
  padding-left: 12px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}
.case > .detail .title {
  margin: 0;
  font-size: 0.5rem;
  margin-bottom: 10px;
}
.case > .detail .subtitle {
  margin: 0;
  font-size: 0.4rem;
}
</style>
<template>
<div class="container">
   <section class="case" v-for="(data, index) in cases" :key="index">
       <img :src="data.img">
       <!-- <img src="static/cases/case1.jpeg"> -->
       <article class="detail">
           <p class="title">{{ data.title }}</p>
           <p class="subtitle">{{ data.subtitle }}</p>
       </article>
   </section>
</div>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      cases: [
        {
          img: "static/cases/case1.jpeg",
          title: "公司",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case2.jpeg",
          title: "公司",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case3.jpeg",
          title: "公司",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case4.jpeg",
          title: "公司",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case5.jpg",
          title: "公司",
          subtitle: "西服,衬衫"
        },
        {
          img: "static/cases/case6.jpg",
          title: "公司",
          subtitle: "西服,衬衫"
        }
      ]
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.showNext(0);
    }, 300);
  },
  methods: {
    showNext(index) {
      if (index < this.cases.length) {
        console.log(index);
        this.$el.querySelectorAll(".case").item(index).classList =
          "case in animated lightSpeedIn";
        setTimeout(() => {
          console.log("call");
          index = index + 1;
          console.log(index);
          this.showNext(index);
        }, 150);
      }
    }
  }
};
</script>
