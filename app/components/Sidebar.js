import React from 'react';
import { HomeIcon, ChartBarIcon, UsersIcon, CalendarIcon, UserGroupIcon, DocumentTextIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const menu = [
  { label: 'Event Management', icon: HomeIcon },
  { label: 'Real-Time Dashboard', icon: ChartBarIcon },
  { label: 'Matching Tracker', icon: UsersIcon },
  { label: 'Meeting Monitoring', icon: CalendarIcon },
  { label: 'Participant Management', icon: UserGroupIcon },
  { label: 'Reports', icon: DocumentTextIcon },
  { label: 'AI Matching Settings', icon: Cog6ToothIcon },
];

export default function Sidebar({ active = 'Real-Time Dashboard', showSidebar = false, onClose }) {
  const sidebarContent = (
    <nav className="mt-48">
      {menu.map(item => (
        <div
          key={item.label}
          className={`flex items-center gap-3 px-6 py-3 cursor-pointer text-sm font-medium relative ${
            item.label === active ? 'bg-blue-100 text-blue-700 rounded-l-lg' : 'text-gray-700'
          }`}
        >
          {item.label === active && (
            <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-l-lg" />
          )}
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="bg-white w-60 min-h-screen border-r hidden md:block font-sans">
        {sidebarContent}
      </aside>
      {/* Mobile sidebar overlay */}
      {showSidebar && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="bg-white w-60 min-h-full border-r shadow-lg">
            {sidebarContent}
          </div>
          <div className="flex-1 bg-black bg-opacity-30" onClick={onClose}></div>
        </div>
      )}
    </>
  );
}