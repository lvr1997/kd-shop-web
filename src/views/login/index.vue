<template>
    <!-- 登录 -->
<section class="bg-white dark:bg-gray-900">
    <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div id="login">
    <div class="form-wrap">
      <ul class="menu-tab">
        <li
          @click="data.current_menu = item.type"
          :class="{ current: data.current_menu === item.type }"
          v-for="item in data.tab_menu"
          :key="item.type"
        >
          {{ item.label }}
        </li>
      </ul>
      <el-form ref="account_form" :model="data.form" :rules="data.form_rules">
        <el-form-item prop="username">
          <label class="form-label">用户名</label>
          <el-input v-model="data.form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label class="form-label">密码</label>
          <el-input type="password" v-model="data.form.password"></el-input>
        </el-form-item>
        <el-form-item prop="passwords" v-if="data.current_menu === 'register'">
          <label class="form-label">确认密码</label>
          <el-input type="password" v-model="data.form.passwords"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <label class="form-label">验证码</label>
          <el-row :gutter="10">
            <el-col :span="14">
              <el-input v-model="data.form.code"></el-input>
            </el-col>
            <el-col :span="10">
              <el-button
                type="success"
                class="el-button-block"
                :loading="data.code_button_loading"
                :disabled="data.code_button_disabled"
                @click="handlerGetCode"
                >{{ data.code_button_text }}</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            @click="submitForm"
            :disabled="data.submit_button_disabled"
            :loading="data.submit_button_loading"
            class="el-button-block"
          >
            {{ data.current_menu === "login" ? "登录" : "注册" }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

    </div>
</section>
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
#login {
  height: 100vh;
  background-color: #344a5f;
}
.form-wrap {
  width: 320px;
  padding-top: 100px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  
}
.menu-tab li {
    display: inline-block;
    padding: 10px 24px;
    margin: 0 10px;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    
  }

.menu-tab li.current {
    background-color: rgba(0, 0, 0, 0.1);
}
.form-label {
  display: block; 
  color: #fff; 
  font-size: 14px;
}
</style>
