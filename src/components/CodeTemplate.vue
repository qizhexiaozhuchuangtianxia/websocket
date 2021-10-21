<template>
  <div class="xxx">
	组件模版代码，快速复制一个初始化组件代码
  <div>{{$store.state.home.count}}</div>
  </div>
</template>

<script>
export default {
  name: "xxx",
  props: {},
  components: {
  },
  data() {
    return {};
  },
  computed: {
    count () {
      return this.$store.state.home.count
    },
    computedName: function () {
      return false;
    }
  },
  watch: {
    watchName: function (val) {
      console.log(val, "codeTemplate");
    },
  },
  created: function() {

  },
  mounted: function() {

  },
  methods: {
	
  }
};
</script>

<style scoped>

</style>
