<style scoped>
.card {
  width: 8rem;
  height: 14rem;
  margin: 16px auto;
  box-shadow: 0 3px 6px #cdcdcd;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/static/about/card-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.card header,
.card div {
  background: transparent;
}
.card header {
  content: "";
  width: 100%;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card header .logo {
  width: 3.3rem;
  height: 3.3rem;
  font-size: 0;
}
.card header b,
.card header span {
  margin-top: 8px;
}
.card .body {
  display: inline-flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 5rem;
}
.card .body .row {
  display: inline-flex;
  width: 100%;
  padding: 8px 12px;
  /* margin-top: 20px; */
  background-color: rgba(0, 0, 0, 0.1);
  color: #5b5b5b;
}
</style>

<template>
  <div>
      <div class="card">
        <header>
          <img class="logo" src="static/about/logo.jpeg">
            <b>XXX先生/女士</b>
            <span>总经理</span>
        </header>
        <div class="body">
            <div class="row">
                公司地址: xxxxxxxxxxxxxxx
            </div>
            <div class="row">
                联系电话: xxxxxxxxxxxxxxx
            </div>
            <div class="row">
                公司邮箱: xxxxxxxxxxxxxxx
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  mounted() {
    let $card = this.$el.querySelector(".card");
    $card.classList.add("animated");
    $card.classList.add("fadeIn");
  }
};
</script>
