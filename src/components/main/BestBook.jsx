import { useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';
import ColBookCard from '../common/bookCards/ColBookCard';

function BestBook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    pb.autoCancellation(false);
    async function fetchBestBooks() {
      const bestRecord = await pb.collection('posts').getFullList({
        sort: '-like_count',
      });
      // 상위 4개의 데이터만 필터링
      const filteredData = bestRecord.slice(0, 4);
      setData(filteredData);
    }
    fetchBestBooks();
  }, []);

  return (
    <>
      <section className="text-center w-[1920px] h-[670px] m-auto flex flex-col mb-[60px]">
        <h2 className="text-dibBlack text-[32px] not-italic font-normal leading-[normal] tracking-[-1.5px] mt-[60px] mb-[20px]">
          베스트 도서
        </h2>
        <strong className="text-dibBlack text-[20px] not-italic font-normal">
          dib에서 가장 인기있는 책을 소개합니다!!
        </strong>
        <div className="w-[1200px] mx-auto">
          <ul className="flex justify-center gap-6 my-10">
            {data.map((item) => (
              <li key={item.id}>
                <ColBookCard
                  id={item.id}
                  imgSrc={item.book_image_link}
                  imgAlt={item.book_title}
                  nickName={item.user_id[0]}
                  postTitle={item.post_title}
                  bookTitle={item.book_title}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default BestBook;
