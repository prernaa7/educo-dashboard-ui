import React from 'react';
import { FiFileText } from 'react-icons/fi';

const assignments = [
  {
    title: 'Methods of data',
    date: '02 July, 10:30 AM',
    status: 'In progress',
    color: 'bg-[#D4E3FF] text-[#2B57E5]'
  },
  {
    title: 'Market Research',
    date: '14 June, 12:45 AM',
    status: 'Completed',
    color: 'bg-[#E0F7E9] text-[#34A853]'
  },
  {
    title: 'Data Collection',
    date: '12 May, 11:00 AM',
    status: 'Upcoming',
    color: 'bg-[#FFF4CC] text-[#FFB300]'
  },
];

export default function Assignments() {
  return (
    <section className="bg-white rounded-2xl p-2 sm:p-4 md:p-6 shadow-md">
      <div className="flex justify-between items-center mb-2 sm:mb-3 md:mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-0">Assignments</h2>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accentGreen text-darkNavy font-bold text-xl shadow">+</button>
      </div>
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-4">
        {assignments.map((a) => (
          <div key={a.title} className="flex items-center gap-1 sm:gap-2 md:gap-3 bg-white p-1 sm:p-2 md:p-4 rounded-2xl shadow-sm">
            <div className={`w-11 h-11 flex items-center justify-center text-xl shadow-sm rounded-[18px] ${a.color}`}><FiFileText /></div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm leading-tight whitespace-normal break-words">{a.title}</div>
              <div className="text-xs text-gray-500 font-medium truncate">{a.date}</div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${a.color}`}>{a.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 