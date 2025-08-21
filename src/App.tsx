import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import WhatWeDo from './pages/WhatWeDo';
import WhoWeServe from './pages/WhoWeServe';
import WhoWeAre from './pages/WhoWeAre';
import OurInsights from './pages/OurInsights';
//import AegisAISuite from './pages/AegisAISuite';
import AIPodExpertise from './pages/AIPodExpertise';
import OurPartners from './pages/OurPartners';
import JoinUs from './pages/JoinUs';
import GetInTouch from './pages/GetInTouch';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import FutureOfAgile from './pages/FutureOfAgile';

function App(){

  const getCurrentPage = () => {
    if (window.location.hash) {
      return window.location.hash.substring(2); // Remove '#/'
    }
    const path = window.location.pathname.substring(1);
    return path || 'home';
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPage());

    // Add this useEffect to handle initial load
    useEffect(() => {
      const page = getCurrentPage();
      if (page !== currentPage) {
        setCurrentPage(page);
      }
    }, []);

    // Add this useEffect hook near the top of your App component
    useEffect(() => {
      // Redirect root ("/") to "/home" on initial load
      if (window.location.pathname === '/') {
        navigateTo('home'); // Use your existing navigation function
        window.history.replaceState({}, '', '/home'); // Update URL without adding to history
      }
    }, []); // Empty dependency array = runs once on mount

    // Create navigation handler
    const navigateTo = (page: string) => {
      setCurrentPage(page);
      window.history.pushState({}, '', `/${page}`);
      window.scrollTo(0, 0); // Scroll to top on page change
    };
  
    const renderPage = () => {
      switch (currentPage) {
        case 'what-we-do':
          return <WhatWeDo navigateTo = {navigateTo} />;
        case 'who-we-serve':
          return <WhoWeServe navigateTo = {navigateTo} />;
        case 'who-we-are':
          return <WhoWeAre navigateTo = {navigateTo} />;
        case 'our-insights':
          return <OurInsights navigateTo={navigateTo} />;
       // case 'aegis-ai-suite':
       //   return <AegisAISuite />;
       case 'ai-data-centers':
          return <AIPodExpertise navigateTo={navigateTo}/>;
        case 'our-partners':
          return <OurPartners />;
        case 'join-us':
          return <JoinUs />;
        case 'get-in-touch':
          return <GetInTouch />;
        case 'privacy-policy':
            return <PrivacyPolicy />;  
        case 'terms-of-service':
          return <TermsOfService />;
        case 'cookie-policy':
            return <CookiePolicy />;
        case 'future-of-agile':
            return <FutureOfAgile navigateTo={navigateTo} />;
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