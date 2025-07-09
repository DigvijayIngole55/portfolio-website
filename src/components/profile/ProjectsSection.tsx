import React from 'react';
import Section from '@/components/ui/Section';
import ProjectCard from '@/components/cards/ProjectCard';
import { profileData } from '@/constants/profileData';

export default function ProjectsSection() {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-2 gap-6">
        {profileData.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}