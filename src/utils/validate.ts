// 校验邮箱
export function validate_email(value: string) {
  let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return regEmail.test(value);
}

// 校验密码
export function validate_password(value: string) {
  let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return regPassword.test(value);
}

// 校验验证码
export function validate_code(value: string) {
  let regCode = /^[a-z0-9]{6}$/;
  return regCode.test(value);
}
