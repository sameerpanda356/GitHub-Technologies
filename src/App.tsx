import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import WhatWeDo from './pages/WhatWeDo';
import WhoWeServe from './pages/WhoWeServe';
import WhoWeAre from './pages/WhoWeAre';
import OurInsights from './pages/OurInsights';
import AegisAISuite from './pages/AegisAISuite';
import OurPartners from './pages/OurPartners';
import JoinUs from './pages/JoinUs';
import GetInTouch from './pages/GetInTouch';

function App() 
{
  const [currentPage, setCurrentPage] = useState('home');

    // Create navigation handler
    const navigateTo = (page: string) => {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Scroll to top on page change
    };
  
    const renderPage = () => {
      switch (currentPage) {
        case 'what-we-do':
          return <WhatWeDo />;
        case 'who-we-serve':
          return <WhoWeServe />;
        case 'who-we-are':
          return <WhoWeAre />;
        case 'our-insights':
          return <OurInsights />;
        case 'aegis-ai-suite':
          return <AegisAISuite />;
        case 'our-partners':
          return <OurPartners />;
        case 'join-us':
          return <JoinUs />;
        case 'get-in-touch':
          return <GetInTouch />;
        default:
          // Pass navigateTo function to HomePage
          return <HomePage navigateTo = {navigateTo} />;
      }
    };

    return (
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} setCurrentPage={navigateTo} />
        <main className="pt-16">
          {renderPage()}
        </main>
        <Footer setCurrentPage={navigateTo} />
        <ScrollToTop />
      </div>
    );
}

export default App;