import { LineChart, BatteryCharging, Leaf, BookOpen, Download } from "lucide-react";
import * as React from "react";

export default function OurInsights() {
  const caseStudies = [
    {
      icon: <LineChart className="mx-auto w-10 h-10 text-emerald-600" />,
      title: "Grid Congestion Pilot",
      challenge: "Utility faced recurring congestion during peak hours.",
      solution: "Deployed SaaS load-balancing module.",
      result: "Reduced peak congestion by 18%, improving stability and lowering costs.",
    },
    {
      icon: <BatteryCharging className="mx-auto w-10 h-10 text-emerald-600" />,
      title: "Battery Optimization",
      challenge: "Industrial site underutilizing on-site storage.",
      solution: "Smart scheduling via SaaS battery optimizer.",
      result: "Achieved 12% cost savings and extended battery life.",
    },
    {
      icon: <Leaf className="mx-auto w-10 h-10 text-emerald-600" />,
      title: "CO₂ Tracking",
      challenge: "Corporate client needed real-time emissions reporting.",
      solution: "Integrated carbon intelligence module.",
      result: "Automated ESG reporting, tracking 200+ tons of CO₂ annually.",
    },
  ];

  const whitepapers = [
    {
      title: "Smart Grids and Flexibility",
      description: "A practical guide to managing demand and distributed energy resources with SaaS tools.",
      pages: "24 pages",
      format: "PDF",
      url: "/downloads/smart-grids.pdf",
      filename: "smart-grids.pdf",
    },
    {
      title: "Battery Storage Optimization",
      description: "Strategies for maximizing ROI on energy storage assets with intelligent scheduling.",
      pages: "18 pages",
      format: "PDF",
      url: "/downloads/battery-optimization.pdf",
      filename: "battery-optimization.pdf",
    },
    {
      title: "Decarbonization Playbook",
      description: "Framework for tracking CO₂ reductions and aligning with EU and global ESG goals.",
      pages: "20 pages",
      format: "PDF",
      url: "/downloads/decarbonization.pdf",
      filename: "decarbonization.pdf",
    },
  ];

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Our Insights</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  We deliver measurable impact through SaaS innovation in the energy
                  sector. Explore case studies and expert guides that showcase our
                  ability to reduce costs, optimize energy usage, and drive
                  sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <div className="mt-14">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Case Studies
          </h3>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl shadow bg-sky-50 hover:shadow-lg transition"
              >
                {study.icon}
                <h3 className="mt-4 font-semibold">{study.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                  <strong>Solution:</strong> {study.solution}
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                  <strong>Result:</strong> {study.result}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Whitepapers & Guides */}
        <div className="mt-14">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Whitepapers & Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl shadow bg-sky-50 hover:shadow-lg transition"
              >
                <BookOpen className="mx-auto w-10 h-10 text-emerald-600" />
                <h3 className="mt-4 font-semibold">{paper.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{paper.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>
                    {paper.pages} • {paper.format}
                  </span>
                  <button
                    onClick={() => handleDownload(paper.url, paper.filename)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPI Highlights */}
        <div className="mt-20 py-8 bg-emerald-600 rounded-2xl text-center text-white shadow">
          <h3 className="text-2xl font-bold">Impact at a Glance</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold">18%</p>
              <p className="text-sm">Peak congestion reduction</p>
            </div>
            <div>
              <p className="text-3xl font-bold">12%</p>
              <p className="text-sm">Cost savings with storage</p>
            </div>
            <div>
              <p className="text-3xl font-bold">200t+</p>
              <p className="text-sm">CO₂ tracked annually</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/get-in-touch"
            className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 text-center"></div>
      </div>
  );
};
