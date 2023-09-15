import PropTypes from 'prop-types';

function InputValidation({message}) {
  return (
    <span className="text-dibRed">{message}</span>
  )
}

export default InputValidation

InputValidation.propTypes = {
  message : PropTypes.string.isRequired,
};