import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar2 from "@/app/assest/img/Avatar2.png";
import Avatar from "@/app/assest/img/Avatar.png";
import LogoTitle from "@/app/assest/img/LogoTitle.png";
import Share from "@/app/assest/img/Share.png";
import MoreOptions from "@/app/assest/img/MoreOptions.png";
import Bot from "@/app/assest/img/Bot.png";

function Navbar() {
  const [activeTab, setActiveTab] = useState('Tab1'); // State to handle active tab

  return (
    <>
      {/* Navbar for larger screens */}
      <div className="h-[60px] md:flex hidden items-center justify-start px-4 border-b border-b-gray-100">
        <div className="flex items-center">
          <Image src={Avatar2} width={40} height={40} alt="Avatar2" />
        </div>

        <div className="ml-2 flex items-center">
          <Image src={LogoTitle} width={91} height={24} alt="LogoTitle" />
        </div>

        <ul className="flex ml-4 space-x-6">
          <li className={`relative ${activeTab === 'Tab1' ? 'font-bold text-black' : 'text-customGray'}`}>
            <Link href="#" onClick={() => setActiveTab('Tab1')}>
              Home
            </Link>
            {activeTab === 'Tab1' && <div className="absolute left-0 right-0 bottom-[-17px] h-[3px] bg-customPurple" />}
          </li>
          <li className={`relative ${activeTab === 'Tab2' ? 'font-bold text-black' : 'text-customGray'}`}>
            <Link href="#" onClick={() => setActiveTab('Tab2')}>
              TimeLine
            </Link>
            {activeTab === 'Tab2' && <div className="absolute left-0 right-0 bottom-[-17px] h-[3px] bg-customPurple" />}
          </li>
          <li className={`relative ${activeTab === 'Tab3' ? 'font-bold text-black' : 'text-customGray'}`}>
            <Link href="#" onClick={() => setActiveTab('Tab3')}>
              Chat
            </Link>
            {activeTab === 'Tab3' && <div className="absolute left-0 right-0 bottom-[-17px] h-[3px] bg-customPurple" />}
          </li>
        </ul>

        <div className='flex ml-auto'>
          <div className='mr-2'>
            <Image src={Share} width={25} height={25} alt="Share" />
          </div>

          <div>
            <Image src={MoreOptions} width={25} height={25} alt="MoreOptions" />
          </div>
        </div>
      </div>

      {/* Navbar for smaller screens (responsive design) */}
      <div className="h-[60px] px-4 flex md:hidden items-center justify-between">
        {/* Avatar and Logo on the left */}
        <div className="flex items-center">
          <Image src={Avatar} width={40} height={40} alt="Avatar" />
          <div className="ml-2">
            <Image src={LogoTitle} width={91} height={24} alt="LogoTitle" />
          </div>
        </div>

        {/* MoreOptions and Bot buttons on the right */}
        <div className='ml-auto flex'>
          <div className='mr-3'>
            <Image src={Bot} width={25} height={25} alt="Bot" />
          </div>
          <div>
            <Image src={MoreOptions} width={25} height={25} alt="MoreOptions" />
          </div>
        </div>
      </div>

      {/* Responsive tabs */}
      <div className="flex justify-between mt-4 md:hidden w-full border-b-2 border-b-gray-200 pb-2">
        <ul className="flex w-full justify-between pt-2">
          <li
            className={`relative cursor-pointer w-full text-center ${activeTab === 'Tab1' ? 'font-bold text-black' : 'text-customGray'}`}
            onClick={() => setActiveTab('Tab1')}
          >
            Tab1
            {activeTab === 'Tab1' && <div className="absolute left-0 right-0 bottom-[-10px] h-[3px] bg-customPurple" />}
          </li>
          <li
            className={`relative cursor-pointer w-full text-center ${activeTab === 'Tab2' ? 'font-bold text-black' : 'text-customGray'}`}
            onClick={() => setActiveTab('Tab2')}
          >
            Tab2
            {activeTab === 'Tab2' && <div className="absolute left-0 right-0 bottom-[-10px] h-[3px] bg-customPurple" />}
          </li>
          <li
            className={`relative cursor-pointer w-full text-center ${activeTab === 'Tab3' ? 'font-bold text-black' : 'text-customGray'}`}
            onClick={() => setActiveTab('Tab3')}
          >
            Tab3
            {activeTab === 'Tab3' && <div className="absolute left-0 right-0 bottom-[-10px] h-[3px] bg-customPurple" />}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
