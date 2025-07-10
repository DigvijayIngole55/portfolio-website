import React from 'react';
import Section from '@/components/ui/Section';
import { profileData } from '@/constants/profileData';

export default function TechnicalSkillsSection() {
  return (
    <Section title="Technical Skills">
      <div className="w-full space-y-4">
        {profileData.skills.map((skillCategory, index) => (
          <div key={index} className="flex items-center">
            <div className="flex-shrink-0">
              <h3 className="text-base font-medium text-white" style={{ fontFamily: 'var(--font-sf-pro-display)' }}>
                {skillCategory.category}
              </h3>
            </div>
            <div className="flex-1 mx-8 border-b border-[#383838]"></div>
            <div className="flex flex-wrap gap-1.5 justify-end">
              {skillCategory.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="inline-block px-2 py-1 text-xs font-medium text-gray-300 rounded-md"
                  style={{ 
                    fontFamily: 'var(--font-sf-pro-text)',
                    backgroundColor: '#171717'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}