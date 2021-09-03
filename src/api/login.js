import axiosApiInstance from '../util/axiosApiInstance'

export default {
    loginAxios() {
        return axiosApiInstance({

            baseURL : '/member/login'
        })
    }
}