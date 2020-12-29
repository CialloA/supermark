<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.png"
        alt=""
      />
      <div slot="item-text">1</div>
    </tab-bar-item>
    <tab-bar-item path="/img" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/category_active.png"
        alt=""
      />
      <div slot="item-text">2</div>
    </tab-bar-item>
    <tab-bar-item path="/my" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shopcart_active.png"
        alt=""
      />
      <div slot="item-text">3</div>
    </tab-bar-item>
    <tab-bar-item path="/search" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/profile_active.png"
        alt=""
      />
      <div slot="item-text">4</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
  methods: {},
  mounted() {},
};
</script>

<style>
</style>