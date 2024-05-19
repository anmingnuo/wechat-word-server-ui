import request from "@/utils/request";

export function getSelectCharts() {
  return request({
    url: '/system/selection/getSelectCharts',
    method: 'get',
  })
}
export function getPlanCharts() {
  return request({
    url: '/system/plan/getPlanCharts',
    method: 'get',
  })
}
