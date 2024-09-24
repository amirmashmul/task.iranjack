import { useState } from 'react';
import Image from 'next/image';
import ChevronGray from "@/app/assest/img/ChevronGray.png"; // Ensure the path is correct

const MenuBar = () => {
  const [isGroupOpen, setIsGroupOpen] = useState({});
  const [isItemOpen, setIsItemOpen] = useState({});
  const [activeItem, setActiveItem] = useState(null); // State to track the currently active item

  const toggleGroup = (group) => {
    setIsGroupOpen((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const toggleItem = (group, item) => {
    setIsItemOpen((prev) => ({
      ...prev,
      [group]: { ...prev[group], [item]: !prev[group]?.[item] },
    }));

    // Set the active item
    setActiveItem(activeItem === `${group}-${item}` ? null : `${group}-${item}`);
  };

  return (
    <div className="border-r border-gray-100 hidden md:flex  pr-2 bg-white w-[283px]">
      {/* Sidebar */}
      <div className="">
        <div className="flex flex-col">
          <ul>
            {/* Group Title */}
            <li className="cursor-pointer py-2 flex items-center" onClick={() => toggleGroup('group1')}>
              <span className="flex items-center font-semibold whitespace-nowrap">
                <Image src={ChevronGray} alt="Chevron Down" width={30} height={30} />
                Group Title
              </span>
            </li>

            {isGroupOpen['group1'] && (
              <ul>
                <li
                  className={`cursor-pointer py-2 flex items-center ${activeItem === 'group1-option1' ? 'bg-gray-200 rounded-lg w-[175px]' : ''}`} // Change background color when active
                  onClick={() => toggleItem('group1', 'option1')}
                >
                  <Image src={ChevronGray} alt="Chevron Down" width={30} height={30} />
                  <span className="ml-2">Option </span>
                </li>

                {isItemOpen['group1']?.['option1'] && (
                  <ul className="pl-[50px]"> {/* Indentation applied only to nested items */}
                    <li className="cursor-pointer py-1">Item </li>
                    <li className="cursor-pointer py-1">Item </li>
                    <li className="cursor-pointer py-1">Item </li>
                    <li className="cursor-pointer py-1">Item </li>
                  </ul>
                )}

                <li
                  className={`cursor-pointer py-2 flex items-center ${activeItem === 'group1-option2' ? 'bg-gray-200 rounded-lg w-[175px]' : ''}`} // Change background color when active
                  onClick={() => toggleItem('group1', 'option2')}
                >
                  <Image src={ChevronGray} alt="Chevron Down" width={30} height={30} />
                  <span className="ml-2">Option </span>
                </li>

                {isItemOpen['group1']?.['option2'] && (
                  <ul className="pl-[50px]"> {/* Indentation applied only to nested items */}
                    <li className="cursor-pointer py-1">Item </li>
                    <li className="cursor-pointer py-1">Item </li>
                    <li className="cursor-pointer py-1">Item </li>
                    <li className="cursor-pointer py-1">Item </li>
                  </ul>
                )}
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
