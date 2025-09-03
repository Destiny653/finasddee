import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <img
        src="/assets/images/pic/logoRed.png"
        alt="Finasddee"
        className="h-12 w-auto"
        style={{ width: '180px' }}
      />
    </Link>
  );
};
