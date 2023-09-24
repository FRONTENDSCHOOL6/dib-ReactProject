import { useState } from 'react';
import FormInput from '../common/FormInput';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function NicknameInput({ nickname, handleNicknameOnChange }) {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const regex = /^[ㄱ-힣]{1,8}$/;
    if (!regex.test(nickname)) {
      setErrorMessage('한글 8자 이하로 입력해주세요.');
    } else {
      setErrorMessage('');
    }
  }, [nickname]);

  return (
    <div className="flex flex-col gap-2 text-left text-lg w-[500px] mb-[30px]">
      <FormInput
        type="text"
        label="닉네임등록"
        htmlFor="nickName"
        name="nickName"
        id="nickName"
        placeholder="닉네임을 입력해주세요."
        value={nickname}
        onChange={handleNicknameOnChange}
      />
      {errorMessage && (
        <span className="text-dibRed text-base">{errorMessage}</span>
      )}
    </div>
  );
}

export default NicknameInput;

NicknameInput.propTypes = {
  nickname: PropTypes.string.isRequired,
  handleNicknameOnChange: PropTypes.func.isRequired,
};
