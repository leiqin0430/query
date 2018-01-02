/**
 * Created by leiqin on 2017/12/28.
 */
import Mock from 'mockjs'

const dicts = []

for (let i = 0; i < 80; i++) {
  dicts.push(
    Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      addr: Mock.mock('@count(true)'),
      'age|18-60': 1,
      birth: Mock.Random.date(),
      gender: Mock.Random.integer(0, 1)
    })
  )
}

export { dicts }
