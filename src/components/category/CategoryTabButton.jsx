import { useState } from 'react';
import TabButton from '../common/TabButton';

function CategoryTabButton() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="w-[1920] m-[50px]">
      <ul aria-label="tablist" className="inline-flex gap-10 items-start">
        <li>
          <TabButton
            category="HTML"
            onClick={() => handleButtonClick('HTML')}
            bgColor={activeCategory === 'HTML' ? 'bg-primary' : 'bg-transparent'}
            textColor={activeCategory === 'HTML' ? 'text-white' : 'text-infoCategory'}
            borderColor={activeCategory === 'HTML' ? 'border-transparent' : 'border-infoCategory'}
          />
        </li>
        <li>
          <TabButton
            category="CSS"
            onClick={() => handleButtonClick('CSS')}
            bgColor={activeCategory === 'CSS' ? 'bg-primary' : 'bg-transparent'}
            textColor={activeCategory === 'CSS' ? 'text-white' :'text-infoCategory'}
            borderColor={activeCategory === 'CSS'
              ? "border-transparent"
              : 'border-infoCategory'
           }
         />
       </li>
       <li>
         <TabButton
           category="Javascript"
           onClick={() => handleButtonClick('Javascript')}
           bgColor={
             activeCategory === "Javascript" 
               ? "bg-primary" 
               : 'bg-transparent'
           }
           textColor={
             activeCategory === "Javascript" 
               ? "text-white" 
               :'text-infoCategory'
           }
           borderColor={
            activeCategory === "Javascript"
               ? "border-transparent"
               : 'border-infoCategory'
           }
         />
       </li>
       <li>
         <TabButton
           category="React"
           onClick={() => handleButtonClick("React")}
           bgColor={
            activeCategory=== "React" 
               ? "bg-primary" 
               :'bg-transparent'
          }
          textColor={
            activeCategory=== "React" 
                ? "text-white" 
                :'text-infoCategory'
          }
          borderColor={
            activeCategory=== "React"
                ? "border-transparent"
                : 'border-infoCategory'
          }
        />
      </li>
    </ul>
  </div>
);
}

export default CategoryTabButton;
