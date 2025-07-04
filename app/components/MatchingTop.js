import React from 'react';

const topNames = [
  'Yoon Hee Eun',
  'Yoon Ji Soo',
  'Kang Seo Youn',
  'Do Geon Yoon',
  'Kim Min Jun',
];

const userColors = [
  { bg: 'bg-yellow-500', text: 'text-white' },
  { bg: 'bg-purple-800', text: 'text-white' },
  { bg: 'bg-green-700', text: 'text-white' },
  { bg: 'bg-zinc-950', text: 'text-white' },
  { bg: 'bg-zinc-950', text: 'text-white' },
];

export default function MatchingTop() {
  return (
    <div className="bg-white rounded-lg p-4 shadow mb-6 font-sans">
      <div className="font-semibold mb-2">Matching TOP 5</div>
      <ol className="space-y-2">
        {topNames.map((name, i) => (
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