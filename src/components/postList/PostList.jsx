import ColBookCard from '../common/bookCards/ColBookCard';

function PostList() {
  return (
    <div className="w-[1204px] m-auto">
      <ul className="flex flex-wrap gap-7 justify-start mt-20 mb-20">
        <li>
          <ColBookCard />
        </li>
        <li>
          <ColBookCard />
        </li>
        <li>
          <ColBookCard />
        </li>
        <li>
          <ColBookCard />
        </li>
      </ul>
    </div>
  );
}

export default PostList;
