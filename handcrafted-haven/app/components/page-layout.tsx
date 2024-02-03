import React from 'react';
import Navbar from './navbar';
import HandcraftedHavenLogo from './handcraftedhavenlogo';

const PageLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <>
    <Navbar />
    <div className="bg-light rounded-lg">
        { <HandcraftedHavenLogo /> }
    </div>
      <main className="flex min-h-screen flex-col p-6 bg-lightGreen">
        {children}
      </main>
    </>
  );
};

export default PageLayout;
