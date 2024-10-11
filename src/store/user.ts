import { defineStore } from "pinia";
import { Login } from "~/api/user";
import { RequestData } from "~/types/user_type";

export const useUserStore = defineStore("user", {
    state: () => ({
        username: "admin",
        role: 'ADMIN',
        // role: 'STUDENT',
    }),
    getters: {
       
    },
    actions: {
        //执行登录请求
        LoginAction(requestData: RequestData) {
            return new Promise((resolve) => {
                Login(requestData).then((res) => {
                    resolve(res)
                }).catch(err => {
                    resolve(err)
                })
            });
        },
        testlogin(requestData: RequestData) {
            let res: any;
            if(requestData.username === 'admin' && requestData.password === 'admin') {
                this.username = requestData.username
                this.role = 'ADMIN'
                res =  { code: 200, msg: '登录成功', role: 'ADMIN' }
            } 
            if(requestData.username === 'student' && requestData.password === '123456') {
                this.username = requestData.username
                this.role = 'STUDENT'
                res =  { code: 200, msg: '登录成功', role: 'STUDENT' }
            }
            return new Promise((resolve) => {
                resolve(res)
            })
           
        }
    },
});