import shineHttp from '@/utils/shineHttp'
import HttpConfig from '@/bean/HttpConfig'

const getRoleList = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/role/list',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

const saveRole = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/role/persist',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

const delRole = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/role/clear',
    method: 'delete',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

const getRoleMenuAuth = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/role/checkedMenuByRid',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

const saveRoleMenuAuth = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/role/linkRoleMenu',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

const getRoleResAuth = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/role/checkedResByRid',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

const saveRoleResAuth = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/role/linkRoleRes',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

export default {
  getRoleList,
  saveRole,
  delRole,
  getRoleMenuAuth,
  saveRoleMenuAuth,
  getRoleResAuth,
  saveRoleResAuth
}
