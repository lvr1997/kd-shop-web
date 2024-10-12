<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="../assets/images/logo.svg" alt="logo_kdshop">
            <h2 class="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{{ data.type }}</h2>
        </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <el-form class="space-y-6 mt-5" ref="account_form" :model="data.form" :rules="data.form_rules" label-position="top" size="large">
                <el-form-item prop="username">
                    <el-input v-model="data.form.username" placeholder="用户名/手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="data.form.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item prop="passwords" v-if="data.type === 'register'">
                    <el-input type="password" v-model="data.form.passwords" placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-row :gutter="5">
                        <el-col :span="12">
                            <el-input v-model="data.form.code" placeholder="验证码"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-button type="success" :loading="data.code_button_loading" :disabled="data.code_button_disabled" @click="handlerGetCode">
                                {{ data.code_button_text }}
                            </el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label-position="left">
                    <template #label>
                        <a class="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer" href="#">
                            Forgot Password?
                        </a>
                    </template>
                </el-form-item>
                <el-form-item>
                    <el-button class="w-full" type="primary" @click="submitForm" :disabled="data.submit_button_disabled" :loading="data.loading">
                        {{ data.type === "login" ? "登录" : "注册" }}
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <template #label>
                        <div class="text-center">
                            <el-button v-show="data.type === 'login'" link class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"  
                                            @click="data.type = 'register'">
                                Not Account? sign up
                            </el-button>
                            <el-button link v-show="data.type === 'register'" class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"  
                                            @click="data.type = 'login'">
                                Have A Account? sign in
                            </el-button>
                        </div>
                    </template>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onBeforeUnmount, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "~/store/user";
import {
validate_code,
validate_email,
validate_password,
} from "~/utils/validate";
// import sha1 from "js-sha1";
// API
import { GetCode } from "~/api/common";
import { Register } from "~/api/user";

const { proxy } = getCurrentInstance()
const userStore = useUserStore();
const router = useRouter();

//用户名校验
const validate_name_rules = (rule: string, value: string, callback) => {
    let regEmail = validate_email(value);
    if (value === "") {
        callback(new Error("请输入邮箱"));
    } else if (!regEmail) {
        callback(new Error("邮箱格式不正确"));
    } else {
        callback();
    }
};

const validate_password_rules = (rule, value, callback) => {
    let regPassword = validate_password(value);
    // 获取“确认密码”
    //   const passwordsValue = data.form.passwords;
    if (value === "") {
        callback(new Error("请输入密码"));
    } else if (!regPassword) {
        callback(new Error("请输入>=6并且<=20位的密码，包含数字、字母"));
    } else {
        callback();
    }
};

// 校验确认密码
const validate_passwords_rules = (rule, value, callback) => {
    // 如果是登录，不需要校验确认密码，默认通过
    if (data.type === "login") {
        callback();
    }
    let regPassword = validate_password(value);
    // 获取“密码”
    const passwordValue = data.form.password;
    if (value === "") {
        callback(new Error("请输入密码"));
    } else if (!regPassword) {
        callback(new Error("请输入>=6并且<=20位的密码，包含数字、字母"));
    } else if (passwordValue && passwordValue !== value) {
        callback(new Error("两次密码不一致"));
    } else {
        callback();
    }
};
// 验证码校验
const validate_code_rules = (rule, value, callback) => {
    let regCode = validate_code(value);
    if (value === "") {
        callback(new Error("请输入验证码"));
    } else if (!regCode) {
        callback(new Error("请输入6位的验证码"));
    } else {
        callback();
    }
};

const data = reactive({
    form: {
        username: "", // 用户名
        password: "", // 密码
        passwords: "", // 确认密码
        code: "", // 验证码
    },
    form_rules: {
        username: [{ validator: validate_name_rules, trigger: "change" }],
        password: [{ validator: validate_password_rules, trigger: "change" }],
        passwords: [{ validator: validate_passwords_rules, trigger: "change" }],
        code: [{ validator: validate_code_rules, trigger: "change" }],
    },
    tab_menu: [
        { type: "login", label: "登录" },
        { type: "register", label: "注册" },
    ],
    type: 'login',
    show_text: "Sign in to your account",
    /**
     * 获取验证码按钮交互
     */
    code_button_disabled: false,
    code_button_loading: false,
    code_button_text: "获取验证码",
    code_button_timer: null,
    // 提交按钮
    submit_button_disabled: true,
    loading: false,
});

