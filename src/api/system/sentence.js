import request from '@/utils/request'

// 查询例句管理列表
export function listSentence(query) {
  return request({
    url: '/system/sentence/list',
    method: 'get',
    params: query
  })
}

// 查询例句管理详细
export function getSentence(id) {
  return request({
    url: '/system/sentence/' + id,
    method: 'get'
  })
}

// 新增例句管理
export function addSentence(data) {
  return request({
    url: '/system/sentence',
    method: 'post',
    data: data
  })
}

// 修改例句管理
export function updateSentence(data) {
  return request({
    url: '/system/sentence',
    method: 'put',
    data: data
  })
}

// 删除例句管理
export function delSentence(id) {
  return request({
    url: '/system/sentence/' + id,
    method: 'delete'
  })
}
