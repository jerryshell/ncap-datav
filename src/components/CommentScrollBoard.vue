<template>
  <div>
    <dv-border-box-8 style="width: 100%; height: 800px">
      <dv-scroll-board :config="config" style="padding: 10px"/>
    </dv-border-box-8>
  </div>
</template>

<script>
import commentApi from '../api/comment'

export default {
  data () {
    return {
      config: {
        header: ['评论内容', '正面概率', '负面概率'],
        // headerBGC: '',
        oddRowBGC: '',
        evenRowBGC: '',
        rowNum: 15,
        data: [
          ['可怜的孩子 这当妈的真该死', '1.9543003290891647', '98.04570078849792'],
          ['明显渎职！', '43.68571639060974', '56.31428360939026'],
          ['自杀处理', '14.905664324760437', '85.09433269500732'],
          ['没有见到受害者，和直接证明其死亡的证据，肯定是人口失踪', '2.3818086832761765', '97.61818647384644'],
          ['这种新闻看了特别气愤', '9.299368411302567', '90.70063829421997'],
          ['惨啊！', '4.85972948372364', '95.14027237892151'],
          ['“同样是九年义务教育，为何你如此的优秀”', '82.80609250068665', '17.193906009197235'],
          ['啊哈哈😄', '81.40708208084106', '18.592917919158936'],
          ['警察太能干了！', '81.07325434684753', '18.926751613616943'],
          ['可怜的孩子 这当妈的真该死', '1.9543003290891647', '98.04570078849792'],
          ['明显渎职！', '43.68571639060974', '56.31428360939026'],
          ['自杀处理', '14.905664324760437', '85.09433269500732'],
          ['没有见到受害者，和直接证明其死亡的证据，肯定是人口失踪', '2.3818086832761765', '97.61818647384644'],
          ['这种新闻看了特别气愤', '9.299368411302567', '90.70063829421997'],
          ['惨啊！', '4.85972948372364', '95.14027237892151'],
          ['“同样是九年义务教育，为何你如此的优秀”', '82.80609250068665', '17.193906009197235'],
          ['啊哈哈😄', '81.40708208084106', '18.592917919158936'],
          ['警察太能干了！', '81.07325434684753', '18.926751613616943'],
        ],
      },
    }
  },
  mounted () {
    this.fetchData()
    setInterval(this.fetchData, 60 * 1000)
  },
  methods: {
    fetchData () {
      this.listOrderByUpdateDateTimeDESC()
    },
    listOrderByUpdateDateTimeDESC () {
      commentApi.listOrderByUpdateDateTimeDESC().then(res => {
        this.config.data = []
        console.log('listOrderByUpdateDateTimeDESC()', res)
        for (let i = 0; i < res.data.length; i++) {
          let item = res.data[i]
          this.config.data.push([item.content, item.p, item.n])
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
