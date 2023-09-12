import PropTypes from 'prop-types';

function Button({ type, title, width = 'w-full', height = 'leading-[60px]' }) {
  return (
    <button
      type={type}
      className={`border rounded-full bg-primary text-white pl-5 ${height} text-lg mt-1 text-center ml-auto mr-auto ${width}`}
    >
      {title}
    </button>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
