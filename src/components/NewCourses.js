import React from 'react';
import { FiEdit3, FiUserCheck, FiCamera } from 'react-icons/fi';

const courses = [
  {
    title: 'Content Writing',
    lessons: 12,
    rate: 4.8,
    type: 'Data Research',
    color: 'bg-[#FFF3E2]',
    icon: <FiEdit3 className="text-[#F7B267] text-2xl" />,
  },
  {
    title: 'Usability Testing',
    lessons: 15,
    rate: 5.0,
    type: 'UI/UX Design',
    color: 'bg-[#F3FFE2]',
    icon: <FiUserCheck className="text-[#A3D977] text-2xl" />,
  },
  {
    title: 'Photography',
    lessons: 8,
    rate: 4.6,
    type: 'Art and Design',
    color: 'bg-[#E2E6FF]',
    icon: <FiCamera className="text-[#8FA8F8] text-2xl" />,
  },
];

export default function NewCourses() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">New Courses</h2>
        <button type="button" className="relative text-sm text-gray-500 bg-transparent p-0 m-0 border-0 cursor-pointer font-medium focus:outline-none group">
          View All
          <span className="block h-[2px] w-full bg-gray-500 absolute left-0 -bottom-0.5 group-hover:bg-gray-500"></span>
        </button>
      </div>
      <div className="flex gap-1 sm:gap-2 md:gap-4 flex-nowrap overflow-x-auto pb-2">
        {courses.map((course, idx) => (
          <div
            key={course.title}
            className={`rounded-2xl p-2 sm:p-3 md:p-5 min-w-[140px] sm:min-w-[180px] md:min-w-[220px] max-w-[180px] sm:max-w-[220px] md:max-w-[240px] bg-cardWhite shadow flex flex-col justify-between`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${course.color}`}>
                {course.icon}
              </div>
              <div>
                <div className="font-semibold text-base leading-tight">{course.title}</div>
                <div className="text-xs text-gray-500 mt-1">{course.lessons} Lessons</div>
              </div>
            </div>
            <div className="flex items-end justify-between mt-2">
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-400">Rate</span>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-semibold text-gray-800">{course.rate}</span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end flex-1">
                <span className="text-xs text-gray-400">Type</span>
                <span className="font-medium text-xs text-gray-700">{course.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 