let baseURL = "";
if (process.env.NODE_ENV === "development") {
    // 开发环境  因为我这里写了配置跨域的重定路径所以是api 如下图
    baseURL = "/api";

} else if (process.env.NODE_ENV === "production") {
    // 正式环境 真正的上线网址 不是跨域别名路径,在network不显示
    baseURL = "";
} else {
    // 测试环境
    baseURL = "";
}
export default baseURL;