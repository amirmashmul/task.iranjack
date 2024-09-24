import Image from 'next/image';
import HumbergerMenu from "@/app/assest/img/HumbergerMenu.png";
import CircleBlack from "@/app/assest/img/CircleBlack.png";
import CircleWhite from "@/app/assest/img/CircleWhite.png";
import ChevronDown from "@/app/assest/img/ChevronDown.png";
import SearchIcon from "@/app/assest/img/SearchIcon.png";
const Toolbar = () => {
  return (
    <div className="items-center justify-start border-b border-b-gray-100 px-5 py-2 hidden md:flex">
      {/* Hamburger Menu */}
      <div className="flex items-center">
        <Image src={HumbergerMenu} width={40} height={40} alt="Hamburger Menu" />
      </div>

      {/* Button Groups */}
      <div className="flex mx-4 space-x-4">
        {/* First Group */}
        <div className="border-r border-r-gray-150 flex space-x-1 pr-4">
          <button className="bg-customPurple flex items-center p-1 h-[32px] rounded-lg">
            <Image src={CircleWhite} width={20} height={20} alt="Circle White" />
            <span className="ml-1 text-white">Text</span>
            <div className='ml-2'>
            <Image src={ChevronDown} width={15} height={15} alt="Chevron Down" />  
            </div>
            
          </button>
          <button className="bg-white flex items-center p-1 h-[32px]">
            <Image src={CircleBlack} width={20} height={20} alt="Circle Black" />
            <span className="ml-1">Text</span>
          </button>
          <button className="bg-white flex items-center p-1 h-[32px]">
            <Image src={CircleBlack} width={20} height={20} alt="Circle Black" />
            <span className="ml-1">Text</span>
          </button>
        </div>

        {/* Second Group */}
        <div className="border-r border-r-gray-150 flex space-x-1 pr-4">
          <button className="bg-white flex items-center p-1 h-[32px]">
            <Image src={CircleBlack} width={20} height={20} alt="Circle Black" />
            <span className="ml-1">Text</span>
          </button>
          <button className="bg-white flex items-center p-1 h-[32px]">
            <Image src={CircleBlack} width={20} height={20} alt="Circle Black" />
            <span className="ml-1">Text</span>
          </button>
          <button className="bg-white flex items-center p-1 h-[32px]">
            <Image src={CircleBlack} width={20} height={20} alt="Circle Black" />
            <span className="ml-1">Text</span>
          </button>
        </div>

        {/* Third Group */}
        <div className=" flex space-x-1 pr-4">
          <button className="bg-white flex items-center p-1 h-[32px]">
            <Image src={CircleBlack} width={20} height={20} alt="Circle Black" />
            <span className="ml-1">Text</span>
          </button>
          <button className="bg-white flex items-center p-1 h-[32px]">
            <Image src={CircleBlack} width={20} height={20} alt="Circle Black" />
            <span className="ml-1">Text</span>
          </button>
          <button className="bg-white flex items-center p-1 h-[32px]">
            <Image src={CircleBlack} width={20} height={20} alt="Circle Black" />
            <span className="ml-1">Text</span>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="ml-auto flex items-center">
        <div className='mr-5'>
          <span className='font-bold'>
            Filter
          </span>
        </div>
        <div className="relative w-[208px]">
          <Image 
            src={SearchIcon} 
            className="absolute left-2 top-2" 
            width={20} 
            height={20} 
            alt="Search Icon" 
          />
          <input 
            type="text" 
            placeholder="Find" 
            className="pl-8 w-full h-8 border rounded-md focus:outline-none" 
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
