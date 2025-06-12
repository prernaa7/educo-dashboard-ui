import React, { useState } from 'react';
import { FiMenu, FiX, FiGrid, FiBookOpen, FiUsers, FiMessageSquare, FiBell, FiCalendar, FiUsers as FiCommunity, FiSettings } from 'react-icons/fi';

const navItems = [
  { label: 'Dashboard', icon: <FiGrid />, active: true },
  { label: 'My Courses', icon: <FiBookOpen /> },
  { label: 'My Classes', icon: <FiUsers /> },
  { label: 'Messages', icon: <FiMessageSquare /> },
  { label: 'Notifications', icon: <FiBell />, badge: 2 },
  { label: 'Calendars', icon: <FiCalendar /> },
  { label: 'Community', icon: <FiCommunity /> },
  { label: 'Settings', icon: <FiSettings /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Hamburger menu for mobile only */}
      <button
        className="fixed top-4 left-4 z-40 md:hidden bg-white rounded-full p-2 shadow-lg"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <FiMenu className="text-2xl text-darkNavy" />
      </button>
      {/* Overlay when sidebar is open on mobile */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden" onClick={() => setOpen(false)}></div>
      )}
      {/* Sidebar for desktop (vertical) and mobile (collapsible) */}
      <aside
        className={`hidden lg:flex fixed lg:static top-0 left-0 h-full w-64 bg-darkNavy flex-col rounded-r-3xl shadow-2xl p-8 z-40 md:hidden`}
        style={{ minHeight: '100vh' }}
      >
        <div className="font-bold text-2xl tracking-wide mb-10 text-white">EDUCO</div>
        <nav className="flex-1 space-y-2">
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-center px-4 py-3 rounded-full cursor-pointer transition-colors text-base gap-3 ${item.active ? 'bg-accentGreen text-blackText font-semibold' : 'hover:bg-[#23244A] text-grayText'} `}
            >
              <span className={`inline-block text-xl ${item.active ? 'text-blackText' : 'text-grayText'}`}>{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="ml-2 bg-[#FFD6AD] text-[#181A2A] text-xs font-bold px-2 py-0.5 rounded-full min-w-[24px] text-center">{item.badge}</span>
              )}
            </div>
          ))}
        </nav>
      </aside>
      {/* Sidebar as header for tablet only (md:) */}
      <header className="hidden md:flex lg:hidden w-full h-auto bg-darkNavy items-center px-4 py-2 rounded-b-2xl shadow-2xl z-30">
        <div className="font-bold text-xl tracking-wide text-white mr-8">EDUCO</div>
        <nav className="flex-1 flex flex-row gap-2 items-center overflow-x-auto">
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-center px-3 py-2 rounded-full cursor-pointer transition-colors text-sm gap-2 ${item.active ? 'bg-accentGreen text-blackText font-semibold' : 'hover:bg-[#23244A] text-grayText'} `}
            >
              <span className={`inline-block text-lg ${item.active ? 'text-blackText' : 'text-grayText'}`}>{item.icon}</span>
              <span className="flex-1 whitespace-nowrap">{item.label}</span>
              {item.badge && (
                <span className="ml-1 bg-[#FFD6AD] text-[#181A2A] text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">{item.badge}</span>
              )}
            </div>
          ))}
        </nav>
      </header>
      {/* Collapsible sidebar for mobile only */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-darkNavy flex flex-col rounded-r-3xl shadow-2xl p-8 z-40 transform transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ minHeight: '100vh' }}
      >
        <button
          className="absolute top-4 right-4 md:hidden text-white text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          <FiX />
        </button>
        <div className="font-bold text-2xl tracking-wide mb-10 text-white">EDUCO</div>
        <nav className="flex-1 space-y-2">
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-center px-4 py-3 rounded-full cursor-pointer transition-colors text-base gap-3 ${item.active ? 'bg-accentGreen text-blackText font-semibold' : 'hover:bg-[#23244A] text-grayText'} `}
            >
              <span className={`inline-block text-xl ${item.active ? 'text-blackText' : 'text-grayText'}`}>{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="ml-2 bg-[#FFD6AD] text-[#181A2A] text-xs font-bold px-2 py-0.5 rounded-full min-w-[24px] text-center">{item.badge}</span>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
} 