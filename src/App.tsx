import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import EnergySaaS from "./pages/EnergySaaS";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";
import WhoWeServe from "./pages/WhoWeServe";
import OurInsights from "./pages/OurInsights";
import GetInTouch from "./pages/GetInTouch";
import OurPartners from "./pages/OurPartners";
import JoinUs from "./pages/JoinUs";
import FutureOfAgile from "./pages/FutureOfAgile";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Shared Header */}
        <Header />

        <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/energy-saas" element={<EnergySaaS />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/our-insights" element={<OurInsights />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/future-of-agile" element={<FutureOfAgile />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}