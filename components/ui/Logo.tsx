import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/assets/images/pic/logoRed.png"
        alt="Finasddee"
        className="h-12 w-auto"
        width={180}
        height={48}
      />
    </Link>
  );
};
