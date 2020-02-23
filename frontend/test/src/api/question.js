import { request } from '@/utils/request'
// 添加问题
export function addQuestion (params) {
  return request.post({
    url: '/api/questions', params
  })
}

// 修改问题
export function editQuestion (params) {
  return request.put({
    url: `/api/questions/${params['_id']}`, params
  })
}

// 获取问题列表
export function getQuestion (params) {
  return request.get({
    url: '/api/questions', params
  })
}

// 删除问题
export function deleteQuestion (id) {
  return request.delete({
    url: `/api/questions/${id}`
  })
}