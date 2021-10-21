<template>
  <div id="lineChart" class="line-chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "lineChart",
  props: {
    option: {
      type: Object,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    computedName: function () {
      return false;
    },
  },
  watch: {
    option: function (val) {
      this.update(val);
    },
  },
  created: function () {},
  mounted: function () {
      this.init();
  },
  methods: {
    init() {
      let chartDom = document.getElementById("lineChart");
      this.chart = echarts.init(chartDom);
      this.chart.setOption(this.option || {});
    },
    update(option) {
      this.chart.setOption(option);
    },
  },
};
</script>

<style scoped>
.line-chart {
  width: 100%;
  height: 100%;
}
</style>
