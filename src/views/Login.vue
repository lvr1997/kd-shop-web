<template>
  <Breadcrumbs title="Login" :nav="['Home', 'Login']" />
  <section class="shop login section">
    <div class="container">
      <a-row>
        <!--  登录板块  开始  -->
        <a-col :lg="12" :span="24">
          <div class="login-form">
            <h2>Login</h2>
            <p>Please register in order to checkout more quickly</p>

            <a-form
              layout="vertical"
              :model="formState"
              name="basic"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 24 }"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
            >
              <a-form-item
                label="手机号"
                name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]"
              >
                <a-input v-model:value="formState.username" size="large" />
              </a-form-item>

              <a-form-item
                label="密码"
                name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]"
              >
                <a-input-password v-model:value="formState.password" size="large" />
              </a-form-item>

              <a-form-item
                label="验证码"
                name="verifyCode"
                :wrapper-col="{ offset: 0, span: 24 }"
                :rules="[{ required: true, message: 'Please input your verify code!' }]"
              >
                <a-input
                  class="verify-input"
                  v-model:value="formState.verifyCode"
                  size="large"
                  width="200"
                />
                <div
                  class="verify-code"
                  v-html="captcha"
                  @click="getVerifyCodeImg"
                ></div>
              </a-form-item>

              <!-- <a-form-item name="remember" :wrapper-col="{ offset: 0, span: 24 }">
                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                <a style="float: right" href="#">Forget your password?</a>
              </a-form-item> -->

              <a-form-item :wrapper-col="{ offset: 0, span: 16 }">
                <a-button type="primary" html-type="submit">Login</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <!--  登录板块  结束  -->

        <!--  注册板块  开始  -->
        <a-col :lg="12" :span="24">
          <div class="register-form">
            <h2>Register</h2>
            <div class="register-card">
              <p class="register-desc">
                <label class="form-label" for="reg_email"
                  >Email address <span class="required">*</span></label
                >
                <input class="form-input" type="email" name="email" />
              </p>
              <p class="register-text">
                A link to set a new password will be sent to your email address.
              </p>
              <div class="register-text2">
                <p>
                  Your personal data will be used to support your experience throughout
                  this website, to manage access to your account, and for other purposes
                  described in our privacy policy.
                </p>
              </div>
              <p class="register-area">
                <button
                  type="submit"
                  class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                  name="register"
                  value="Register"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </a-col>
        <!--  注册板块  结束  -->
      </a-row>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import {useRouter} from 'vue-router'
import { useLoginInfoStore } from "../stores/loginInfo"
import { api } from "../api/index";

const router = useRouter()
const store = useLoginInfoStore()

const captcha = ref("");