// 获取验证码
const handlerGetCode = () => {
    const username = data.form.username;
    const password = data.form.password;
    const passwords = data.form.passwords;
    // 校验用户名
    if (!validate_email(username)) {
        proxy.$message.error({
            message: "用户名不能为空 或 格式不正确",
            type: "error",
        });
        return false;
    }
    // 校验密码
    if (!validate_password(password)) {
        proxy.$message({
            message: "密码不能为空 或 格式不正确",
            type: "error",
        });
        return false;
    }
    // 判断非 登录 时，校验两次密码
    if (data.current_menu === "register" && password !== passwords) {
        proxy.$message({
            message: "两次密码不一致",
            type: "error",
        });
        return false;
    }

    // 获取验证码接口
    const requestData = {
        username: data.form.username,
        module: data.current_menu,
    };
    data.code_button_loading = true;
    data.code_button_text = "发送中";
    GetCode(requestData).then((response) => {
        const resData = response;
        // 激活提交按钮
        data.submit_button_disabled = false;
        // 用户名存在
        if (resData.resCode === 1024) {
            proxy.$message.error(resData.message);
            return false;
        }
        // 成功 Elementui 提示
        proxy.$message({
            message: resData.message,
            type: "success",
        });
        // 执行倒计时
        countdown();
    })
        .catch(() => {
            data.code_button_loading = false;
            data.code_button_text = "获取验证码";
        });
};

/** 倒计时 */
const countdown = (time?: number) => {
    if (time && typeof time !== "number") {
        return false;
    }
    let second = time || 60; // 默认时间
    data.code_button_loading = false; // 取消加载
    data.code_button_disabled = true; // 禁用按钮
    data.code_button_text = `倒计进${second}秒`; // 按钮文本
    // 判断是否存在定时器，存在则先清除
    if (data.code_button_timer) {
        clearInterval(data.code_button_timer);
    }
    // 开启定时器
    data.code_button_timer = setInterval(() => {
        second--;
        data.code_button_text = `倒计进${second}秒`; // 按钮文本
        if (second <= 0) {
            data.code_button_text = `重新获取`; // 按钮文本
            data.code_button_disabled = false; // 启用按钮
            clearInterval(data.code_button_timer); // 清除倒计时
        }
    }, 1000);
};
/** 表单提交 */
const account_form = ref(null);
// formName
const submitForm = () => {
    account_form.value.validate((valid) => {
        if (valid) {
            data.current_menu === "login" ? login() : register();
        } else {
            alert("表单验证不通过");
            return false;
        }
    });
};
/** 注册 */
const register = () => {
    const requestData = {
        username: data.form.username,
        password: data.form.password,
        code: data.form.code,
        create: 1,
    };
    data.loading = true;
    Register(requestData)
        .then((response) => {
            proxy.$message({
                message: response.message,
                type: "success",
            });
            reset();
        })
        .catch(() => {
            data.loading = false;
        });
};
/** 登录 */
const login = () => {
    const requestData = {
        username: data.form.username,
        password: data.form.password,
        code: data.form.code,
    };
    data.loading = true;
    userStore.testlogin(requestData).then(res => {
        if (res.code === 200) {
            if (res.role === 'ADMIN') {
                router.push('/admin');
            }
            if (res.role === 'STUDENT') {
                router.push('/home');
            }
        }
    })
    // userStore.LoginAction(requestData).then((response) => {
    //     data.submit_button_loading = false;
    //     proxy.$message({
    //         message: response.message,
    //         type: "success",
    //     });
    //     //路由跳转
    //     router.push({ path: "/" });
    //     reset();
    // }).catch(() => {
    //     data.submit_button_loading = false;
    //     console.log("失败");
    // });
};

/** 重置 */
const reset = () => {
    // 重置表单
    proxy.$refs.form.resetFields();
    // 切回登录模式
    data.current_menu = "login";
    // 清除定时器
    data.code_button_timer && clearInterval(data.code_button_timer);
    // 获取验证码重置文本
    data.code_button_text = "获取验证码";
    // 获取验证码激活
    data.code_button_disabled = false;
    // 禁用提交按钮
    data.submit_button_disabled = true;
    // 取消提交按钮加载
    data.loading = false;
};
// 组件销毁之前 - 生命周期
onBeforeUnmount(() => {
    clearInterval(data.code_button_timer); // 清除倒计时
});

</script>

<style scoped lang="scss"></style>
