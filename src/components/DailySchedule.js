import React from 'react';
import { FiChevronRight, FiGrid, FiType, FiDroplet, FiImage } from 'react-icons/fi';

const schedule = [
  { title: 'Design System', type: 'Lecture - Class', color: 'bg-[#FFF3E2]', icon: <FiGrid className="text-[#E5A23A] text-xl" /> },
  { title: 'Typography', type: 'Group - Test', color: 'bg-[#E2E6FF]', icon: <FiType className="text-[#8FA8F8] text-xl" /> },
  { title: 'Color Style', type: 'Group - Test', color: 'bg-[#F3FFE2]', icon: <FiDroplet className="text-[#A3D977] text-xl" /> },
  { title: 'Visual Design', type: 'Lecture - Test', color: 'bg-[#FFD6AD]', icon: <FiImage className="text-[#E5A23A] text-xl" /> },
];

export default function DailySchedule() {
  return (
    <section className="bg-white rounded-2xl p-2 sm:p-3 md:p-5 shadow-md w-full min-h-[180px] sm:min-h-[260px] md:h-[320px] lg:h-[370px] flex flex-col justify-between overflow-hidden min-w-0">
      <h2 className="text-xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-2 tracking-tight">Daily Schedule</h2>
      <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-2 flex-1 justify-center min-w-0">
        {schedule.map((item) => (
          <div key={item.title} className="flex items-center gap-1 sm:gap-2 md:gap-3 p-1 sm:p-2 md:p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer min-w-0">
            <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center rounded-[10px] sm:rounded-[12px] md:rounded-[14px] text-base sm:text-lg md:text-xl ${item.color} shadow-sm min-w-0`}>{item.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-xs sm:text-xs md:text-sm leading-tight truncate">{item.title}</div>
              <div className="text-[8px] sm:text-[9px] md:text-xs text-gray-500 font-medium truncate">{item.type}</div>
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-gray-100 min-w-0">
              <FiChevronRight className="text-gray-400 text-sm sm:text-base md:text-lg" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 