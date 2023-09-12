import PropTypes from 'prop-types';

function SignPageTitle({ title, subTitle }) {
  return (
    <>
      <div
        className="
        pt-[230px]
        ml-auto
        mr-auto
        mb-20
        w-[400px]"
      >
        <h2
          className="
          pb-8
          border-b-[1px]
          text-center
          text-5xl
          font-normal
          text-dibBlack"
        >
          {title}
        </h2>
        <p className="text-center text-dibCategory mt-2">{subTitle}</p>
      </div>
    </>
  );
}

export default SignPageTitle;

SignPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
