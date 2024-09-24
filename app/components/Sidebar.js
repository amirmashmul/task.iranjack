import React from 'react';
import Image from 'next/image';
import Alert from "@/app/assest/img/Alert.png";
import Chat from "@/app/assest/img/Chat.png";
import Teams from "@/app/assest/img/Teams.png";
import Calender from "@/app/assest/img/Calender.png";
import Call from "@/app/assest/img/Call.png";
import Document from "@/app/assest/img/Document.png";
import Logo from "@/app/assest/img/Logo.png";
import MoreOptions from "@/app/assest/img/MoreOptions.png";
import MoreOptionPurple from "@/app/assest/img/MoreOptionPurple.png";
import Plus from "@/app/assest/img/Plus.png";

function Sidebar() {
  return (
    <>
      {/* Sidebar for larger screens */}
      <div className='bg-sidebar-gradient w-[10%] flex-col justify-start shadow-custom py-3 hidden md:block'>
        <MenuItem image={Alert} label="Activity" />
        <MenuItem image={Chat} label="Chat" />
        <MenuItem image={Teams} label="Teams" />
        <MenuItem image={Calender} label="Calendar" />
        <MenuItem image={Call} label="Call" />
        <MenuItem image={Document} label="Files" />
        <MenuItem image={Logo} label="Van Arsdel" isLogo />
        <MenuItem image={MoreOptions} label="More Options" />
        <MenuItem image={Plus} label="Apps" />
      </div>

      {/* Mobile fixed-bottom bar */}
      <div className='bg-white border-t-2 border-t-gray-150 w-full flex justify-around py-3 fixed bottom-0 shadow-custom md:hidden'>
        <MenuItem image={Alert} label="Activity" />
        <MenuItem image={Chat} label="Chat" />
        <MenuItem image={Teams} label="Teams" />
        <MenuItem image={Calender} label="Calendar" />
        <MenuItem image={MoreOptionPurple} label="More" isMore />
      </div>
    </>
  );
}

function MenuItem({ image, label, isLogo, isMore }) {
  return (
    <div className={`flex flex-col justify-center items-center py-2 ${isLogo ? 'border-l-[4px] border-customPurple pl-2 ml-2' : ''}`}>
      <div className="flex flex-col items-center">
        <Image src={image} width={30} height={30} alt={label} />
        {label && (
          <span className={`text-center ${isLogo ? 'text-customPurple' : isMore ? 'text-customPurple' : 'text-customGray'}`}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
