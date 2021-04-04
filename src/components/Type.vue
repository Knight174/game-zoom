<template>
  <div class="type" v-if="show">
    <span class="bd" v-for="(item, index) in typeList" :key="index">
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Type",
  props: {
    type: String,
  },
  data() {
    return {
      typeList: [],
      show: false,
    };
  },
  watch: {
    type(n) {
      if (n.length) {
        this.show = true;
        // console.log(n.split(","));
        this.typeList = n.split(",");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bd {
  display: inline-block;
  padding: 0.5rem;
  margin-top: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 3px solid $c-red;
  border-radius: 0.5rem;
  font-size: $s-sub;
}
</style>
