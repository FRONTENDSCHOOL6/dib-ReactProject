//한글만 사용가능한 이름 정규식
export function nameReg(text) {
  const reg = /^[가-힣]*$/;
  return reg.test(String(text));
}

//특수문자포함 최소 8자이상~20자이하 비밀번호정규식
export function pwReg(text) {
  const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-]).{8,20}$/;
  return reg.test(String(text).toLowerCase());
}

// @ 기호 포함, .포함 이후 2글자 이상 이메일정규식
export function emailReg(text) {
  const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return reg.test(String(text).toLowerCase());
}
