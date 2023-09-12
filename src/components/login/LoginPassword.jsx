import FormInput from '../FormInput';

function LoginPassword() {
  return (
    <div className="flex flex-col gap-2 text-left text-lg">
      <FormInput
        label="비밀번호"
        htmlFor="userPassword"
        type="password"
        name="password"
        id="userPassword"
        placeholder="비밀번호를 입력해주세요"
      />
      <span className="text-[#FF0000]">
        비밀번호는 특수문자, 숫자 포함 8자리 이상 입력해 주세요.
      </span>
    </div>
  );
}

export default LoginPassword;
