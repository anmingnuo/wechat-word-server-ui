import request from '@/utils/request'

// 查询生词本管理列表
export function listList(query) {
  return request({
    url: '/system/list/list',
    method: 'get',
    params: query
  })
}

// 查询生词本管理详细
export function getList(id) {
  return request({
    url: '/system/list/' + id,
    method: 'get'
  })
}

// 新增生词本管理
export function addList(data) {
  return request({
    url: '/system/list',
    method: 'post',
    data: data
  })
}

// 修改生词本管理
export function updateList(data) {
  return request({
    url: '/system/list',
    method: 'put',
    data: data
  })
}

// 删除生词本管理
export function delList(id) {
  return request({
    url: '/system/list/' + id,
    method: 'delete'
  })
}
