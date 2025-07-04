import React from 'react';
import { UsersIcon, UserMinusIcon, Squares2X2Icon, ChartBarIcon, StarIcon } from '@heroicons/react/24/outline';

export default function KPIStats() {
  const items = [
    {
      label1: 'Total',
      label2: 'Participants',
      value: 150,
      icon: UsersIcon,
      extra: null,
      vertical: false,
    },
    {
      label1: 'Real-Time',
      label2: 'Demified',
      value: '29 (19%)',
      icon: UserMinusIcon,
      extra: null,
      vertical: false,
    },
    {
      label1: 'Total',
      label2: 'Matches',
      value: 150,
      icon: Squares2X2Icon,
      extra: 160,
      matchesLayout: true,
    },
    {
      label1: 'Average',
      label2: 'Satisfaction',
      value: '78%',
      icon: ChartBarIcon,
      extra: null,
      vertical: false,
    },
    {
      label1: 'Total',
      label2: 'Meetings',
      value: 18,
      icon: StarIcon,
      extra: null,
      vertical: false,
    },
    {
      label1: 'Peak',
      label2: '',
      value: 4.3,
      icon: StarIcon,
      extra: null,
      vertical: false,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6 font-sans">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
          {item.matchesLayout ? (
            <div className="flex flex-row items-center w-full justify-center">
              <div className="flex flex-col items-center mr-2">
                <item.icon className="h-8 w-8 text-blue-500" />
                <div className="text-lg font-bold text-gray-400 mt-1">{item.extra}</div>
              </div>
              <div className="flex flex-col items-center ml-2">
                <span className="text-xs font-semibold text-gray-700 leading-tight">{item.label1}</span>
                {item.label2 && <span className="text-xs font-semibold text-gray-500 leading-tight">{item.label2}</span>}
                <div className="text-2xl font-extrabold mt-1">{item.value}</div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center w-full justify-center">
                <item.icon className="h-8 w-8 text-blue-500 mr-2" />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-gray-700 leading-tight">{item.label1}</span>
                  {item.label2 && <span className="text-xs font-semibold text-gray-500 leading-tight">{item.label2}</span>}
                </div>
              </div>
              <div className="text-2xl font-extrabold mt-2">{item.value}</div>
            </>
          )}
          {!item.vertical && !item.matchesLayout && item.extra && (
            <div className="text-lg font-bold text-gray-400 mt-1">{item.extra}</div>
          )}
        </div>
      ))}
    </div>
  );
}