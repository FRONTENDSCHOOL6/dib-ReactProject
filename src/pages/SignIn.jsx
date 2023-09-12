import Button from "@/components/Button"
import FormInput from "@/components/FormInput"
import SignPageTitle from "@/components/SignPageTitle"

function SignIn() {
  return (
    <>
      <SignPageTitle title="회원가입" subTitle="회원가입에 필요한 정보를 입력해주세요"/>
      <form action="" method="post" className="flex flex-col gap-[30px] w-[600px] m-auto">
        <div className="flex flex-col gap-2 text-left text-lg">
          <FormInput type="text" name="name" id="name" placeholder="본인 이름을 입력해주세요" label="실명" />
          <span className="text-dibHeart">한글을 사용해 입력해주세요. (특수기호, 공백 사용 불가)</span>
        </div>
        
        <div className="flex flex-col gap-2 text-left text-lg relative">
          <FormInput type="email" name="email" id="email" placeholder="이메일아이디" label="이메일" width="w-[383px]"/>
          <div className="border rounded-full border-dibBlack leading-[60px] w-[207px] pl-7 absolute right-0 top-9">
            <select name="email" required aria-label="이메일 선택" className="pr-7">
              <option value="">이메일 선택</option>
              <option value="네이버">@naver.com</option>
              <option value="다음">@daum.net</option>
              <option value="구글">@google.com</option>
            </select>
          </div>
          <span className="text-dibHeart">한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)</span>
        </div>

        <div className="flex flex-col gap-2 text-left text-lg">
          <FormInput type="password" name="password" id="password" placeholder="비밀번호(영문/숫자/특수문자 조합 8~20자)" label="비밀번호"/>
          <img src="" alt="" />
          <span className="text-dibHeart">8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>
        </div>

        <div className="flex flex-col gap-2 text-left text-lg">
          <FormInput type="passwordConfirm" name="passwordConfirm" id="passwordConfirm" placeholder="비밀번호를 다시 입력해주세요" label="비밀번호 확인"/>
          <span className="text-dibHeart">비밀번호가 일치하지 않습니다.</span>
        </div>

        <Button type="submit" title="회원가입" />
      </form>
    </>
  )
}

export default SignIn