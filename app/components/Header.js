import Image from 'next/image';
import HostBrand from "@/app/assest/img/HostBrand.png";
import Cellular from "@/app/assest/img/CellularConnection.png"; // Cellular icon
import Wifi from "@/app/assest/img/Wifi.png"; // Wi-Fi icon
import Battery from "@/app/assest/img/Battery.png"; // Battery icon
import Time from "@/app/assest/img/Time.jpg"; // Time icon
import ArrowLeft from "@/app/assest/img/ArrowLeft.png";
import ArrowRight from "@/app/assest/img/ArrowRight.png";
import MoreOptions from "@/app/assest/img/MoreOptions.png";
import Avatar from "@/app/assest/img/Avatar.png";
import Minimize from "@/app/assest/img/Minimize.png";
import Maximize from "@/app/assest/img/Maximize.png";
import Close from "@/app/assest/img/Close.png";
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <>
      <header className="sm:flex sm:bg-white md:hidden md:border-b-2 border-b-gray-200 md:bg-sidebar-gradient items-center justify-between p-4  ">
        <div className='flex'>
  <div className="flex items-center  px-4 space-x-2">
          <Image 
            src={Time}
            width={54}
            height={22}
            alt="Time"
          />
        </div>

       <div className="ml-auto flex space-x-2 items-center">
          <Image 
            src={Cellular}
            width={20}
            height={12}
            alt="Cellular Connection"
          />
          <Image 
            src={Wifi}
            width={17}
            height={12}
            alt="Wi-Fi"
          />
          <Image 
            src={Battery}
            width={27}
            height={13}
            alt="Battery"
          />
        </div>
        </div>
    
 
      </header>

      {/* Header for medium and larger screens (desktop) */}
      <header className="hidden md:flex items-center justify-between p-4 bg-gray-100 border-b-2 border-b-gray-200">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-4 px-4">
          <Image 
            src={HostBrand}
            width={24}
            height={24}
            alt="Host Brand"
          />
        </div>
        
        {/* Center - Search Input with Arrows */}
        <div className="flex-grow flex justify-center mx-4">
          <button className="p-2">
            <Image 
              src={ArrowLeft}
              width={20}
              height={20}
              alt="Arrow Left"
            /> 
          </button>
          <button className="p-2">
            <Image 
              src={ArrowRight}
              width={20}
              height={20}
              alt="Arrow Right"
            /> 
          </button>
          <SearchBar/>
        </div>
        
        {/* Right Side - More Options, Avatar, and Window Controls */}
        <div className="flex items-center space-x-2">
          <button className="p-2">
            <Image 
              src={MoreOptions}
              width={30}
              height={30}
              alt="More Options"
            />
          </button>
          <button className="p-2">
            <Image 
              src={Avatar}
              width={40}
              height={40}
              alt="Avatar"
            />
          </button>
          <div className="flex space-x-2">
            <Image 
              className='object-contain'
              src={Minimize}
              width={40}
              height={40}
              alt="Minimize"
            />
            <Image 
              className='object-contain'
              src={Maximize}
              width={40}
              height={40}
              alt="Maximize"
            />
            <Image
              className='object-contain' 
              src={Close}
              width={40}
              height={40}
              alt="Close"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
