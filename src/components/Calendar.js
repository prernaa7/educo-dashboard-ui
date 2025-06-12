import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dates = [
  [ '', '', '', 1, 2, 3, 4 ],
  [ 5, 6, 7, 8, 9, 10, 11 ],
  [ 12, 13, 14, 15, 16, 17, 18 ],
  [ 19, 20, 21, 22, 23, 24, 25 ],
  [ 26, 27, 28, 29, 30, 31, '' ],
];

export default function Calendar() {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-center justify-center mb-3 relative">
        <button className="absolute left-0 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-lg"><FiChevronLeft /></button>
        <span className="font-semibold text-base tracking-tight mx-auto">August, 2023</span>
        <button className="absolute right-0 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 text-lg"><FiChevronRight /></button>
      </div>
      <div className="flex justify-center mb-1">
        <div className="flex bg-gray-100 rounded-full px-4 py-1 gap-4">
          {days.map((d) => (
            <div key={d} className="font-semibold text-gray-500 text-xs text-center min-w-[20px]">{d}</div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-center">
        {dates.flat().map((date, idx) => (
          <div
            key={idx}
            className={`py-1 rounded-full font-medium ${date === 17 ? 'bg-[#D0F224] text-black font-bold shadow' : 'text-gray-700'} ${date === '' ? 'bg-transparent' : ''}`}
          >
            {date || ''}
          </div>
        ))}
      </div>
    </section>
  );
} 