import React from 'react';

const meetingNames = [
  'Choi Seo Youn',
  'Kim Min Jun',
  'Lee Seo Youn',
  'Jung Ho Yoon',
  'Lim Si Woo',
];

const userColors = [
  { bg: 'bg-green-500', text: 'text-white' },
  { bg: 'bg-blue-800', text: 'text-white' },
  { bg: 'bg-purple-800', text: 'text-white' },
  { bg: 'bg-green-800', text: 'text-white' },
  { bg: 'bg-zinc-950', text: 'text-white' },
];

export default function MeetingAnticipation() {
  return (
    <div className="bg-white rounded-lg p-4 shadow font-sans">
      <div className="font-semibold mb-2">Meeting in Anticipation</div>
      <ol className="space-y-2">
        {meetingNames.map((name, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-black font-bold text-xs md:text-xs">{i + 1}</span>
            <span className={`flex items-center justify-center w-7 h-7 rounded-full ${userColors[i].bg} ${userColors[i].text} font-bold text-base md:text-base text-xs`}>
              {name.charAt(0)}
            </span>
            <span className="text-gray-800 text-xs md:text-sm font-semibold">{name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}