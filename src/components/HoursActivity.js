import React from 'react';

const data = [
  { day: 'Su', hours: 3 },
  { day: 'Mo', hours: 4 },
  { day: 'Tu', hours: 2 },
  { day: 'We', hours: 6.75, highlight: true, date: '5 Jan 2023' },
  { day: 'Th', hours: 4 },
  { day: 'Fr', hours: 5 },
  { day: 'Sa', hours: 4 },
];

const yAxis = [8, 6, 4, 2, 1];

export default function HoursActivity() {
  return (
    <section className="bg-white rounded-2xl p-2 sm:p-3 md:p-5 shadow-md w-full min-h-[180px] sm:min-h-[260px] md:h-[320px] lg:h-[370px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">Hours Activity</h2>
          <button className="border border-grayBorder rounded-full px-4 py-1 text-sm font-medium text-grayText bg-white flex items-center gap-2">
            Weekly
            <svg className="w-4 h-4 text-grayText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
        <div className="flex items-center text-xs sm:text-sm font-semibold mb-1 sm:mb-2 md:mb-3 gap-1 sm:gap-2">
          <svg className="w-4 h-4 text-grayText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9-9M7 7h9v9" /></svg>
          <span className="text-green-600">+3%</span>
          <span className="text-gray-400 font-normal">Increase than last week</span>
        </div>
      </div>
      <div className="relative flex justify-center items-end flex-1">
        {/* Horizontal grid lines */}
        <div className="absolute left-0 right-0 top-0 bottom-0 z-0">
          {yAxis.map((h, i) => (
            <div key={h} className="absolute left-4 sm:left-8 md:left-12 right-1 sm:right-2 md:right-6 border-t border-grayBorder" style={{top: `${(i/(yAxis.length-1))*100}%`}} />
          ))}
        </div>
        {/* Y-axis */}
        <div className="flex flex-col justify-between h-[88%] mr-0.5 sm:mr-1 md:mr-2 text-gray-400 text-[9px] sm:text-[10px] md:text-xs font-medium z-10">
          {yAxis.map((h) => (
            <span key={h}>{h}h</span>
          ))}
        </div>
        {/* Bars */}
        <div className="flex items-end h-[88%] w-full max-w-[140px] sm:max-w-[180px] md:max-w-[240px] lg:max-w-[320px] gap-1 sm:gap-2 md:gap-4 z-10">
          {data.map((d, idx) => (
            <div key={d.day} className="flex flex-col items-center flex-1">
              <div className={`w-3 sm:w-4 md:w-5 rounded-t-xl ${d.highlight ? 'bg-accentGreen' : 'bg-chartBar'} transition-all relative`} style={{ height: `${d.hours * 8}px` }}>
                {d.highlight && (
                  <div className="absolute -top-7 sm:-top-10 md:-top-14 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] md:text-xs bg-black text-white px-1 sm:px-2 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-lg shadow-lg z-10 whitespace-nowrap font-medium flex flex-col items-center">
                    <span><span className="mr-1">🧡</span>6h 45 min</span>
                    <span><span className="mx-1">•</span>5 Jan 2023</span>
                  </div>
                )}
              </div>
              <span className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] md:text-xs text-gray-500 font-medium">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 