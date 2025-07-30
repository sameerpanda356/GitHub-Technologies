import React from 'react';
import { ArrowRight, CheckCircle, Users, Target, Zap, Code, Brain, Cog } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Agile Excellence',
      description: 'Master SCRUM, Kanban, SAFe, and other frameworks for optimal delivery'
    },
    {
      icon: <Brain className="h-8 w-8 text-cyan-500" />,
      title: 'AI Innovation',
      description: 'Cutting-edge AI solutions and intelligent automation for your business'
    },
    {
      icon: <Cog className="h-8 w-8 text-orange-500" />,
      title: 'DevOps Mastery',
      description: 'Streamlined CI/CD, infrastructure automation, and cloud optimization'
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              "Agile. Automated. Augmented."{' '}
                <span className="text-cyan-300">Smarter Delivery, Faster Transformation.</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Expert consultancy in Agile delivery, AI innovation, and DevOps mastery. 
                Accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Github Technologies?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep expertise in Agile methodologies with cutting-edge technology 
              to deliver exceptional results for your business transformation.
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
      <section className="py-20 bg-blue-900 text-white">
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
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have accelerated their growth with our 
            expert Agile, AI, and DevOps solutions.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;