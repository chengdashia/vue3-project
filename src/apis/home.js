import httpInstance from '@/utils/http'

export const getBannerApi = (params = {}) => {
   // 默认为1 商品为2
   const {distributionSite = '1'} = params
    return httpInstance({
        url: 'home/banner',
        method: 'get',
        params:{
          distributionSite
        }
    })
}

export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new',
    method:'get'
  })
}

export const getHotAPI = () => {
  return  httpInstance({
    url:'home/hot', 
    method:'get'
  })
}

export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}