/**
 * 校验规则
 */
const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
const regPhone = /^1[3456789]\d{9}$/;
const reg_username = /^[a-zA-Z][a-zA-Z0-9]{4,15}$/;
const regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
const regCode = /^[a-z0-9]{6}$/;


export function validate_email(rule: any, value: any, callback: any) {
  let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return regEmail.test(value);
}

// 校验密码
export function validate_password(rule: any, value: any, callback: any) {
  let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return regPassword.test(value);
}

// 校验验证码
export function validate_code(rule: any, value: any, callback: any) {
  let regCode = /^[a-z0-9]{6}$/;
  return regCode.test(value);
}
