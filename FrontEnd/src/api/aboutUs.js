// 登录接口
import {axios} from '../../src/utils/axios'
export function getList(params) {
  return axios({
    url: '/api',
    method: 'get',
    params
  })
}
