import BookImage from '@/components/write/BookImage';
import Category from '@/components/write/Category';
import PropTypes from 'prop-types';

function BookInfo({
  title = '책 제목',
  author = '저자',
  publisher = '출판사',
  image,
}) {
  return (
    <div className="w-[1050px]">
      <div className="flex mt-24 mb-20 justify-between items-center">
        <BookImage image={image} />
        <div className="flex flex-col justify-between flex-grow">
          <Category />
          <ul className="w-[418px] h-[300px] flex flex-col">
            <li className="flex items-center w-[433px] h-[80px] mt-5 border-b border-horizontal">
              <p className="text-lg text-dibBookWrite">{title}</p>
            </li>
            <li className="flex items-center w-[433px] h-[80px] mt-5 border-b border-horizontal">
              <p className="text-lg text-dibBookWrite">{author}</p>
            </li>
            <li className="flex items-center w-[433px] h-[80px] mt-5 border-b border-horizontal">
              <p className="text-lg text-dibBookWrite">{publisher}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;

BookInfo.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publisher: PropTypes.string,
  image: PropTypes.string,
};
