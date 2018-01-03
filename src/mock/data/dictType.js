/**
 * Created by leiqin on 2017/12/28.
 */
import Mock from 'mockjs'

// const dicts = []
//
// for (let i = 0; i < 80; i++) {
//   dicts.push(
//     Mock.mock({
//       id: Mock.Random.guid(),
//       cName: Mock.Random.ctitle(),
//       eName: Mock.Random.title(3, 5),
//       remark: Mock.Random.csentence()
//     })
//   )
// }

export const dicts = Mock.mock({
  'data|20-70': [{
    id: Mock.Random.guid(),
    cName: Mock.Random.ctitle(),
    eName: Mock.Random.title(3, 5),
    remark: Mock.Random.csentence()
  }]
})
