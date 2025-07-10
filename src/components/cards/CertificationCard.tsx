import React from 'react';

interface CertificationCardProps {
  certifications: Array<{
    title: string;
    organization: string;
    year: string;
  }>;
}

export default function CertificationCard({ certifications }: CertificationCardProps) {
  return (
    <div className="w-full">
      {certifications.map((cert, index) => (
        <div key={index} className="flex items-center py-1">
          <div className="flex items-center space-x-4">
            <span className="text-base font-medium text-white" style={{ fontFamily: 'var(--font-sf-pro-display)' }}>
              {cert.title}
            </span>
            <span className="text-base font-normal text-[#A0A0A0]" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
              {cert.organization}
            </span>
          </div>
          <div className="flex-1 mx-8 border-b border-[#383838]"></div>
          <div className="text-base font-normal text-[#A0A0A0]" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
            {cert.year}
          </div>
        </div>
      ))}
    </div>
  );
} 