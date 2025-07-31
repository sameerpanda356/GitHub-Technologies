import React from 'react';
import { Building, Briefcase, Zap, TrendingUp, Users, Globe, CheckCircle } from 'lucide-react';

const WhoWeServe: React.FC = () => {
  const industries = [
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      name: 'Financial Services',
      description: 'Banks, fintech, insurance companies seeking agile transformation and digital innovation',
      challenges: ['Regulatory compliance', 'Legacy system modernization', 'Security requirements', 'Rapid market changes'],
      solutions: ['Agile compliance frameworks', 'Secure DevOps practices', 'AI-powered automation', 'Risk management']
    },
    {
      icon: <Briefcase className="h-12 w-12 text-cyan-500" />,
      name: 'Healthcare & Life Sciences',
      description: 'Healthcare providers, pharmaceutical companies, and medical device manufacturers',
      challenges: ['Patient data security', 'Regulatory approval processes', 'Research acceleration', 'Care quality improvement'],
      solutions: ['HIPAA-compliant agile processes', 'Clinical trial optimization', 'AI diagnostics', 'Secure cloud infrastructure']
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      name: 'Technology & SaaS',
      description: 'Software companies, startups, and technology enterprises scaling their operations',
      challenges: ['Product scalability', 'Faster time-to-market', 'Technical debt', 'Team coordination'],
      solutions: ['Scaled agile frameworks', 'Advanced CI/CD pipelines', 'Microservices architecture', 'Performance optimization']
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-500" />,
      name: 'E-commerce & Retail',
      description: 'Online retailers, marketplaces, and omnichannel retail organizations',
      challenges: ['Seasonal traffic spikes', 'Customer experience', 'Inventory optimization', 'Multi-channel integration'],
      solutions: ['Elastic infrastructure', 'AI-powered personalization', 'Real-time analytics', 'Omnichannel platforms']
    },
    {
      icon: <Users className="h-12 w-12 text-purple-500" />,
      name: 'Manufacturing',
      description: 'Industrial manufacturers implementing Industry 4.0 and smart factory initiatives',
      challenges: ['Production optimization', 'Supply chain visibility', 'Quality control', 'Equipment maintenance'],
      solutions: ['IoT integration', 'Predictive analytics', 'Agile manufacturing', 'Smart automation']
    },
    {
      icon: <Globe className="h-12 w-12 text-red-500" />,
      name: 'Government & Public Sector',
      description: 'Government agencies and public organizations modernizing citizen services',
      challenges: ['Legacy modernization', 'Citizen engagement', 'Transparency requirements', 'Budget constraints'],
      solutions: ['Government agile frameworks', 'Digital service delivery', 'Open data platforms', 'Secure cloud adoption']
    }
  ];

  const companyTypes = [
    {
      type: 'Startups & Scale-ups',
      description: 'Fast-growing companies needing agile processes and scalable technology foundations',
      benefits: ['Rapid MVP development', 'Scalable architecture', 'Investor-ready processes', 'Technical leadership']
    },
    {
      type: 'Mid-Market Companies',
      description: 'Established businesses ready to modernize operations and accelerate digital transformation',
      benefits: ['Process optimization', 'Technology modernization', 'Team capability building', 'Competitive advantage']
    },
    {
      type: 'Enterprise Organizations',
      description: 'Large corporations implementing enterprise-wide agile and digital transformation initiatives',
      benefits: ['Enterprise-scale solutions', 'Complex integration', 'Change management', 'Governance frameworks']
    }
  ];

  const caseStudies = [
    {
      industry: 'Financial Services',
      company: 'Regional Bank',
      challenge: 'Legacy loan processing taking 30+ days',
      solution: 'Agile transformation with AI-powered automation',
      result: 'GitHub Technologies reduced processing time to 3 days, 85% customer satisfaction increase'
    },
    {
      industry: 'Healthcare',
      company: 'Medical Research Lab',
      challenge: 'Slow clinical trial data analysis',
      solution: 'AI-powered analytics platform with DevOps automation',
      result: '60% faster analysis, $2M annual cost savings'
    },
    {
      industry: 'E-commerce',
      company: 'Online Retailer',
      challenge: 'Website crashes during peak sales periods',
      solution: 'Cloud-native architecture with auto-scaling DevOps',
      result: '99.9% uptime during Black Friday, 40% revenue increase'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Who We Serve</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We partner with organizations across industries to accelerate their digital transformation 
              and achieve sustainable competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Transform</h2>
            <p className="text-xl text-gray-600">
              Deep expertise across diverse sectors with tailored solutions for each industry's unique challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Challenges:</h4>
                  <ul className="space-y-1">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Solutions:</h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-sm text-blue-600 flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Types Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Sizes We Support</h2>
            <p className="text-xl text-gray-600">
              From agile startups to global enterprises, we scale our solutions to fit your organization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companyTypes.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{company.type}</h3>
                <p className="text-gray-600 mb-6">{company.description}</p>
                <div className="space-y-3">
                  {company.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from real clients across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100"
              >
                <div className="text-sm font-semibold text-blue-600 mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.company}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-1">Result:</h4>
                    <p className="text-green-700 text-sm font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Is Your Industry Listed?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Even if you don't see your specific industry above, GitHub Technologies' proven methodologies
            adapt to any business context. Let's discuss your unique challenges.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Discuss Your Needs
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhoWeServe;