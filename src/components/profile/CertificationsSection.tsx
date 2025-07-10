import React from 'react';
import Section from '@/components/ui/Section';
import CertificationCard from '@/components/cards/CertificationCard';
import { profileData } from '@/constants/profileData';

export default function CertificationsSection() {
  return (
    <Section title="Certifications">
      <CertificationCard certifications={profileData.awards} />
    </Section>
  );
}