import React from 'react';
import CompanyCard from '../components/CompanyCard';
import ForecastsStats from '../components/ForecastsStats';
import LineChartComponent from '../components/LineChartComponent';
import RichTextBox from '@/components/RichTextBox';

const Home: React.FC = () => {
  const handleCardClick = () => {
    alert("You clicked the Ask Anything card!");
  };

  const stats = [
    {
      label: 'Revenue Growth',
      description:
        'In FY 2023/24, Abans PLC reported a 19.8% increase in revenue, reaching LKR 42.64 billion, up from LKR 35.60 billion in the previous year.',
    },
    {
      label: 'Gross Profit Decline',
      description:
        'Gross profit decreased by 6.0%, dropping to LKR 13.89 billion from LKR 14.77 billion in FY 2022/23.',
    },
    {
      label: 'Profit After Tax',
      description:
        'Profit after tax saw a 26.2% increase, growing from LKR 3.49 billion in 2022/23 to LKR 4.40 billion in 2023/24.',
    },
  ];
  return (
    <div>
      <div className="p-6">
      <CompanyCard/>
      </div>
      
      <div className="grid grid-cols-1 p-6 md:grid-cols-2 gap-6 max-w-6xl">
      <div className="p-6">
      <ForecastsStats
        title="Forecasts and Stats on the Company"
        subtitle="Electricals and Engineering · Since 2010"
        stats={stats}
      />
      </div>
        <LineChartComponent />
      </div>
      {/* <div className="p-6">
      <LineChartComponent />
      </div> */}
      <div className="min-h-screen  flex items-center justify-center">
        <RichTextBox />
      </div>

    </div>
  );
};

export default Home;
