import React from 'react';
import { ExclamationTriangleIcon, BellAlertIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function RealTimeInsights() {
  return (
    <div className="mt-2 font-sans">
      <div className="font-bold text-base text-gray-900 mb-2">Real-Time Insights</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left box */}
        <div className="flex items-start bg-blue-50 rounded-lg p-4 border">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mr-3">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 bg-yellow-300 p-1 rounded-lg" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">Surga Industry-Identifed</div>
            <div className="text-xs text-gray-700 mt-1 font-normal">March success-code between &amp; qualify</div>
            <a href="#" className="flex items-center text-xs text-blue-600 font-semibold mt-2 hover:underline">
              View detailed report <ArrowRightIcon className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
        {/* Right box */}
        <div className="flex items-start bg-blue-50 rounded-lg p-4 border">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mr-3">
            <BellAlertIcon className="h-6 w-6 text-yellow-500 bg-yellow-300 p-1 rounded-lg" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">Humorous Uncompleted Profiles</div>
            <div className="text-xs text-gray-700 mt-1 font-normal">24 participants completing profiles, potentially low quality</div>
            <a href="#" className="flex items-center text-xs text-blue-600 font-semibold mt-2 hover:underline">
              Send notification <ArrowRightIcon className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}