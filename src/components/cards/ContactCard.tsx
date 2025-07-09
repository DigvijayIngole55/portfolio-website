import React from 'react';

interface ContactCardProps {
  contacts: Array<{
    label: string;
    value: string;
    link?: string;
  }>;
}

export default function ContactCard({ contacts }: ContactCardProps) {
  return (
    <div className="w-full">
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center py-2">
          <div className="text-base font-medium text-white mr-2" style={{ fontFamily: 'var(--font-sf-pro-display)' }}>
            {contact.label}
          </div>
          <div className="text-base font-normal text-[#A0A0A0]" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
            {contact.link ? (
              <a href={contact.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {contact.value}
              </a>
            ) : (
              contact.value
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 