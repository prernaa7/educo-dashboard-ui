import React from 'react';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <h1 className="text-[2rem] md:text-[2.25rem] font-bold leading-tight tracking-tight">Welcome back Taylor <span role="img" aria-label="wave">👋</span></h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search courses"
          className="px-5 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E9FFAA] bg-white text-base shadow-sm min-w-[200px]"
        />
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-[#E9FFAA] object-cover shadow-md"
        />
      </div>
    </header>
  );
} 