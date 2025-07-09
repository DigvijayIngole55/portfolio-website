import React from 'react';

interface ExperienceCardProps {
  role: string;
  company: string;
  years: string;
  description: string;
}

export default function ExperienceCard({ role, company, years, description }: ExperienceCardProps) {
  return (
    <div className="bg-[#181818] rounded-2xl border border-[#383838] p-6 mb-4 w-full text-left shadow-sm" style={{ color: '#D1D1D1' }}>
      <div className="text-sm font-normal text-[#A0A0A0] mb-1" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
        {role}
      </div>
      <div className="text-medium font-medium text-white mb-1" style={{ fontFamily: 'var(--font-sf-pro-display)' }}>
        {company}
      </div>
      <div className="text-sm font-normal text-[#A0A0A0] mb-3" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
        {years}
      </div>
      <div className="text-sm font-normal text-[#B0B0B0] leading-relaxed" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
        {description.split('\n').map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
} 