import axios from 'axios'
import global from "../config/globals";

const instance = axios.create({
    //baseURL: proxyurl+apiUrl
    baseURL: global.BASE_URL
})

instance.interceptors.request.use(
    async config => {
        const token = localStorage.getItem('token')

        const headers = {
            Authorization: `bearer ${token}`,
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': "Content-Type",
        }

        if (token) {
            config.headers = headers
        } else {
            console.log('no token')
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

export default instance