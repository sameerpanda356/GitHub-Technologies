import React from 'react';
import { Brain, Zap, Target, BarChart3, Shield, Cpu, CheckCircle, ArrowRight, Play } from 'lucide-react';

const AegisAISuite: React.FC = () => {
  const products = [
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      name: 'AegisAI Planner',
      description: 'Intelligent sprint planning and story estimation powered by machine learning',
      features: [
        'Automated story point estimation',
        'Sprint capacity optimization',
        'Predictive velocity analysis',
        'Risk assessment and mitigation'
      ],
      benefits: '40% faster sprint planning, 25% improved velocity accuracy'
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-cyan-500" />,
      name: 'AegisAI Analytics',
      description: 'Advanced analytics and insights for data-driven agile decision making',
      features: [
        'Real-time team performance metrics',
        'Predictive burndown analysis',
        'Bottleneck identification',
        'Custom dashboard creation'
      ],
      benefits: '60% faster issue identification, 30% improved team productivity'
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      name: 'AegisAI DevOps',
      description: 'Intelligent DevOps automation with AI-powered pipeline optimization',
      features: [
        'Smart deployment strategies',
        'Automated testing optimization',
        'Infrastructure cost prediction',
        'Performance anomaly detection'
      ],
      benefits: '50% reduction in deployment failures, 35% cost optimization'
    },
    {
      icon: <Shield className="h-12 w-12 text-green-500" />,
      name: 'AegisAI Security',
      description: 'AI-driven security scanning and vulnerability assessment for DevSecOps',
      features: [
        'Intelligent code vulnerability scanning',
        'Automated security compliance checks',
        'Threat pattern recognition',
        'Risk prioritization matrix'
      ],
      benefits: '70% faster vulnerability detection, 90% reduction in false positives'
    }
  ];

  const integrations = [
    { name: 'Jira', logo: '🔧' },
    { name: 'Azure DevOps', logo: '☁️' },
    { name: 'GitHub', logo: '📁' },
    { name: 'Jenkins', logo: '⚙️' },
    { name: 'Kubernetes', logo: '🚢' },
    { name: 'AWS', logo: '📊' },
    { name: 'Slack', logo: '💬' },
    { name: 'Teams', logo: '👥' }
  ];

  const demos = [
    {
      title: 'Sprint Planning with AI',
      description: 'See how AegisAI Planner automatically estimates story points and optimizes sprint capacity',
      duration: '3:24',
      thumbnail: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Explore the powerful analytics capabilities and custom dashboard creation',
      duration: '4:12',
      thumbnail: 'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg'
    },
    {
      title: 'Automated DevOps Pipeline',
      description: 'Watch how AI optimizes your CI/CD pipeline for maximum efficiency',
      duration: '5:38',
      thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'per team/month',
      features: [
        'Up to 10 team members',
        'Basic AI planning features',
        'Standard analytics',
        'Email support',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'per team/month',
      features: [
        'Up to 50 team members',
        'Advanced AI planning & analytics',
        'DevOps automation',
        'Priority support',
        'All integrations',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Unlimited team members',
        'Full AI suite access',
        'Custom AI model training',
        'Dedicated support',
        'On-premise deployment',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                AegisAI Suite
                <span className="block text-cyan-300 text-3xl mt-2">
                  Intelligent Agile & DevOps Platform
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your agile and DevOps practices with our comprehensive AI-powered platform. 
                From intelligent sprint planning to automated pipeline optimization, AegisAI Suite 
                makes your teams more efficient, predictable, and successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="AegisAI Suite Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Cpu className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="text-gray-900 font-semibold">AI-Powered</p>
                    <p className="text-gray-600 text-sm">Smart Automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h2>
            <p className="text-xl text-gray-600">
              A comprehensive suite of AI tools designed to optimize every aspect of your agile and DevOps journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{product.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                      <p className="text-blue-800 font-semibold text-sm">{product.benefits}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Videos Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See AegisAI in Action</h2>
            <p className="text-xl text-gray-600">
              Watch these short demos to see how our AI-powered tools transform agile and DevOps workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={demo.thumbnail}
                    alt={demo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-blue-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                      <Play className="h-8 w-8" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {demo.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{demo.title}</h3>
                  <p className="text-gray-600">{demo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600">
              Connect with your existing tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="text-3xl mb-2">{integration.logo}</div>
                <p className="text-sm font-medium text-gray-700">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options to fit your team size and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-lg mb-6">
                    <span className="font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">{plan.price}</div>
                  <p className="text-gray-600">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using AegisAI Suite to accelerate their agile and DevOps practices. 
            Start your free trial today and experience the power of AI-driven optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start 30-Day Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AegisAISuite;