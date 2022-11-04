/**
 * 封装的是请求方法，在项目中大量用到接口，所以将请求方法也封装
 */
 import http from "./http";
 // post请求: 传参数没有明确规定使用params接受参数就是要使用data请求体接受,get请求要使用params接受
 // put 也相当与post请求,如果报参数错误,就是接受参数的请求体错了post/put用data,get请求用params
 function request({ method = 'get', url, data = {}, params = {} }) {
     return http({
         method,
         url,
         data,
         params
     })
 }
  
 export default request;