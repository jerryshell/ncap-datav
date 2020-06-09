<template>
  <div>
    <dv-border-box-8 style="width: 100%; height: 600px">
      <dv-border-box-10>
        <h1 style="text-align: center; padding-top: 10px">系统分析次数</h1>
        <dv-digital-flop :config="config" style="width:100%; height:50px; margin: 0 auto;"/>
        <!--        <button @click="handleClick()">分析次数+1</button>-->
        <h1 style="text-align: center;padding-top: 10px">今日评论情况</h1>
        <dv-active-ring-chart :config="config2" style="width:300px; height:300px; margin: 0 auto;"/>
      </dv-border-box-10>
    </dv-border-box-8>
  </div>
</template>

<script>
import commentApi from '../api/comment'
import infoApi from '../api/info'

export default {
  data () {
    return {
      config: {
        number: [100],
        content: '{nt} 次',
      },
      config2: {
        showOriginValue: true,
        color: ['#8EE2F0', '#D94551'],
        data: [
          {
            name: '正面评论',
            value: 20,
          },
          {
            name: '负面评论',
            value: 10,
          },
        ],
        digitalFlopStyle: {
          fontSize: 20,
        },
      },
    }
  },
  mounted () {
    this.fetchData()
    setInterval(this.fetchData, 5 * 1000)
  },
  methods: {
    handleClick () {
      let newConfig = { ...this.config }
      newConfig.number[0] += 1
      this.config = newConfig
    },
    fetchData () {
      this.countPAndN().then(() => {
        this.getUseCount()
      })
    },
    countPAndN () {
      return commentApi.countPAndN().then(res => {
        console.log('countPAndN()', res)
        this.config2.data = []
        this.config2.data.push({
          name: '正面评论',
          value: res.data.pCount,
        })
        this.config2.data.push({
          name: '负面评论',
          value: res.data.nCount,
        })
        this.config2 = { ...this.config2 }
      })
    },
    getUseCount () {
      return infoApi.info().then(res => {
        console.log('info()', res)
        this.config.number[0] = res.data.analyseServer.use_count
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
