import PropTypes from 'prop-types';

function InputValidation({message}) {
  return (
    <span className="text-[#FF0000]">{message}</span>
  )
}

export default InputValidation

InputValidation.propTypes = {
  message : PropTypes.string.isRequired,
};