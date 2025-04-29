'use client'

import { useState, useEffect } from 'react';

const Toggle = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (active) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [active]);

  return (
    <button
      onClick={() => setActive((prev) => !prev)}
      className={`fixed bottom-3 left-3 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
        active ? 'bg-white' : 'bg-black'
      }`}
    >
      {active ? (
        <img src="/light_mode.svg" alt="Light Mode" className="w-6 h-6" />
      ) : (
        <img src="/dark_mode.svg" alt="Dark Mode" className="w-6 h-6" />
      )}
    </button>
  );
}

export default Toggle;