import React, { useState } from 'react';
import Image from 'next/image';
import Chart1 from "@/app/assest/img/Chart1.png"; 
import Chart2 from "@/app/assest/img/Chart2.png"; 
import Chart3 from "@/app/assest/img/Chart3.png"; 
import Chart4 from "@/app/assest/img/Chart4.png"; 
import Chart5 from "@/app/assest/img/Chart5.png";  
import Chart6 from "@/app/assest/img/Chart6.png";  
import MoreOptions from "@/app/assest/img/MoreOptions.png"

function Tabs() {  
  const [activeTab, setActiveTab] = useState('7 Days');

  const tabs = [
    { label: '7 Days', charts: getChartsForPeriod('7 Days') },
    { label: '30 Days', charts: getChartsForPeriod('30 Days') },
    { label: '60 Days', charts: getChartsForPeriod('60 Days') },
  ];

  return (
    <div>
      <div>
        <Card 
          charts={tabs.find((tab) => tab.label === activeTab).charts} 
          tabs={tabs} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
      </div>
    </div>
  );
}

function Card({ charts, tabs, activeTab, setActiveTab }) {
  return (
    <div className='grid md:grid-cols-3 gap-4  m-7 sm:grid-cols-1 '>
      {charts.map((chart, index) => (
        <ChartCard 
          key={index} 
          src={chart.src} 
          title={chart.title} 
          description={chart.description} 
          width={chart.width} 
          height={chart.height} 
          tabs={tabs} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
      ))}
    </div>
  );
}

function ChartCard({ src, title, width, height, tabs, activeTab, setActiveTab }) {
  return (
    <div className='shadow-custom p-5 rounded-lg'>
      <div>
        <div className='flex flex-col'>
          <div className='flex items-center'>
<div>
   <span className='text-customBlack font-bold'>{title}</span>
</div>
<div className='ml-auto'>
<Image src={MoreOptions} width={30} height={30} alt={MoreOptions} className='object-contain' />
</div>
          </div>
         
          <span className='text-customGray font-md'>description</span> 
        </div>
        <div className="flex space-x-4 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`py-2  rounded-none ${
                activeTab === tab.label 
                  ? 'text-customBlack font-bold border-b-[3px] border-customPurple' 
                  : 'text-customGray'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-2">
          <Image src={src} width={width} height={height} alt={title} className='object-contain' />
        </div>
        <div className="mt-2">
          <span className='text-customPurple font-medium'>View details</span>
        </div>
      </div>
    </div>
  );
}

function getChartsForPeriod(period) {
  const allCharts = [
    { src: Chart1, title: "Chart 1", description: "Description 1", width: 250, height: 280 },
    { src: Chart2, title: "Chart 2", description: "Description 2", width: 240, height: 280 },
    { src: Chart3, title: "Chart 3", description: "Description 3", width: 455, height: 280 },
    { src: Chart4, title: "Chart 4", description: "Description 4", width: 234, height: 280 },
    { src: Chart5, title: "Chart 5", description: "Description 5", width: 280, height: 280 },
    { src: Chart6, title: "Chart 6", description: "Description 6", width: 471, height: 283 },
  ];

  return allCharts; 
}

export default Tabs;
