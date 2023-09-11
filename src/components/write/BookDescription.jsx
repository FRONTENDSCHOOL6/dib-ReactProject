import PropTypes from 'prop-types';

function BookDescription({ title }) {
  return (
    <li className="w-[433px] h-24 mt-6">
      <p className="text-4xl font-bold text-dibBookWrite mb-7">{title}</p>
      <hr className="text-horizontal" />
    </li>
  );
}

export default BookDescription;

BookDescription.propTypes = {
  title: PropTypes.string.isRequired,
};
