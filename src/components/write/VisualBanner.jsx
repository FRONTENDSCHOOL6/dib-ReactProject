import PropTypes from 'prop-types';

function VisualBanner({ title }) {
  return (
    <div className="bg-subVisual w-screen  h-[340px] flex justify-center items-center mb-16">
      <h1 className="text-[70px] text-white">{title}</h1>
    </div>
  );
}

export default VisualBanner;

VisualBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

