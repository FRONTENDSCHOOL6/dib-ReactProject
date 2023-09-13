import FormInput from '../common/FormInput';

function EmailInput() {
  return (
    <div className="flex flex-col gap-2 text-left text-lg">
      <FormInput
        label="이메일"
        htmlFor="userEmail"
        type="email"
        name="email"
        id="userEmail"
        placeholder="이메일을 입력해주세요"
      />
      <span className="text-[#FF0000]">
        아이디는 이메일 형식으로 입력해 주세요.
      </span>
    </div>
  );
}

export default EmailInput;
