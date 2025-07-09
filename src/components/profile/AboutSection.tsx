import React from 'react';
import Section from '@/components/ui/Section';
import { profileData } from '@/constants/profileData';

export default function AboutSection() {
  return (
    <Section title="About">
      <div className="space-y-3">
        {profileData.about.map((paragraph, index) => (
          <p key={index} className="text-m leading-normal" style={{ fontFamily: 'var(--font-sf-pro-text)', color: '#9B9B9B' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}