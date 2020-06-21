<template>
  <div class="home">
    <dv-full-screen-container id="container">
      <!--      <dv-loading>Loading...</dv-loading>-->
      <dv-border-box-1>

        <div class="row">
          <div class="offset-2 col-8">
            <dv-decoration-11 id="title">
              新闻评论分析平台数据大屏
            </dv-decoration-11>
          </div>
        </div>

        <div class="row" style="padding-top: 10px">
          <div class="col-4">
            <CommentScrollBoard></CommentScrollBoard>
          </div>

          <div class="col-8">
            <div class="row">
              <div class="col-6">
                <StatusBoard></StatusBoard>
              </div>
              <div class="col-6">
                <TaskStatusBoard></TaskStatusBoard>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <AnalyseStatusBoard></AnalyseStatusBoard>
              </div>
              <div class="col-6">
                <SpiderStatusBoard></SpiderStatusBoard>
              </div>
            </div>
          </div>
        </div>

      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import CommentScrollBoard from '../components/CommentScrollBoard'
import StatusBoard from '../components/StatusBoard'
import TaskStatusBoard from '../components/TaskStatusBoard'
import AnalyseStatusBoard from '../components/AnalyseStatusBoard'
import SpiderStatusBoard from '../components/SpiderStatusBoard'

export default {
  name: 'Home',
  components: { CommentScrollBoard, StatusBoard, TaskStatusBoard, AnalyseStatusBoard, SpiderStatusBoard },
}
</script>
<style scoped>
* {
  color: #C4CAD9;
}

#container {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../assets/bg.jpg") no-repeat 0 20%/ cover;
  /*background: #292C33;*/
}

#title {
  width: 100%;
  height: 60px;
}

.row {
  margin: 0 !important;
}
</style>
