import React from 'react';
import { ComputerDesktopIcon, MapPinIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import { profileData } from '@/constants/profileData';

export default function ProfileInfo() {
  return (
    <div className="absolute top-[-13vh] left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex items-center space-x-10">
        <img 
          className="h-35 w-35 rounded-full object-cover object-center" 
          src="/Digvijay.png" 
          alt="Profile picture of Digvijay Ingole"
          style={{
            objectPosition: 'center 25%',
            objectFit: 'cover',
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/112x112/e0e0e0/000000?text=DI&font=sans-serif';
          }}
        />
        
        <div>
          <div className="flex items-center">
            <h1 className="text-3xl font-medium text-white" style={{ fontFamily: 'var(--font-sf-pro-display)' }}>
              {profileData.name}
            </h1>
            <span className="ml-4 text-sm font-medium text-gray-400 px-3 py-1.5 rounded-lg" style={{ fontFamily: 'var(--font-sf-pro-text)', backgroundColor: '#171717', border: '1px solid #262626' }}>
              {profileData.pronouns}
            </span>
          </div>
          
          <div className="mt-4 flex items-center space-x-8 text-sm font-medium" style={{ fontFamily: 'var(--font-sf-pro-text)', color: '#9B9B9B' }}>
            <div className="flex items-center">
              <ComputerDesktopIcon className="w-5 h-5 mr-2" style={{ color: '#9B9B9B' }} />
              <span>{profileData.jobTitle}</span>
            </div>
            
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2" style={{ color: '#9B9B9B' }} />
              <span>{profileData.location}</span>
            </div>
            
            <div className="flex items-center">
              <EnvelopeIcon className="w-5 h-5 mr-2" style={{ color: '#9B9B9B' }} />
              <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors">
                <span>E-Mail</span>
              </a>
            </div>
            
            <div className="flex items-center">
              <UserIcon className="w-5 h-5 mr-2" style={{ color: '#9B9B9B' }} />
              <a href={profileData.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span>LinkedIn</span>
              </a>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" style={{ color: '#9B9B9B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <a href={profileData.resume} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}