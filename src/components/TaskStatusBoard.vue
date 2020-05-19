<template>
  <div>
    <dv-border-box-13 style="width: 400px; height: 600px">
      <div style="padding-top: 10px"></div>
      <dv-decoration-11 style="width: 200px; height: 60px; margin: 0 auto;">任务分析进度</dv-decoration-11>
      <dv-capsule-chart :config="config" style="width:90%;height:80%"/>
    </dv-border-box-13>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: {
        data: [
          {
            name: '南阳',
            value: 100,
          },
          {
            name: '周口',
            value: 89,
          },
          {
            name: '漯河',
            value: 66,
          },
          {
            name: '郑州',
            value: 40,
          },
          {
            name: '西峡',
            value: 12,
          },
        ],
        showValue: true,
      },
    }
  },
}
</script>

<style scoped>
* {
  color: #C4CAD9;
}
</style>
