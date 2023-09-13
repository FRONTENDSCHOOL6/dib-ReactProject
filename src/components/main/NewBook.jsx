
import { Link } from 'react-router-dom';
import ScrollButton from '../common/ScrollButton';
function NewBook() {
return (
    <>
    <section className="text-center">
    <h2 className="text-dibBlack text-[40px] not-italic font-normal leading-[normal] tracking-[-1.5px]">
    신규 도서</h2>
    <strong className="text-dibBlack text-[16px] not-italic font-normal">
    새롭게 소개하는 도서를 여기서 만나보세요!</strong>
    <ScrollButton />
    </section>
    </>
    )
}

export default NewBook
