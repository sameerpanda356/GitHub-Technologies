import { Zap, BatteryCharging, Leaf, BarChart } from 'lucide-react';


export default function WhatWeDo() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">SaaS Innovation, Powered by AI & Agile</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We design and deliver SaaS platforms that accelerate digital transformation. 
                Today we focus on the global energy transition — tomorrow our models extend 
                to Banking, FinTech, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How We Deliver SaaS Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">SaaS Platform Development</h3>
              <p className="text-gray-600 text-sm">
                Cloud-native, modular platforms designed for scalability in multiple 
                domains — from Energy to FinTech.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">AI & Data Intelligence</h3>
              <p className="text-gray-600 text-sm">
                Embedding AI and predictive analytics into SaaS platforms for smarter 
                decisions in energy, finance, and beyond.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">Agile + DevOps Enablement</h3>
              <p className="text-gray-600 text-sm">
                Accelerating SaaS delivery with Agile frameworks and DevOps practices 
                that ensure speed, reliability, and adaptability across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">              
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Domain Solutions: Energy Transition
            </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-sky-50 text-center">
              <Zap className="mx-auto w-10 h-10 text-emerald-600" />
              <h4 className="mt-4 font-semibold">Grid Congestion Relief</h4>
              <p className="text-sm text-gray-600 mt-2">
                  SaaS-driven optimization tools to reduce grid stress and unlock 
                  renewable integration.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-sky-50 text-center">
              <BatteryCharging className="mx-auto w-10 h-10 text-emerald-600" />
              <h4 className="mt-4 font-semibold">Battery Optimization</h4>
              <p className="text-sm text-gray-600 mt-2">
                  AI-enabled scheduling and trading to maximize battery value across 
                  flexibility markets.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-sky-50 text-center">
              <Leaf className="mx-auto w-10 h-10 text-emerald-600" />
              <h4 className="mt-4 font-semibold">CO₂ Tracking</h4>
              <p className="text-sm text-gray-600 mt-2">
                  Real-time monitoring and reporting of emissions to support Net Zero 
                  and ESG commitments.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-sky-50 text-center">
              <BarChart className="mx-auto w-10 h-10 text-emerald-600" />
              <h4 className="mt-4 font-semibold">Forecasting & Intelligence</h4>
              <p className="text-sm text-gray-600 mt-2">
                  Advanced analytics and AI forecasts for demand, supply, and flexibility markets.
              </p>
            </div>
          </div>
            <p className="mt-12 text-center text-gray-600 text-md">
                Our SaaS delivery model is adaptable — enabling future solutions across Banking, 
                FinTech, and other data-driven industries.
            </p>
        </div>
      </section>

      {/* Agile Frameworks Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Agile Frameworks for SaaS Delivery
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We don’t just “use Agile” — we adapt Agile to SaaS. From backlog to 
            production, our frameworks ensure faster launches, predictable outcomes, 
            and resilience in evolving markets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-2">Iterative SaaS Releases</h3>
              <p className="text-sm text-gray-600">Deliver value in weeks, not months, with SaaS features rolled out incrementally.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-2">Cross-Domain Scalability</h3>
              <p className="text-sm text-gray-600">Frameworks that work today for Energy SaaS, and tomorrow for Banking or FinTech SaaS.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-2">Continuous Adaptation</h3>
              <p className="text-sm text-gray-600">Feedback loops and metrics ensure SaaS evolves with business needs and regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-sky-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Proven SaaS Delivery Process
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A clear, repeatable process that reduces risk and accelerates 
            digital transformation — starting with Energy SaaS and ready to 
            scale across industries.
          </p>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-emerald-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              
              <div className="relative bg-white p-6 rounded-xl shadow hover:shadow-md">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="font-semibold text-lg mb-2">Discover</h3>
                <p className="text-sm text-gray-600">Co-create strategy, align on outcomes, and define SaaS roadmap.</p>
              </div>

              <div className="relative bg-white p-6 rounded-xl shadow hover:shadow-md">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="font-semibold text-lg mb-2">Design</h3>
                <p className="text-sm text-gray-600">UX, architecture, and modular SaaS blueprints tailored to industry needs.</p>
              </div>

              <div className="relative bg-white p-6 rounded-xl shadow hover:shadow-md">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="font-semibold text-lg mb-2">Deliver</h3>
                <p className="text-sm text-gray-600">Agile sprints, AI-enabled insights, and DevOps automation drive releases.</p>
              </div>

              <div className="relative bg-white p-6 rounded-xl shadow hover:shadow-md">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
                <h3 className="font-semibold text-lg mb-2">Scale</h3>
                <p className="text-sm text-gray-600">Expand across domains — from Energy SaaS today to FinTech SaaS tomorrow.</p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6"><p className='italic'>Partner With Us to Shape the Future of SaaS</p></h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
              We’re building SaaS platforms that accelerate digital transformation — 
              starting with Energy Transition. Together, we can scale these models 
              into Banking, FinTech, and beyond.  
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-in-touch"
              className="inline-block px-8 py-4 rounded-lg bg-orange-500 text-white font-semibold rounded-xl shadow hover:bg-orange-600 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}