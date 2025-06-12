import React from 'react';

const courses = [
  {
    title: '3D Design Course',
    instructor: 'Micheal Andrew',
    remaining: '8h 45 min',
    percent: 45,
    logoBg: 'bg-[#E2E6FF]',
    logoText: '3D',
  },
  {
    title: 'Development Basics',
    instructor: 'Natalia Varnan',
    remaining: '18h 12 min',
    percent: 75,
    logoBg: 'bg-[#FFF3E2]',
    logoText: 'DB',
  },
];

function ProgressCircle({ percent }) {
  const radius = 16;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  return (
    <svg height={radius * 2} width={radius * 2} className="block mx-auto mt-1">
      <circle
        stroke="#E5E7EB"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#B4F000"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}

export default function CoursesTaking() {
  return (
    <section className="bg-transparent p-0">
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-4">
        {courses.map((course) => (
          <div key={course.title} className="flex items-center gap-1 sm:gap-2 md:gap-4 bg-white rounded-2xl p-2 sm:p-3 md:p-5 shadow-sm min-h-[56px] sm:min-h-[72px] md:min-h-[96px] h-[56px] sm:h-[72px] md:h-[96px] w-full">
            <div className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-xl font-bold text-[#181A2A] shadow ${course.logoBg} rounded-[18px]`}>
              {course.logoText}
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <div className="font-semibold text-sm md:text-base leading-tight truncate">{course.title}</div>
              <div className="text-xs text-gray-500 mb-1 font-medium truncate">{course.instructor}</div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <span className="text-xs md:text-sm text-gray-400">Remaining</span>
              <span className="text-base md:text-lg font-bold text-gray-700">{course.remaining}</span>
            </div>
            <div className="flex flex-col items-center w-10 flex-shrink-0 justify-center">
              <ProgressCircle percent={course.percent} />
              <span className="font-semibold text-gray-500 text-sm mt-1">{course.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 