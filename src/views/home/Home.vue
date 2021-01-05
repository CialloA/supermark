<template>
  <div id="home">
    <div>
      <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
      <home-swiper :banners='banners'></home-swiper>
      <recommend-view :recommends = 'recommends'></recommend-view>
    </div>
    <h2>我是Home</h2>
    <p>hhh</p>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView'

import { getHomeMultidata } from "network/home";


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>
<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>