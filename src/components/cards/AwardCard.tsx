import React from 'react';

interface AwardCardProps {
  awards: Array<{
    title: string;
    organization: string;
    year: string;
  }>;
}

export default function AwardCard({ awards }: AwardCardProps) {
  return (
    <div className="w-full">
      {awards.map((award, index) => (
        <div key={index} className="flex items-center py-1">
          <div className="flex items-center space-x-4">
            <span className="text-base font-medium text-white" style={{ fontFamily: 'var(--font-sf-pro-display)' }}>
              {award.title}
            </span>
            <span className="text-base font-normal text-[#A0A0A0]" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
              {award.organization}
            </span>
          </div>
          <div className="flex-1 mx-8 border-b border-[#383838]"></div>
          <div className="text-base font-normal text-[#A0A0A0]" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
            {award.year}
          </div>
        </div>
      ))}
    </div>
  );
} 