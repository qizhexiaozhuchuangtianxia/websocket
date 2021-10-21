import axios from 'axios';

// 请求通用方法封装


// 添加请求拦截器
axios.interceptors.request.use((config) =>
    // 发送请求之前...
    config,
    (error) =>
        // 请求错误...
        Promise.reject(error));

// 添加响应拦截器
axios.interceptors.response.use((response) =>
    // 响应数据...
    response,
    (error) =>
        // 响应错误...
        Promise.reject(error));


/**
 * @desc 公共请求方法
 * @param {object} api 描述对象
 * @param {object} params 参数
 */
function request(api, params, config = {}) {
    const configs = {
        ...api,
        ...config
    };
    if (api.method !== 'PUT' && api.method !== 'POST' && api.method !== 'PATCH') {
        configs.params = params;
    } else {
        configs.data = params;
    }
    return axios.request(configs);
}

export default request;
