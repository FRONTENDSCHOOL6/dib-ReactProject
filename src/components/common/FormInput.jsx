import PropTypes from 'prop-types';

function FormInput({
  type,
  name,
  id,
  placeholder,
  label,
  width = 'w-full',
  ...rest
}) {
  return (
    <>
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`border border-dibBlack pl-5
        rounded-full leading-[54px] text-base ${width}`}
        {...rest}
      />
    </>
  );
}

export default FormInput;

FormInput.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'password',
    'number',
    'email',
    'file',
    'passwordConfirm',
  ]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.string,
  label: PropTypes.string,
};
