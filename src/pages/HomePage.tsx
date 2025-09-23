import { Target, Brain, Cog } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Energy SaaS Expertise',
      description:  ( <div className="space-y-2">
      <p className="font-bold">Built for the energy transition.</p>
      <p className="italic">
          Cloud-native SaaS solutions tailored to energy markets — enabling
          utilities, industries, and innovators to deploy fast and scale impact.
      </p>
    </div>
      )
    },
    {
      icon: <Brain className="h-8 w-8 text-cyan-500" />,
      title: 'Sustainability Impact',
      description: ( <div className="space-y-2">
      <p className="font-bold">Driving measurable decarbonization.</p>
      <p className="italic">
          From CO₂ tracking to grid flexibility, our solutions directly support
          Net Zero goals and ESG commitments.
      </p>
    </div>
      )
    },
    {
      icon: <Cog className="h-8 w-8 text-orange-500" />,
      title: 'Agile + AI Delivery',
      description: (
        <div className="space-y-2">
      <p className="font-bold">Where agility meets intelligence.</p>
      <p className="italic">
          Combining Agile excellence, AI innovation, and DevOps mastery to
          deliver faster, smarter, and more reliable results.
      </p>
    </div>
      )
    }
  ];

  const stats = [
    { number: '3+', label: 'MVP Pilots in Progress' },
    { number: '200t+', label: 'CO₂ Tracked Annually' },
    { number: '15+', label: 'Years Combined Team Expertise' },
    { number: '1', label: 'Mission: Accelerating Energy Transition' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <div className="space-y-2">
                "Agile. Automated. Augmented."{' '}
              </div>
                <span className="text-cyan-300">Smarter Delivery, Faster Energy Transformation.</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Expert consultancy in Agile delivery, AI innovation, and DevOps mastery — with SaaS 
                solutions designed for the global energy transition.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Agile team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Edge in Energy SaaS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <p className="font-bold">We Engineer End-to-End Digital Dominance.</p>
            <p className="italic">No off-the-shelf tools. No locked-in platforms. Just pure delivery excellence – tailored to your battlefield.</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-cyan-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <p className="italic"> Ready to deploy AI that delivers? </p>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
             Start Your Journey Today for Free Agile + AI Strategy Session with our expert Agile, AI, and DevOps solutions suite.
          </p>
          <div className="mt-10 text-center">
          <a
            href="/get-in-touch"
            className="px-6 py-3 rounded-2xl bg-orange-500 text-white font-semibold shadow hover:bg-emerald-700"
          >
            Get Started
          </a>
        </div>
        </div>
      </section>
    </div>
  );
};