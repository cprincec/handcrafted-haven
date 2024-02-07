import React from 'react';
import Navbar from './navbar';
import HandcraftedHavenLogo from './handcraftedhavenlogo';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="rounded-lg bg-light">{<HandcraftedHavenLogo />}</div>
      <main className="flex min-h-screen flex-col bg-lightGreen p-6">
        {children}
      </main>
    </>
  );
};

export default PageLayout;
