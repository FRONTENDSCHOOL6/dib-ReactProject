import PropTypes from 'prop-types';

function SubVisualBanner({ title }) {
  return (
    <div className="bg-subVisual min-w-[100%] h-[197px] flex justify-center items-center mb-16">
      <h2 className="text-3xl text-semibold text-white">{title}</h2>
    </div>
  );
}

export default SubVisualBanner;

SubVisualBanner.propTypes = {
  title: PropTypes.string.isRequired,
};
