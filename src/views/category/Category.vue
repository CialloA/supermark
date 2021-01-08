<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
      <li>#1</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      /**
       * probe侦测
       * 0、1都是不侦测
       * 2:手指滚动的时候侦测，手指离开后惯性不侦测
       * 3:只要是滚动就侦测
       *
       * click:监听warrper里面的按钮,默认为false
       */
      probeType: 0,
      click: true,
      pullUpLoad: true, //只会加载一次，再配合finishPullUp()使用
    });

    // this.scroll.on("scroll", (position) => {
    //   console.log(position);
    // });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载");
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 2000);
    });
  },
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  overflow: hidden;
}
</style>
