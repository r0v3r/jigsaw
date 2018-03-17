import Vue from "vue";
import Router from "vue-router";
import Example from "../pages/Example.vue";
import Company from "../pages/Company.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/example"
    },
    {
      path: "/example",
      name: "example",
      component: Example
    },
    {
      path: "/company",
      name: "company",
      component: Company
    }
  ]
});