const formState = reactive({
  username: "",
  password: "",
  verifyCode: "",
});
const onFinish = (values) => {
  console.log("Success:", values);
  store.loginAction(values)
  router.push('/')
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const getVerifyCodeImg = async () => {
  const [e,r] = await api.getCaptcha()
  if(!e && r) captcha.value = r
};
</script>

<style lang="less" scoped>
.shop.login {
  padding: 100px 0;
}
.shop.login .login-form h2 {
  position: relative;
  font-size: 35px;
  color: #333;
  font-weight: 400;
  line-height: 27px;
  text-transform: uppercase;
  margin-bottom: 12px;
  padding-bottom: 20px;
  text-align: center;
}
.shop.login .login-form h2:before {
  position: absolute;
  content: "";
  left: 50%;
  bottom: 0;
  height: 2px;
  width: 50px;
  background: #32b87d;
  margin-left: -25px;
}
.shop.login .login-form p {
  font-size: 14px;
  color: #333;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
}
.shop.login .form {
  margin-top: 30px;
}
.shop.login .form .form-group {
  margin-bottom: 22px;
}
.shop.login .form .form-group input {
  width: 100%;
  height: 45px;
  line-height: 50px;
  padding: 0 20px;
  border-radius: 3px;
  border-radius: 0px;
  color: #333 !important;
  border: none;
  background: #f6f7fb;
}
.shop.login .form .form-group label {
  color: #333;
  position: relative;
}
.shop.login .form .form-group label span {
  color: #ff2c18;
  display: inline-block;
  position: absolute;
  right: -12px;
  top: 4px;
  font-size: 16px;
}
.shop.login .form .form-group input:hover {
  border-color: #1308a3;
  color: #1308a3;
}
.shop.login .form .form-group.login-btn {
  margin: 0;
}
.shop.login .form button {
  border: none;
}
.shop.login .form .btn {
  display: inline-block;
  margin-right: 10px;
  height: 46px;
  color: #fff;
  line-height: 20px;
}
.shop.login .form .btn:hover {
  background: #f7941d;
  color: #fff;
}
.shop.login .login-form .checkbox {
  text-align: left;
  margin: 0;
  margin-top: 20px;
  display: inline-block;
}
.shop.login .login-form .checkbox label {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  position: relative;
  padding-left: 20px;
}
.shop.login .login-form .checkbox label:hover {
  cursor: pointer;
}
.shop.login .login-form .checkbox label input {
  display: none;
}
.shop.login .login-form .checkbox label::before {
  position: absolute;
  content: "";
  left: 0;
  top: 6px;
  width: 12px;
  height: 12px;
  border: 1px solid #555555;
  border-radius: 0px;
}
.shop.login .login-form .checkbox label::after {
  position: absolute;
  content: "\f00c";
  font-family: "Fontawesome";
  width: 12px;
  height: 12px;
  line-height: 23px;
  left: 2px;
  top: 0px;
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  display: block;
  font-size: 9px;
}
.shop.login .login-form .checkbox label.checked::after {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
.shop.login .login-form .lost-pass {
  display: inline-block;
  margin-left: 25px;
  color: #333;
  font-size: 14px;
  font-weight: 400;
}
.shop.login .login-form .lost-pass:hover {
  color: #f7941d;
}

.verify-input {
  width: 70%;
  height: 50px;
  padding: 0 12px;
  float: left;
}
.verify-code {
  width: 150px;
  height: 50px;
  float: right;
}

// 注册 -------------------------------------------------------------

.register-form {
  h2 {
    margin-bottom: 15px;
  }

  .register-card {
    margin: 2em 0;
    text-align: left;
    border-radius: 5px;
    background: #fff;
    border: none !important;
    box-shadow: 0px 0px 15px #3333330f;
    border: 1px solid #cccccc82 !important;
    padding: 30px !important;
    .register-desc {
      .form-label {
        color: #333 !important;
        position: relative;
        opacity: 1 !important;
        margin-bottom: 5px !important;
        margin: 0 !important;
        font-weight: 500;
        display: block !important;
        width: 100%;
        line-height: 2;
        .required {
          color: red;
          font-weight: 700;
          border: 0 !important;
          text-decoration: none;
          // visibility: hidden;
        }
      }
      .form-input {
        width: 100% !important;
        display: block !important;
        font-weight: 400;
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        line-height: normal;
        padding: 13px;
        margin-bottom: 5px;
      }
    }
    .register-text {
      color: #757575;
      line-height: 24px;
    }

    .register-text2 {
      margin-top: 10px;
      margin-bottom: 20px;
      p {
        color: #757575;
        line-height: 24px;
      }
    }

    .register-area {
      padding: 3px;
      margin: 0 0 6px;
      button {
        height: 50px;
        padding: 0 30px !important;
        font-size: 14px;
        background: #333;
        color: #fff;
        font-weight: 500;
        transition: all 0.3s ease;
        line-height: 50px;
        margin: 0;

        cursor: pointer;
        position: relative;
        text-decoration: none;
        overflow: visible;

        border-radius: 3px;
        left: auto;

        border: 0;
        display: inline-block;

        box-shadow: none;
        text-shadow: none;
      }
    }
  }
}
</style>
