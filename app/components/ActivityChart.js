import React from 'react';

export default function ActivityChart() {
  // Updated data for three lines with clear vertical gaps and all starting at the Y axis
  const data = [
    { x: 0, label: '02:00', blue: 10, green: 25, lightblue: 55 },
    { x: 1, label: '10:00', blue: 13, green: 28, lightblue: 65 },
    { x: 2, label: '11:00', blue: 23, green: 41, lightblue: 85 },
    { x: 3, label: '12:30', blue: 16, green: 32, lightblue: 75 },
    { x: 4, label: '13:00', blue: 31, green: 48, lightblue: 95 },
    { x: 5, label: '14:00', blue: 36, green: 63, lightblue: 105 },
    { x: 6, label: '15:00', blue: 31, green: 56, lightblue: 97 },
    { x: 7, label: '16:00', blue: 15, green: 43, lightblue: 80 },
  ];
  const yLabels = [140, 105, 70, 35, 0];
  const chartHeight = 270;
  const chartWidth = 600;
  const yMax = 150;
  const yMin = 0;
  const topPadding = 50;
  const bottomPadding = 60;
  const xStep = 65;
  const yScale = v => topPadding + ((yMax - v) * (chartHeight - topPadding - bottomPadding) / (yMax - yMin));
  const xPos = i => 45 + i * xStep;

  return (
    <div className="bg-white rounded-lg p-8 shadow mb-6 w-full overflow-x-auto min-h-[240px]">
      <div className="font-semibold mb-1">Activity by Time</div>
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        width="100%"
        height="240"
        preserveAspectRatio="xMinYMin meet"
        className="w-full h-auto"
      >
        {/* Y axis grid lines and labels */}
        {yLabels.map((y, i) => (
          <g key={y}>
            <line x1={45} y1={yScale(y)} x2={chartWidth - 90} y2={yScale(y)} stroke="#E5E7EB" strokeDasharray="2 2" />
            <text
              x={40}
              y={yScale(y) + 4}
              fontSize="11"
              fill="#6B7280"
              textAnchor="end"
              alignmentBaseline="middle"
              fontWeight="bold"
              style={{ fontFamily: 'inherit', fontWeight: 'bold' }}
            >
              {y}
            </text>
          </g>
        ))}
        {/* Y axis (vertical) - solid black line */}
        <line
          x1={45}
          y1={topPadding}
          x2={45}
          y2={chartHeight - bottomPadding}
          stroke="#111827"
          strokeWidth="2"
        />
        {/* Blue line */}
        <polyline
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          points={data.map((d, i) => `${xPos(i)},${yScale(d.blue)}`).join(' ')}
        />
        {/* Green line */}
        <polyline
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          points={data.map((d, i) => `${xPos(i)},${yScale(d.green)}`).join(' ')}
        />
        {/* Light blue line */}
        <polyline
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          points={data.map((d, i) => `${xPos(i)},${yScale(d.lightblue)}`).join(' ')}
        />
        {/* Dots for each line */}
        {data.map((d, i) => (
          <circle key={`b${i}`} cx={xPos(i)} cy={yScale(d.blue)} r={3} fill="#2563eb" />
        ))}
        {data.map((d, i) => (
          <circle key={`g${i}`} cx={xPos(i)} cy={yScale(d.green)} r={3} fill="#22c55e" />
        ))}
        {data.map((d, i) => (
          <circle key={`l${i}`} cx={xPos(i)} cy={yScale(d.lightblue)} r={3} fill="#38bdf8" />
        ))}
        {/* Blue dot and label between 12.30 and 13.00 */}
        <circle cx={(xPos(3) + xPos(2.8)) / 2} cy={yScale(-30)} r={5} fill="#2563eb" />
        <rect x={(xPos(3) + xPos(2.8)) / 2 + 8} y={yScale(-30) - 12} width="160" height="22" rx="6" fill="#f3f4f6" />
        <text
          x={(xPos(3) + xPos(2.8)) / 2 + 16}
          y={yScale(-30) + 4}
          fontSize="13"
          fill="#2563eb"
          fontWeight="bold"
          style={{ fontFamily: 'inherit', fontWeight: 'bold' }}
        >
          Participant Login = 0 Meeting
        </text>
        {/* X axis (horizontal) - solid black line, drawn last */}
        <line
          x1={45}
          y1={chartHeight - bottomPadding}
          x2={chartWidth - 90}
          y2={chartHeight - bottomPadding}
          stroke="#111827"
          strokeWidth="2"
        />
        {/* X axis labels below the axis, drawn last so they are visible */}
        {data.map((d, i) => (
          <text
            key={d.label}
            x={xPos(i)}
            y={chartHeight - bottomPadding + 14}
            fontSize="11"
            fill="#6B7280"
            textAnchor="middle"
            fontWeight="bold"
            style={{ fontFamily: 'inherit', fontWeight: 'bold' }}
          >
            {d.label}
          </text>
        ))}
      </svg>
    </div>
  );
}