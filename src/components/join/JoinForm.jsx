import { useState } from "react"
import Button from "../common/Button"
import FormInput from "../common/FormInput"
import InputValidation from "../common/InputValidation"
import debounce from "@/utils/debounce";
import { emailReg, nameReg, pwReg } from "@/utils/regular";

function JoinForm() {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  let nameError = '';
  let emailError = '';
  let passwordError = '';
  let confirmPwdError = '';
  const emailCheck = emailReg(formState.email);
  const pwdCheck = pwReg(formState.password);
  const nameCheck = nameReg(formState.name);

  if(!formState.name){
    nameError = '';
  }else if(!nameCheck){
    nameError = '한글을 사용해 입력해주세요. (특수기호, 공백 사용 불가)';
  }

  if(!formState.email){
    emailError = '';
  }else if(!emailCheck){
    emailError = '올바른 이메일 형식을 입력해주세요';
  }

  if(!formState.password){
    passwordError = '';
  }else if(!pwdCheck){
    passwordError = '8~20자의 영문, 숫자, 특수문자를 포함해주세요.';
  }

  if(!formState.passwordConfirm){
    confirmPwdError = '';
  }else if(formState.password !== formState.passwordConfirm){
    confirmPwdError = '비밀번호가 일치하지 않습니다.';
  }


  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDebounceInput = debounce(handleInput, 500);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <form
        action=""
        method="post"
        className="flex flex-col gap-5 w-[500px] m-auto mt-10"
      >
        <div className="flex flex-col gap-1 text-left text-base">
          <FormInput type="text" name="name" id="name" placeholder="본인 이름을 입력해주세요" label="실명"
          defaultValue={formState.name}
          onChange={handleDebounceInput}
          />
          <InputValidation message={nameError}/>
        </div>

        <div className="flex flex-col gap-1 text-left text-base">
          <FormInput type="email" name="email" id="email" placeholder="예) email@address.com" label="이메일"
            defaultValue={formState.email}
            onChange={handleDebounceInput}
          />
          <InputValidation message={emailError}/>
        </div>

        <div className="flex flex-col gap-1 text-left text-base relative">
          <FormInput
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="비밀번호(영문/숫자/특수문자 조합 8~20자)"
            label="비밀번호"
            defaultValue={formState.password}
            onChange={handleDebounceInput}
          />
          <img 
            src={isPasswordVisible ? "/view.png" : "/hide.png"} 
            alt={isPasswordVisible ? "숨김" : "보임"}
            id="eyeicon" 
            className="w-[25px absolute right-5 top-11 cursor-pointer"
            onClick={handleTogglePasswordVisibility}
          />
          <InputValidation message={passwordError}/>
        </div>

        <div className="flex flex-col gap-1 text-left text-base mb-10">
          <FormInput 
            type="password" 
            name="passwordConfirm" 
            id="passwordConfirm" 
            placeholder="비밀번호를 다시 입력해주세요" 
            label="비밀번호 확인"
            defaultValue={formState.passwordConfirm}
            onChange={handleDebounceInput}
          />
          <InputValidation message={confirmPwdError}/>
        </div>

        <Button 
          type="submit" 
          title="회원가입" 
        />
      </form>
  )
}

export default JoinForm