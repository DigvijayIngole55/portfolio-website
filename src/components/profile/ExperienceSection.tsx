import React from 'react';
import Section from '@/components/ui/Section';
import ExperienceCard from '@/components/cards/ExperienceCard';
import { profileData } from '@/constants/profileData';

export default function ExperienceSection() {
  return (
    <Section title="Experience">
      <div className="space-y-8">
        {profileData.experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </Section>
  );
}