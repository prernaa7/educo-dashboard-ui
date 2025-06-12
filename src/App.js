import React from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import './App.css';
import Sidebar from './components/Sidebar';
import NewCourses from './components/NewCourses';
import HoursActivity from './components/HoursActivity';
import CoursesTaking from './components/CoursesTaking';
import Calendar from './components/Calendar';
import Assignments from './components/Assignments';
import DailySchedule from './components/DailySchedule';

function SearchProfile() {
  return (
    <div className="flex items-center gap-4 mb-4 justify-end">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FiSearch />
        </span>
        <input
          type="text"
          placeholder="Search courses"
          className="pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none min-w-[220px] placeholder-gray-500"
        />
      </div>
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Profile"
        className="w-12 h-12 rounded-full border-2 border-[#B49CFF] object-cover shadow-md"
      />
    </div>
  );
}

function App() {
  return (
    <div className="w-screen min-h-screen flex items-start justify-center bg-dashboardBg p-2 relative">
      {/* Main Dashboard Content with Sidebar as first column */}
      <div className="w-full max-w-full min-h-screen bg-[#FAFAFA] grid grid-cols-1 lg:grid-cols-[260px_1fr_340px] gap-4 md:gap-6 rounded-none lg:rounded-[40px] shadow-2xl p-2 md:p-4 lg:p-6 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        <main className="flex flex-col min-h-0 flex-1 overflow-y-auto gap-3 pt-16 md:pt-0 col-span-1 w-full min-w-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back Taylor 👋</h1>
          <NewCourses />
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 min-h-0" style={{minHeight: '220px', height: 'auto'}}>
            <div className="flex-1 min-h-0 w-full md:w-1/2"><HoursActivity /></div>
            <div className="flex-1 min-h-0 w-full md:w-1/2"><DailySchedule /></div>
          </div>
          <div className="flex-1 min-h-0 mt-0">
            <div className="flex justify-between items-center mb-1 mt-0">
              <h2 className="text-xl font-bold text-gray-800 mt-0">Courses You're Taking</h2>
              <div className="flex gap-2">
                <button className="bg-white text-[#1C1C2E] px-4 py-2 rounded-full font-medium flex items-center gap-2 shadow-sm">
                  Active <FiChevronDown className="text-lg" />
                </button>
                <button className="bg-[#D0F224] text-[#1C1C2E] w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow">+</button>
              </div>
            </div>
            <CoursesTaking />
          </div>
        </main>
        {/* Right Panel */}
        <aside className="flex flex-col gap-4 min-h-0 overflow-y-auto mt-4 md:mt-0 col-span-1 w-full min-w-0">
          <SearchProfile />
          <Calendar />
          <Assignments />
        </aside>
      </div>
    </div>
  );
}

export default App;
