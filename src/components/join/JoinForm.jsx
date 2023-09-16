import Button from "../common/Button"
import FormInput from "../common/FormInput"
import InputValidation from "../common/InputValidation"

function JoinForm() {
  return (
    <form
        action=""
        method="post"
        className="flex flex-col gap-5 w-[500px] m-auto mt-10"
      >
        <div className="flex flex-col gap-1 text-left text-base">
          <FormInput type="text" name="name" id="name" placeholder="본인 이름을 입력해주세요" label="실명" />
          <InputValidation message="한글을 사용해 입력해주세요. (특수기호, 공백 사용 불가)"/>
        </div>

        <div className="flex flex-col gap-1 text-left text-base relative">
          <FormInput
            type="email"
            name="email"
            id="email"
            placeholder="이메일아이디"
            label="이메일"
            width="w-[283px]"
          />
          <div className="border rounded-full border-dibBlack leading-[54px] w-[207px] pl-7 absolute right-0 top-[28px]">
            <select
              name="email"
              required
              aria-label="이메일 선택"
              className="pr-7"
            >
              <option value="">이메일 선택</option>
              <option value="네이버">@naver.com</option>
              <option value="다음">@daum.net</option>
              <option value="구글">@google.com</option>
            </select>
          </div>
          <InputValidation message="한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"/>
        </div>

        <div className="flex flex-col gap-1 text-left text-base">
          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호(영문/숫자/특수문자 조합 8~20자)"
            label="비밀번호"
          />
          <img src="" alt="" />
          <InputValidation message="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."/>
        </div>

        <div className="flex flex-col gap-1 text-left text-base mb-10">
          <FormInput type="passwordConfirm" name="passwordConfirm" id="passwordConfirm" placeholder="비밀번호를 다시 입력해주세요" label="비밀번호 확인"/>
          <InputValidation message="비밀번호가 일치하지 않습니다."/>
        </div>

        <Button type="submit" title="회원가입" />
      </form>
  )
}

export default JoinForm