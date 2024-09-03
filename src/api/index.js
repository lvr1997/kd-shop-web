import request from './request';

// 用户登陆的接口  post请求使用data请求体 默认封装的get 如果是get请求不需要写methiod
const login = (data) => request({ method: "post", url: '/login', data: data });
// 获取用户列表的接口 ,需要有默认参数. pagenum: 1,pagesize: 10,,所以要接收,
const getUserList = (params) => request({ url: '/users', params });

// put请求修改用户id users/:uId/state/:type
const getEdit = (data) => request({
    method: "put",
    data,
    url: "users/" + data.uid + "/state/" + data.type,
})
const order = () => request({ url: "/home/floordata" })

export const api = {
    login,
    getUserList,
    getEdit,
    order
}