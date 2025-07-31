import React from 'react';
import { ArrowRight, CheckCircle, Users, Target, Zap, Code, Brain, Cog } from 'lucide-react';

// Update component definition to accept props
interface HomePageProps {
  navigateTo: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Agile Excellence',
      description:  ( <div className="space-y-2">
      <p className="font-bold">Your Shortcut to Software That Wins.</p>
      <p className="italic">Beyond sprints – we engineer outcomes. Faster time-to-market, higher quality, delighted users.</p>
      <p className="font-bold">Partner with us for relentless value flow & real-time adaptability.</p>
      <p className="italic">Where your vision meets predictable execution.</p>
    </div>
      )
    },
    {
      icon: <Brain className="h-8 w-8 text-cyan-500" />,
      title: 'AI Innovation',
      description: ( <div className="space-y-2">
      <p className="font-bold">AI Innovation × Agile Excellence = Unstoppable Delivery.</p>
      <p className="italic">Ditch AI pilot purgatory. We integrate LLMs, automation, and predictive analytics into your Agile core.</p>
      <p className="font-bold">De-risk innovation. Scale value. Own your evolution.</p>
    </div>
      )
    },
    {
      icon: <Cog className="h-8 w-8 text-orange-500" />,
      title: 'DevOps Mastery',
      description: (
        <div className="space-y-2">
      <p className="font-bold">Beyond Tools: DevOps Mastery That Unlocks Agile’s Promise.</p>
      <p className="italic">We break siloes, automate compliance, and harden your CI/CD backbone.</p>
      <p className="font-bold">Ship features fearlessly. Innovate without bottlenecks.</p>
    </div>
      )
    }
  ];

  const stats = [
    { number: '10+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Expert Consultants' },
    { number: '5+', label: 'Years Experience' }
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
                <span className="text-cyan-300">Smarter Delivery, Faster Transformation.</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Expert consultancy in Agile delivery, AI innovation, and DevOps mastery. 
                Accelerate your digital transformation journey.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Agile team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="text-gray-900 font-semibold">GitHub Technologies</p>
                    <p className="text-gray-600">15+ Successful Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">
              Why Choose Github Technologies?
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
          <button 
            onClick={() => navigateTo('get-in-touch')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;