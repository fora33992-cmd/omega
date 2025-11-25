import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', showSubtitle = true }) => {
  // Brand Colors
  const navy = '#0B1C33';
  const orange = '#FF9900';
  const white = '#FFFFFF';

  // Logic: 
  // If variant is 'light' (for dark backgrounds), text should be White.
  // If variant is 'dark' (for light backgrounds), text should be Navy.
  // The 'G' is always Orange (or white if background is orange, but usually Orange).
  
  const primaryTextColor = variant === 'light' ? white : navy;
  const secondaryTextColor = variant === 'light' ? white : navy; // For M, E, A
  
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-1">
        
        {/* The 'O' Icon (SVG) */}
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 mr-1">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Outer Ring (Pipe Cross Section) */}
            <circle cx="50" cy="50" r="40" stroke={primaryTextColor} strokeWidth="18" />
            
            {/* Inner White/Hollow */}
            <circle cx="50" cy="50" r="30" fill="none" /> 

            {/* Orange Liquid Level inside O */}
            <path 
              d="M26 62 Q50 72 74 62 A30 30 0 0 1 26 62" 
              fill={orange}
            />
             {/* The Drop spilling out */}
            <path 
               d="M50 78 C50 78 50 90 50 90 C45 95 55 95 50 100" // Simplified drop path
               stroke={orange}
               strokeWidth="6"
               strokeLinecap="round"
               fill="none"
            />
            <circle cx="50" cy="94" r="4" fill={orange} />
          </svg>
        </div>

        {/* Text: MEGA (with G in Orange) */}
        <div className="flex items-baseline leading-none tracking-tight">
          <span className="text-4xl md:text-5xl font-display font-extrabold" style={{ color: primaryTextColor }}>M</span>
          <span className="text-4xl md:text-5xl font-display font-extrabold" style={{ color: primaryTextColor }}>E</span>
          <span className="text-4xl md:text-5xl font-display font-extrabold" style={{ color: orange }}>G</span>
          <span className="text-4xl md:text-5xl font-display font-extrabold" style={{ color: primaryTextColor }}>A</span>
        </div>
      </div>

      {/* Subtitle */}
      {showSubtitle && (
        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest mt-1 ml-1" style={{ color: primaryTextColor }}>
          Contracting & Petroleum Services CO
        </span>
      )}
    </div>
  );
};

export default Logo;