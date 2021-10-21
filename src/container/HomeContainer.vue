<template>
  <LineChart :option="$store.state.home.lineChartOptions"/>
</template>

<script>
import LineChart from "../components/LineChart.vue";

export default {
  name: "homeContainer",
  props: {},
  components: {
    LineChart
  },
  data() {
    return {
      isMounted: false
    };
  },
  computed: {
    computedName: function () {
      return false;
    }
  },
  watch: {},
  created: function() {
  },
  mounted: function() {
    this.socketInit();
  },
  beforeDestroy: function() {
    this.isMounted = true;
  },
  methods: {
    mockSocketData() {
      let options = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };
      options.series[0].data = [820, 932, 901, 934, 1290, 1330, 1320].map(() => parseInt(Math.random()*1000));

      return options;
    },
    socketInit() {
      setTimeout(() => {
        this.$store.dispatch('home/lineChart', {
          data: this.mockSocketData()
        });
        if (this.isMounted) {
          return;
        }
        this.socketInit();
      }, 2000);
    }
  }
};
</script>

<style scoped>

</style>
