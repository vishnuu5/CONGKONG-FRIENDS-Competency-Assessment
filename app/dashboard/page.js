"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import KPIStats from '../components/KPIStats';
import ActivityChart from '../components/ActivityChart';
import MatchingTop from '../components/MatchingTop';
import MeetingAnticipation from '../components/MeetingAnticipation';
import RealTimeInsights from '../components/RealTimeInsights';
import { supabase } from '../../utils/supabaseClient';

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [stats, setStats] = useState({
    totalParticipants: 0,
    demified: 0,
    demifiedPercent: 0,
    totalMatches: 0,
    avgSatisfaction: 0,
    totalMeetings: 0,
    peakRating: 0
  });
  const [activity] = useState([
    { time: "10:00", login: 10, meeting: 2 },
    { time: "11:00", login: 20, meeting: 5 },
    { time: "12:00", login: 30, meeting: 8 },
    { time: "13:00", login: 40, meeting: 10 },
    { time: "14:00", login: 35, meeting: 9 },
    { time: "15:00", login: 25, meeting: 7 },
    { time: "16:00", login: 15, meeting: 3 }
  ]);
  const [top, setTop] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data: participants = [] } = await supabase.from('participants').select('*');
      let { data: matches = [] } = await supabase.from('matches').select('*');
      let { data: meetingsData = [] } = await supabase.from('meetings').select('*');
      let { data: insightsData = [] } = await supabase.from('insights').select('*');

      setStats({
        totalParticipants: participants.length,
        demified: 29,
        demifiedPercent: 19,
        totalMatches: matches.length,
        avgSatisfaction: participants.length
          ? Math.round(participants.reduce((a, b) => a + (b.satisfaction || 0), 0) / participants.length)
          : 0,
        totalMeetings: meetingsData.length,
        peakRating: 4.3
      });

      setTop(participants.slice(0, 5).map(p => ({ name: p.name })));
      setMeetings(participants.slice(0, 5).map(p => ({ name: p.name })));
      setInsights(insightsData || []);
    }
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar showSidebar={showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="flex-1 flex flex-col">
        <Topbar onMenuClick={() => setShowSidebar(true)} />
        <main className="p-6 flex-1">
          <h1 className="text-xl font-bold mb-4">REAL-TIME KPI DASHBOARD</h1>
          <KPIStats stats={stats} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <ActivityChart data={activity} />
              <RealTimeInsights insights={insights} />
            </div>
            <div>
              <MatchingTop top={top} />
              <MeetingAnticipation meetings={meetings} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}