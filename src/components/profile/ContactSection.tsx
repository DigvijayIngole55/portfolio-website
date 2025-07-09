import React from 'react';
import Section from '@/components/ui/Section';
import ContactCard from '@/components/cards/ContactCard';
import { profileData } from '@/constants/profileData';

export default function ContactSection() {
  return (
    <Section title="Contact">
      <ContactCard contacts={profileData.contacts} />
    </Section>
  );
}