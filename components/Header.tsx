
import React from 'react';
import { Page } from '../types';
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from '../constants';
import { Cog8ToothIcon } from './icons';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  // FIX: Explicitly type NavLink as React.FC to correctly handle React-specific props like `key`.
  const NavLink: React.FC<{ pageName: Page | string }> = ({ pageName }) => (
    <button
      onClick={() => setCurrentPage(pageName as Page)}
      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        currentPage === pageName
          ? 'text-blue-600'
          : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      {pageName}
    </button>
  );

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
             <button onClick={() => setCurrentPage('Home')} className="flex items-center text-gray-800 hover:text-blue-600 transition-colors">
                <Cog8ToothIcon className="h-8 w-8 text-blue-700" />
                <h1 className="text-xl font-bold ml-2">Maruthi Toolings</h1>
            </button>
            <nav className="hidden md:flex items-center ml-8 space-x-4">
              {NAV_LINKS_LEFT.map((link) => (
                <NavLink key={link} pageName={link} />
              ))}
            </nav>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            {NAV_LINKS_RIGHT.map((link) => (
              <NavLink key={link} pageName={link} />
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
