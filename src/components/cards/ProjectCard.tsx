'use client';

import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  year?: string;
  detailedDescription?: string;
  bulletPoints?: string[];
  tags?: string[];
  alt: string;
  liveLink?: string;
  githubLink?: string;
}

export default function ProjectCard({ image, title, description, year, detailedDescription, bulletPoints, tags, alt, liveLink, githubLink }: ProjectCardProps) {
  return (
    <div className="bg-[#1C1C1C] rounded-lg border border-[#383838] transition-all duration-300 overflow-hidden group hover:border-[#525252]"> {/* Darker background, border on hover */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300" // Fixed height for image, subtle scale on hover
        />
        {/* Optional: Add an overlay to the image for better text readability if text were to be directly on the image */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div> */}
      </div>
      <div className="p-4 pt-3 transition-colors duration-300 bg-[#1C1C1C] group-hover:bg-[#282828]"> {/* Reduced padding, adjusted hover background for entire text area */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-medium text-white" style={{ fontFamily: 'var(--font-sf-pro-display)' }}> {/* Adjusted font size and margin */}
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-[#9B9B9B] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-[#9B9B9B] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm text-[#A0A0A0]" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
            {description}
          </p>
          {year && (
            <span className="text-xs text-[#9B9B9B]" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
              • {year}
            </span>
          )}
        </div>
        {detailedDescription && (
          <p className="text-xs text-[#9B9B9B] mb-3 leading-relaxed" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
            {detailedDescription}
          </p>
        )}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="space-y-1 mb-3">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-xs text-[#9B9B9B] flex items-start" style={{ fontFamily: 'var(--font-sf-pro-text)' }}>
                <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium text-gray-300 rounded-md border"
                style={{ 
                  fontFamily: 'var(--font-sf-pro-text)',
                  backgroundColor: '#171717',
                  borderColor: '#262626'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}