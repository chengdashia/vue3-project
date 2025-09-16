import httpInstance from '@/utils/http'

export const getBannerApi = () => {
    return httpInstance({
        url: 'home/banner',
        method: 'get'
    })
}