import TabButton from "../common/TabButton";

function CategoryTabButton() {
return (
    <div className="w-[1920] m-[50px]">
    <ul aria-label="tablist" className="inline-flex gap-10 items-start">
        <li>
            <TabButton category="HTML" />
        </li>
        <li>
            <TabButton category="CSS" />
        </li>
        <li>
            <TabButton category="Javascript" />
        </li>
        <li>
            <TabButton category="React" />
        </li>
    </ul>
    </div>
    );
}

export default CategoryTabButton;
