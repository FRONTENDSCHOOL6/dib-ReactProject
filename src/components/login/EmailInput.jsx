import FormInput from '../common/FormInput';
import PropTypes from 'prop-types';

function EmailInput({ defaultValue, onChange, isValidEmail }) {
  return (
    <div className="flex flex-col gap-2 text-left text-lg">
      <FormInput
        label="이메일"
        htmlFor="userEmail"
        type="email"
        name="email"
        id="userEmail"
        placeholder="이메일을 입력해주세요"
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {isValidEmail === false && (
        <span className="text-dibRed">올바른 이메일 형식을 입력해주세요.</span>
      )}
    </div>
  );
}

export default EmailInput;

EmailInput.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  isValidEmail: PropTypes.bool,
};
