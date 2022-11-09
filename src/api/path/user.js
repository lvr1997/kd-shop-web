import { Get } from "../server";

//获取用户信息
export function getUserInfo(id) {
  return Get("/user/info", { id });
}

//获取验证码
export function getCaptcha() {
  return Get("/user/captcha?time="+new Date().getTime())
}

//登录
export function login(data) {
  return Get("/user/login", data)
}

export const userApi = {
  getUserInfo,
  getCaptcha,
  login
};