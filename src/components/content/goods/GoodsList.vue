<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods.list"
      :key="index"
      :goods-item="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      defaults() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>