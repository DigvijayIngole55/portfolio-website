'use client';

import React from 'react';
import ProfileInfo from './ProfileInfo';
import AboutSection from './AboutSection';
import TechnicalSkillsSection from './TechnicalSkillsSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';
import TimeSection from './TimeSection';

export default function ProfileHeader() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="w-full h-[25vh]" style={{
        backgroundColor: '#1a1a1a',
        backgroundImage: `
          linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.25) 75%),
          linear-gradient(-45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.25) 75%)
        `,
        backgroundSize: '6px 6px'
      }} />
      
      <div className="flex-1 w-full bg-[#141414] relative">
        <ProfileInfo />
        
        <div className="pt-32 md:pt-20 max-w-6xl mx-auto px-4 md:px-8">
          <AboutSection />
          <TechnicalSkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </div>
        <TimeSection />
      </div>
    </div>
  );
}