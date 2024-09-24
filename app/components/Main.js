"use client";
import React from 'react';
//Components
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Card from './Card';
import Header from './Header';
import Toolbar from './ToolBar';
import MenuBar from './MenuBar';

function Main() {
  return (
    <div>
      <Header/>
      <div className="flex w-full">
  <Sidebar />
  <div className="flex flex-col w-full border-b border-b-gray-100 p-2">
    <Navbar />
    <Toolbar/>
    <div className='flex'>
      <MenuBar/>
<Card/>
    </div>
    
  </div>
</div>
    </div>
  );
}

export default Main;
