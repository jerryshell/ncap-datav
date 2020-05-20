import axios from 'axios'

// 设置服务端接口
axios.defaults.baseURL = 'http://127.0.0.1:8080'
// 允许 cookies 跨域
axios.defaults.withCredentials = true

export default {
  info () {
    return axios.get(`/info`)
  },
}
