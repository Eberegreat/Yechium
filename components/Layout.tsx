
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-dark">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
