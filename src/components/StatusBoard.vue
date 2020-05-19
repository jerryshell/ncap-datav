<template>
  <div>
    <dv-border-box-8 style="width: 100%; height: 600px">
      <dv-border-box-10>
        <h1 style="text-align: center; padding-top: 10px">今日分析次数</h1>
        <dv-digital-flop :config="config" style="width:100px; height:50px; margin: 0 auto;"/>
        <!--        <button @click="handleClick()">今日分析次数+1</button>-->
        <h1 style="text-align: center;padding-top: 10px">今日评论情况</h1>
        <dv-active-ring-chart :config="config2" style="width:300px; height:300px; margin: 0 auto;"/>
      </dv-border-box-10>
    </dv-border-box-8>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: {
        number: [100],
        content: '{nt} 次',
      },
      config2: {
        showOriginValue: true,
        color: ['#D94551', '#8EE2F0'],
        radius: '60%',
        data: [
          {
            name: '正面评论',
            value: 555,
          },
          {
            name: '负面评论',
            value: 444,
          },
        ],
        digitalFlopStyle: {
          fontSize: 20,
        },
      },
    }
  },
  methods: {
    handleClick () {
      let newConfig = { ...this.config }
      newConfig.number[0] += 1
      this.config = newConfig
    },
  },
}
</script>

<style scoped>
* {
  color: #C4CAD9;
}
</style>
