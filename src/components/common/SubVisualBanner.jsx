import PropTypes from 'prop-types';

function SubVisualBanner({ title }) {
  return (
    <div className="bg-subVisual w-[1920px] m-auto h-[197px] flex justify-center items-center mb-[100px]">
      <h2 className="text-[28px] text-semibold text-white">{title}</h2>
    </div>
  );
}

export default SubVisualBanner;

SubVisualBanner.propTypes = {
  title: PropTypes.string.isRequired,
};
