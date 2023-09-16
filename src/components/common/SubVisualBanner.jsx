import PropTypes from 'prop-types';

function SubVisualBanner({ title }) {
  return (
    <div className="bg-subVisual w-screen  h-[340px] flex justify-center items-center mb-[100px]">
      <h2 className="text-[70px] text-white">{title}</h2>
    </div>
  );
}

export default SubVisualBanner;

SubVisualBanner.propTypes = {
  title: PropTypes.string.isRequired,
};
