import FormInput from '../common/FormInput';

function NicknameInput() {
  return (
    <div className="flex flex-col gap-2 text-left text-lg w-[500px] mb-[30px]">
      <FormInput
        type="text"
        label="닉네임등록"
        htmlFor="nickName"
        name="nickName"
        id="nickName"
        placeholder="닉네임을 입력해주세요."
      />
      <span className="text-dibRed text-base">
        닉네임은 몇자 이하로 입력해주세요.
      </span>
    </div>
  );
}

export default NicknameInput;
