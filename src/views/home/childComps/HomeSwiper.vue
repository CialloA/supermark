<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link"><img class="po" :src="item.image" alt="" /></a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    banners: Array,
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
}
.po {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>