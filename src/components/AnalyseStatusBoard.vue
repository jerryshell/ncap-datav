<template>
  <div>
    <dv-border-box-11 style="width: 100%; height: 200px" title="情感分析系统负载状态">
      <dv-charts :option="option" style="padding-top: 35px"/>
    </dv-border-box-11>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: {
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 15,
            data: [
              { name: 'load', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] },
            ],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: 'round',
            },
            details: {
              show: true,
              formatter: '{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 35,
              },
            },
          },
        ],
      },
    }
  },
  methods: {},
}
</script>

<style scoped>
* {
  color: #C4CAD9;
}
</style>
