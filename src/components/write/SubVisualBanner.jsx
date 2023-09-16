import PropTypes from 'prop-types';

function SubVisualBanner({ title }) {
  return (
    <div className="bg-subVisual bg-cover w-screen h-[197px] flex justify-center items-center mb-16">
      <h2 className="text-[28px] text-white">{title}</h2>
    </div>
  );
}

export default SubVisualBanner;

SubVisualBanner.propTypes = {
  title: PropTypes.string.isRequired,
};
