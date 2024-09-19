import axios from "axios";
// 弹框
import { useToast } from '@/components/ui/toast/use-toast';
// 导入配置的环境变量url
import baseURL from "./baseUrl";
// 导入路由，没有this，使用路由实例跳转
import router from "../router";

const { toast } = useToast()

// 创建axios实例
const http = axios.create({
  baseURL, //配置了跨域,起了别名api,在baseBUL用了别名,这里使用baseURL,配置在下面vue.config.js
  timeout: 6000,
  withDirectives: true, // 是否携带cookies
});
// 请求拦截
http.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理 config是axios的配置对象
    // console.log(config);
    //  携带token
    config.headers["Authorization"] =
      "Bearer " + JSON.parse(localStorage.getItem("remember_token")) || null;
    // 配置完成将config返回
    return config;
  },
  (err) => {
    // 当请求失败时做一些处理 抛出错误
    throw new Error(err);
  }
);
 
// 响应拦截
http.interceptors.response.use(
  (res) => {
    // 在返回响应之前做一些处理 res是axios的配置对象
    // console.log(res);
 
    // 根据后台状态码统一封装提示信息 就不需要在页面接口在单独写了
    // 这里根据实际接口的嵌套情况和状态码来写 这里只是我的接口嵌套情况
    let { status, msg } = res.data.meta;
    //key = value  status等于200就执行200下的代码 执行完break退出循环
    switch (status) {
      case 200:
        toast({
          title: msg,
          type: "success",
        })
        break;
 
      case 401:
        toast({
          title: '未授权',
          type: "error",
        })
        // this是undefined所以引入路由;
        router.push("/login"); //未授权跳转到login
        break;
    }
    // 这里根据接口返回的数据嵌套结构来返回 比如我的接口返回的是{data:{message:{}}}
    return res.data.message;
  },
  (err) => {
    // 当响应失败时做一些处理 抛出错误
    throw new Error(err);
  }
);
// 导出 http实例 方便调用
export default http;