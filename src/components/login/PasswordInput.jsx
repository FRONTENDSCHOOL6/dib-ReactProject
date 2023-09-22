import FormInput from '../common/FormInput';
import PropTypes from 'prop-types';

function PasswordInput({ defaultValue, onChange, isValidPassword }) {
  return (
    <div className="flex flex-col gap-2 text-left text-lg">
      <FormInput
        label="비밀번호"
        htmlFor="userPassword"
        type="password"
        name="password"
        id="userPassword"
        placeholder="비밀번호를 입력해주세요"
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {isValidPassword === false && (
        <span className="text-dibRed">
          8~20자의 영문, 숫자, 특수문자를 포함해주세요.
        </span>
      )}
    </div>
  );
}

export default PasswordInput;

PasswordInput.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  isValidPassword: PropTypes.bool,
};
