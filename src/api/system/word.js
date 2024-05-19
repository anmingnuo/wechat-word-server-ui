import request from '@/utils/request'

// 查询单词管理列表
export function listWord(query) {
  return request({
    url: '/system/word/list',
    method: 'get',
    params: query
  })
}

// 查询单词管理详细
export function getWord(id) {
  return request({
    url: '/system/word/' + id,
    method: 'get'
  })
}

// 新增单词管理
export function addWord(data) {
  return request({
    url: '/system/word',
    method: 'post',
    data: data
  })
}

// 修改单词管理
export function updateWord(data) {
  return request({
    url: '/system/word',
    method: 'put',
    data: data
  })
}

// 删除单词管理
export function delWord(id) {
  return request({
    url: '/system/word/' + id,
    method: 'delete'
  })
}
