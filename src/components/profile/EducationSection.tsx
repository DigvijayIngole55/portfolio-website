import React from 'react';
import Section from '@/components/ui/Section';
import EducationCard from '@/components/cards/EducationCard';
import { profileData } from '@/constants/profileData';

export default function EducationSection() {
  return (
    <Section title="Education">
      <div className="space-y-8">
        {profileData.education.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </Section>
  );
}