<template>
  <div>
    <dv-border-box-13 style="width: 100%; height: 650px">
      <div style="padding-top: 10px"></div>
      <dv-decoration-11 style="width: 200px; height: 60px; margin: 0 auto;">任务分析进度</dv-decoration-11>
      <dv-capsule-chart :config="config" style="width:90%;height:80%"/>
    </dv-border-box-13>
  </div>
</template>

<script>
import taskApi from '../api/task'

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
  mounted () {
    this.fetchData()
    setInterval(this.fetchData, 5 * 1000)
  },
  methods: {
    fetchData () {
      taskApi.listByRunning().then(res => {
        console.log('listByRunning()', res)
        this.config.data = [{ 'name': '任务完成', value: 100 }]
        for (let i = 0; i < res.data.data.length; i++) {
          let item = res.data.data[i]
          this.config.data.push({
            name: item.newsTitle.substr(0, 10),
            value: item.progress,
          })
        }
        this.config = { ...this.config }
      })
    },
  },
}
</script>

<style scoped>
* {
  color: #C4CAD9;
}
</style>
