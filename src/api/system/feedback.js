import request from '@/utils/request'

// 查询反馈管理列表
export function listFeedback(query) {
  return request({
    url: '/system/feedback/list',
    method: 'get',
    params: query
  })
}

// 查询反馈管理详细
export function getFeedback(id) {
  return request({
    url: '/system/feedback/' + id,
    method: 'get'
  })
}

// 新增反馈管理
export function addFeedback(data) {
  return request({
    url: '/system/feedback',
    method: 'post',
    data: data
  })
}

// 修改反馈管理
export function updateFeedback(data) {
  return request({
    url: '/system/feedback',
    method: 'put',
    data: data
  })
}

// 删除反馈管理
export function delFeedback(id) {
  return request({
    url: '/system/feedback/' + id,
    method: 'delete'
  })
}
