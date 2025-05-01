import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none transition-colors"
      title="Toggle Dark Mode"
    >
      {/* Icon */}
      {isDarkMode ? (
        // Moon Icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293a8 8 0 11-10.586-10.586A8.003 8.003 0 0017.293 13.293z" />
        </svg>
      ) : (
        // Sun Icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15a5 5 0 100-10 5 5 0 000 10zM10 0a1 1 0 011 1v2a1 1 0 11-2 0V1a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM3.22 3.22a1 1 0 011.42 0L6 4.59a1 1 0 11-1.41 1.41L3.22 4.63a1 1 0 010-1.41zM16.78 16.78a1 1 0 01-1.41 0L14 15.41a1 1 0 111.41-1.41l1.37 1.37a1 1 0 010 1.41zM0 10a1 1 0 011-1h2a1 1 0 110 2H1a1 1 0 01-1-1zm16 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM3.22 16.78a1 1 0 010-1.41L4.59 14a1 1 0 111.41 1.41l-1.37 1.37a1 1 0 01-1.41 0zM16.78 3.22a1 1 0 010 1.41L15.41 6a1 1 0 11-1.41-1.41l1.37-1.37a1 1 0 011.41 0z" />
        </svg>
      )}

      {/* Label */}
      <span className="text-sm font-semibold">
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
