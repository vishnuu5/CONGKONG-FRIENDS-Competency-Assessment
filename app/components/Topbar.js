import React from 'react';
import { BellIcon, ComputerDesktopIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Topbar({ onMenuClick }) {
  return (
    <header className="flex flex-col items-end p-4 border-b bg-white font-sans w-full">
      <div className="flex items-center gap-4 mb-2 w-full justify-between">
        <button className="md:hidden" onClick={onMenuClick} aria-label="Open sidebar">
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>
        <div className="flex items-center gap-4 ml-auto">
          <BellIcon className="h-6 w-6 text-gray-500" />
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-800 text-white font-bold text-sm">A</span>
          <span className="text-sm font-bold text-blue-600">Admin</span>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-black text-white px-3 py-1 rounded text-xs font-semibold flex items-center gap-2">
          <ComputerDesktopIcon className="h-4 w-4" />
          PRESENTATION
        </button>
      </div>
    </header>
  );
}