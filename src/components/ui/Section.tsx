import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({ title, children, className = '', fullWidth = false }: SectionProps) {
  if (fullWidth) {
    return (
      <div className={`mt-16 relative ${className}`}>
        <div className="absolute inset-0 left-[-100vw] right-[-100vw] py-16" style={{ backgroundColor: '#171717' }}></div>
        <div className="relative flex space-x-10 py-16 max-w-6xl mx-auto px-8">
          <div className="w-35 flex-shrink-0">
            <h2 className="text-base font-medium text-white" style={{ fontFamily: 'var(--font-sf-pro-display)' }}>
              {title}
            </h2>
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`mt-16 flex space-x-10 ${className}`}>
      <div className="w-35 flex-shrink-0">
        <h2 className="text-base font-medium text-white" style={{ fontFamily: 'var(--font-sf-pro-display)' }}>
          {title}
        </h2>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}