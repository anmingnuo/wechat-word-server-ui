import request from '@/utils/request'

// 查询签到管理列表
export function listIn(query) {
  return request({
    url: '/system/in/list',
    method: 'get',
    params: query
  })
}

// 查询签到管理详细
export function getIn(id) {
  return request({
    url: '/system/in/' + id,
    method: 'get'
  })
}

// 新增签到管理
export function addIn(data) {
  return request({
    url: '/system/in',
    method: 'post',
    data: data
  })
}

// 修改签到管理
export function updateIn(data) {
  return request({
    url: '/system/in',
    method: 'put',
    data: data
  })
}

// 删除签到管理
export function delIn(id) {
  return request({
    url: '/system/in/' + id,
    method: 'delete'
  })
}
