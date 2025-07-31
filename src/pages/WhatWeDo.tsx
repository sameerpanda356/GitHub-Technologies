import React from 'react';
import { Users, Target, Zap, Brain, Cog, Code, CheckCircle, ArrowRight } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  const agileFrameworks = [
    {
      name: 'SCRUM',
      description: 'Iterative development with sprint-based delivery and continuous improvement',
      benefits: ['Faster time-to-market', 'Enhanced team collaboration', 'Improved product quality']
    },
    {
      name: 'Kanban',
      description: 'Visual workflow management for continuous delivery and flow optimization',
      benefits: ['Visual workflow clarity', 'Reduced bottlenecks', 'Flexible prioritization']
    },
    {
      name: 'SAFe',
      description: 'Scaled Agile Framework for enterprise-level agile transformation',
      benefits: ['Enterprise alignment', 'Portfolio management', 'Scaled delivery']
    },
    {
      name: 'Scrum@Scale',
      description: 'Scaling Scrum across multiple teams and departments effectively',
      benefits: ['Cross-team coordination', 'Scalable processes', 'Organizational agility']
    },
    {
      name: 'Extreme Programming (XP)',
      description: 'Engineering excellence with test-driven development and pair programming',
      benefits: ['Code quality', 'Technical excellence', 'Rapid feedback loops']
    },
    {
      name: 'Lean & Scrumban',
      description: 'Waste elimination and hybrid approaches for optimal efficiency',
      benefits: ['Waste reduction', 'Continuous flow', 'Hybrid flexibility']
    }
  ];

  const services = [
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: 'Agile Transformation',
      description: 'End-to-end agile transformation consulting with proven methodologies and frameworks.',
      features: ['Strategy & Planning', 'Team Training', 'Process Implementation', 'Performance Monitoring']
    },
    {
      icon: <Brain className="h-12 w-12 text-cyan-500" />,
      title: 'AI Solutions & Products',
      description: 'Custom AI development, machine learning models, and intelligent automation solutions.',
      features: ['Custom AI Development', 'ML Model Training', 'Process Automation', 'AI Strategy Consulting']
    },
    {
      icon: <Cog className="h-12 w-12 text-orange-500" />,
      title: 'DevOps Excellence',
      description: 'Complete DevOps transformation with CI/CD, infrastructure automation, and cloud optimization.',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Cloud Migration', 'Monitoring & Observability']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">What We Do</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We specialize in transforming businesses through expert Agile delivery, 
              cutting-edge AI solutions, and robust DevOps practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agile Frameworks Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Agile Frameworks We Master</h2>
            <p className="text-xl text-gray-600">
              Deep expertise across all major Agile methodologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agileFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{framework.name}</h3>
                <p className="text-gray-600 mb-6">{framework.description}</p>
                <div className="space-y-2">
                  {framework.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure successful transformation and delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Comprehensive analysis of current state and goals' },
              { step: '02', title: 'Strategy', description: 'Custom roadmap and implementation planning' },
              { step: '03', title: 'Implementation', description: 'Hands-on execution with expert guidance' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and performance tuning' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-blue-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can accelerate your transformation journey.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;