import PropTypes from 'prop-types';

function PostMain({content}) {
  return (
    <div className="m-auto w-[1200px] min-w-[1200px]">
      <p className="h-[200px]">{content}</p>
    </div>
  );
}

export default PostMain;

PostMain.propTypes = {
  content: PropTypes.object.isRequired,
};
