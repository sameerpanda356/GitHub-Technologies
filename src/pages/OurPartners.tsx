import React from 'react';

const OurPartners: React.FC = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Partnerships that Power the Energy Transition</h1>
              <p className="text-xl text-blue-100 mb-6">
                  We partner with technology pioneers and energy innovators to deliver SaaS solutions that
                  accelerate decarbonization, enable grid flexibility, 
                  and create smarter digital ecosystems worldwide.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Partnership collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Partnership Benefits
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Partnerships that accelerate the energy transition and deliver measurable impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">Co-Innovation</h3>
              <p className="text-gray-600 text-sm">
                Shape and test SaaS energy solutions collaboratively — from pilot to full-scale rollout.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">Market Validation</h3>
              <p className="text-gray-600 text-sm">
                Validate solutions in real-world energy environments through pilots, accelerators, and early adopters.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">Sustainability Impact</h3>
              <p className="text-gray-600 text-sm">
                Contribute to measurable CO₂ savings, grid flexibility, and ESG value creation.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">Growth & Visibility</h3>
              <p className="text-gray-600 text-sm">
                Access joint go-to-market opportunities, investor networks, and thought-leadership platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Strategic Partners
            </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🔷</span>
                <h3 className="font-semibold text-xl text-gray-800">Microsoft</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Collaboration on cloud-native SaaS architectures, energy data
                management, and sustainable infrastructure.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">☁️</span>
                <h3 className="font-semibold text-xl text-gray-800">AWS</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Joint innovation in AI-driven analytics and scalable SaaS platforms
                that support energy and sustainability use cases.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">⚡</span>
                <h3 className="font-semibold text-xl text-gray-800">
                  Siemens Energy
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Exploring solutions for grid flexibility, renewable integration, and
                decarbonization through SaaS and digital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                  Technology Partners
              </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">Docker & Kubernetes</h3>
              <p className="text-gray-600 text-sm">
                Modern cloud-native stack for scalable SaaS deployments, ensuring high availability and efficiency.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">Energy Web Foundation</h3>
              <p className="text-gray-600 text-sm">
                Open-source digital infrastructure for accelerating the energy transition and enabling decentralized solutions.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">OpenAI APIs</h3>
              <p className="text-gray-600 text-sm">
                AI-driven insights and automation powering smarter decision-making in energy SaaS applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Industry Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">SmartEn (Smart Energy Europe)</h3>
              <p className="text-gray-600 text-sm">
                Driving flexibility markets and decentralized energy innovation across Europe.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">Eurelectric</h3>
              <p className="text-gray-600 text-sm">
                Partnering with Europe’s electricity industry to advance sustainable, customer-focused SaaS solutions.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">Startup Accelerators</h3>
              <p className="text-gray-600 text-sm">
                Collaborating with innovation hubs and accelerators to validate, scale, and commercialize our SaaS energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              What Our Partners Say
            </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <p className="italic text-gray-700 mb-4">
                “GitHub Technologies accelerated our grid flexibility pilots with their
                SaaS expertise. We achieved measurable CO₂ savings within months.”
              </p>
              <p className="font-semibold text-gray-900">
                Innovation Lead, European Utility
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
              <p className="italic text-gray-700 mb-4">
                “Their platform approach helped us scale congestion management trials
                while reducing integration costs by 40%.”
              </p>
              <p className="font-semibold text-gray-900">
                Head of Smart Grids, Energy Startup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Energy SaaS Ecosystem</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
              Collaborate with us to accelerate the global energy transition. Together,
              we can deliver SaaS solutions that cut CO₂ emissions, increase flexibility,
              and unlock new value for energy markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-in-touch"
              className="inline-block px-8 py-4 rounded-lg bg-orange-500 text-white font-semibold rounded-xl shadow hover:bg-orange-600 transition"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartners;