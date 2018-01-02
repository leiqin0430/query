/**
 * Created by leiqin on 2017/9/25.
 */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {loginUser} from './data/user'
import {dicts} from './data/dict'

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)
    // 登录
    mock.onPost('/log/in').reply(cfg => {
      let {username, password} = JSON.parse(cfg.data)
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let hasUser = loginUser.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u))
              user.password = undefined
              return true
            }
          })
          if (hasUser) {
            resolve([200, {resultCode: '000000', resultInfo: '登录成功', user}])
          } else {
            resolve([200, {resultCode: '999999', resultInfo: '账号或密码错误'}])
          }
        }, 500)
      })
    })
    // 代码字典列表
    mock.onGet('dict/list').reply(cfg => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            dicts: dicts
          }])
        }, 500)
      })
    })
  }
}