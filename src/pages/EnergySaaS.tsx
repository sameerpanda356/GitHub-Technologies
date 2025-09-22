import { Zap, BatteryCharging, Leaf, BarChart } from "lucide-react";
import Header from "../components/Header";
import * as React from "react";

export default function EnergySaaS() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="min-h-screen">

          {/* Hero Section */}

          <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-6">Driving the Energy Transition with SaaS Innovation</h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    We deliver real-time optimization, carbon intelligence, and flexibility
                    management for utilities, grid operators, and energy-intensive industries.
                </p>
              </div>
            </div>
          </section>

          {/* Metrics Bar */}
          <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl shadow bg-sky-50">
                <p className="text-3xl font-bold text-emerald-700">15%</p>
                <p className="text-gray-600">Energy Waste Reduced</p>
              </div>
              <div className="p-6 rounded-2xl shadow bg-sky-50">
                <p className="text-3xl font-bold text-emerald-700">100t</p>
                <p className="text-gray-600">CO₂ Tracked & Saved</p>
              </div>
              <div className="p-6 rounded-2xl shadow bg-sky-50">
                <p className="text-3xl font-bold text-emerald-700">24/7</p>
                <p className="text-gray-600">Real-time Optimization</p>
              </div>
            </div>
          </section>

          {/* Product Snapshot */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Live Energy Intelligence Dashboard
              </h2>
              <img
                src="./public/dashboard-mockup.png"
                alt="Energy SaaS Dashboard"
                className="rounded-2xl shadow-lg mx-auto"
              />
              <p className="mt-4 text-gray-600">
                Track performance, emissions, and costs in real time with our intuitive platform.
              </p>
            </div>
          </section>

          {/* Value Proposition Cards */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-2xl shadow bg-sky-50 hover:shadow-lg transition">
                <Zap className="mx-auto w-10 h-10 text-emerald-600" />
                <h3 className="mt-4 font-semibold">Grid Congestion Relief</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Balance demand & supply in real time to avoid grid bottlenecks.
                </p>
              </div>
              <div className="p-6 rounded-2xl shadow bg-sky-50 hover:shadow-lg transition">
                <BatteryCharging className="mx-auto w-10 h-10 text-emerald-600" />
                <h3 className="mt-4 font-semibold">Battery Optimization</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Maximize ROI of energy storage with smart charge/discharge cycles.
                </p>
              </div>
              <div className="p-6 rounded-2xl shadow bg-sky-50 hover:shadow-lg transition">
                <Leaf className="mx-auto w-10 h-10 text-emerald-600" />
                <h3 className="mt-4 font-semibold">CO₂ Tracking</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Monitor carbon intensity and align with EU sustainability goals.
                </p>
              </div>
              <div className="p-6 rounded-2xl shadow bg-sky-50 hover:shadow-lg transition">
                <BarChart className="mx-auto w-10 h-10 text-emerald-600" />
                <h3 className="mt-4 font-semibold">Forecasting</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Predict demand, supply & price volatility using AI-driven models.
                </p>
              </div>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="py-12 bg-emerald-600 text-center text-white">
            <h2 className="text-2xl font-bold">Let’s build the future of clean energy SaaS together</h2>
            <a
              href="/get-in-touch"
              className="mt-6 inline-block px-6 py-3 rounded-2xl bg-white text-emerald-700 font-semibold shadow hover:bg-gray-100"
            >
              Get in Touch
            </a>
          </section>
     </div>
    </div>
  );
}