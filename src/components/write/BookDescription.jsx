import PropTypes from 'prop-types';

function BookDescription({ title }) {
  return (
    <li className="flex items-center w-[433px] h-[80px] mt-5 border-b border-horizontal">
      <p className="text-lg text-dibBookWrite">{title}</p>
    </li>
  );
}

export default BookDescription;

BookDescription.propTypes = {
  title: PropTypes.string.isRequired,
};
