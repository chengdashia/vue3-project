import httpInstance from '@/utils/http'

export const getBannerApi = () => {
    return httpInstance({
        url: 'home/banner',
        method: 'get'
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