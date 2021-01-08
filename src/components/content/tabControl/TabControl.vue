<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      defult() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  z-index: 1;
}
.tab-control-item {
  flex: 1;
}
.tab-control span {
  padding: 5px;
}
.active {
  color: rgb(255, 87, 87);
}
.active span {
  border-bottom: 3px solid rgb(255, 87, 87);
}
</style>