import request from '@/utils/request'

// 查询书籍选择管理列表
export function listSelection(query) {
  return request({
    url: '/system/selection/list',
    method: 'get',
    params: query
  })
}

// 查询书籍选择管理详细
export function getSelection(id) {
  return request({
    url: '/system/selection/' + id,
    method: 'get'
  })
}

// 新增书籍选择管理
export function addSelection(data) {
  return request({
    url: '/system/selection',
    method: 'post',
    data: data
  })
}

// 修改书籍选择管理
export function updateSelection(data) {
  return request({
    url: '/system/selection',
    method: 'put',
    data: data
  })
}

// 删除书籍选择管理
export function delSelection(id) {
  return request({
    url: '/system/selection/' + id,
    method: 'delete'
  })
}
