import React from 'react';
import Link from 'next/link';
import { useClerk } from '@clerk/nextjs';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {

  return (
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between mb-5">
      <div className="flex items-center">
        <Link href="/">
          <b className="text-lg font-bold text-white">Your App Name</b>
        </Link>
      </div>
      <div className="flex items-center text-white">
      </div>
    </nav>
  );
};

export default Header;
