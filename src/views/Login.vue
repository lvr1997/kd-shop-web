<template>
  <Breadcrumbs />
  <section class="shop login section">
    <div class="container">
      <a-row>
        <a-col :lg="12" :span="24">
          <div class="login-form">
            <h2>Login</h2>
            <p>Please register in order to checkout more quickly</p>

            <a-form
              :model="formState"
              name="basic"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
            >
              <a-form-item
                label="Username"
                name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]"
              >
                <a-input v-model:value="formState.username" />
              </a-form-item>

              <a-form-item
                label="Password"
                name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]"
              >
                <a-input-password v-model:value="formState.password" />
              </a-form-item>

              <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: "",
      password: "",
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
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
  background: #32B87D;
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
</style>
