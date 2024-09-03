<template>
<div class="relative py-3 sm:max-w-xl sm:mx-auto my-20">
  <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
    <div class="max-w-md mx-auto">
      <div class="flex items-center space-x-5 justify-center">
        <img src="../../assets/images/logo.svg" alt="logo_kdshop">
      </div>
      <div class="mt-5">
        <label class="font-semibold text-sm text-gray-600 pb-1 block" for="login">Phone</label>
        <input
          class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          type="text"
          id="login"
          v-model="data.form.phone"
          placeholder="请输入手机号"
        />
        <label
          class="font-semibold text-sm text-gray-600 pb-1 block"
          for="password"
          >Password</label
        >
        <input
          class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          type="password"
          id="password"
          v-model="data.form.password"
          placeholder="请输入密码"
        />
      </div>
      <div class="text-right mb-4">
        <a
          class="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
     
      <div class="mt-5">
        <button
          class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          type="submit"
          @click="submitForm"
        >
          Log in
        </button>
      </div>
      <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        <a
          class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          href="javascript:;"
          >or sign up</a
        >
        <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { useUserStore } from "@/store/user";
import { getCurrentInstance, onBeforeUnmount, reactive, ref } from "vue";
import { useRouter } from "vue-router";
// API
// import { GetCode } from "@/api";

// 获取实例上下文
const { proxy } = getCurrentInstance();
// store
const userStore = useUserStore();
// router
const rotuer = useRouter();

// 用户名校验
const validate_name_rules = (rule, value, callback) => {
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
  if (data.current_menu === "login") {
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
    phone: "", // 用户名
    password: "", // 密码
    passwords: "", // 确认密码
    code: "", // 验证码
  },
  form_rules: {
    phone: [{ validator: validate_name_rules, trigger: "change" }],
    password: [{ validator: validate_password_rules, trigger: "change" }],
    passwords: [{ validator: validate_passwords_rules, trigger: "change" }],
    code: [{ validator: validate_code_rules, trigger: "change" }],
  },
  tab_menu: [
    { type: "login", label: "登录" },
    { type: "register", label: "注册" },
  ],
  current_menu: "login",
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
 
/** 表单提交 */
const account_form = ref(null);
// formName
const submitForm = () => {
  router.push('/')
  // account_form.value.validate((valid) => {
  //   if (valid) {
  //     data.current_menu === "login" ? login() : register();
  //   } else {
  //     alert("表单验证不通过");
  //     return false;
  //   }
  // });
};
/** 注册 */
const register = () => {
  const requestData = {
    username: data.form.username,
    password: sha1(data.form.password),
    code: data.form.code,
    create: 1,
  };
  data.submit_button_loading = true;
  Register(requestData)
    .then((response) => {
      proxy.$message({
        message: response.message,
        type: "success",
      });
      reset();
    })
    .catch(() => {
      data.submit_button_loading = false;
    });
};
/** 登录 */
const login = () => {
  const requestData = {
    username: data.form.username,
    password: data.form.password,
    code: data.form.code,
  };
  data.submit_button_loading = true;
  userStore.loginAction(requestData).then((response) => {
      data.submit_button_loading = false;
      proxy.$message({
        message: response.message,
        type: "success",
      });
      //路由跳转
      rotuer.push({ path: "/console" });
      reset();
    })
    .catch(() => {
      data.submit_button_loading = false;
      console.log("失败");
    });
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
  data.submit_button_loading = false;
};
// 组件销毁之前 - 生命周期
onBeforeUnmount(() => {
  clearInterval(data.code_button_timer); // 清除倒计时
});
</script>

<style scoped>
</style>
