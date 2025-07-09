'use client';

import React, { useState, useEffect } from 'react';
import Section from '@/components/ui/Section';
import { getCurrentPacificTime } from '@/utils/time';

export default function TimeSection() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getCurrentPacificTime());
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section title="My time" fullWidth>
      <div className="space-y-8">
        <div className="text-4xl md:text-6xl font-light" style={{ fontFamily: 'var(--font-sf-pro-display)', color: '#9B9B9B' }}>
          {currentTime}
        </div>
        
        <div className="space-y-4 text-sm" style={{ fontFamily: 'var(--font-sf-pro-text)', color: '#9B9B9B' }}>
          <div><span className="text-white">© 2025 Digvijay Ingole. All rights reserved.</span></div>
        </div>
      </div>
    </Section>
  );
}