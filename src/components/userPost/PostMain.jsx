import PropTypes from 'prop-types';

function PostMain({ mainText }) {
  return (
    <div className="m-auto w-[1200px] min-w-[1200px]">
      <p className="h-[200px]">{mainText}</p>
    </div>
  );
}

export default PostMain;

PostMain.propTypes = {
  mainText: PropTypes.string.isRequired,
};
