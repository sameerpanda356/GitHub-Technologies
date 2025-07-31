import React from 'react';
import { Handshake, Award, Globe, Users, ArrowRight, Star, CheckCircle } from 'lucide-react';

const OurPartners: React.FC = () => {
  const strategyPartners = [
    {
      name: 'Microsoft',
      logo: '🔷',
      category: 'Technology Partner',
      description: 'Certified Microsoft Gold Partner specializing in Azure DevOps and AI solutions',
      partnership: 'Gold Partner',
      since: '2019',
      benefits: ['Azure credits for clients', 'Early access to new features', 'Technical support', 'Co-marketing opportunities']
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      category: 'Cloud Partner',
      description: 'AWS Advanced Consulting Partner with deep expertise in cloud-native solutions',
      partnership: 'Advanced Partner',
      since: '2020',
      benefits: ['AWS credits program', 'Architecture reviews', 'Migration assistance', 'Training resources']
    },
    {
      name: 'Atlassian',
      logo: '🔧',
      category: 'Agile Tools Partner',
      description: 'Platinum Solution Partner for Jira, Confluence, and agile toolchain optimization',
      partnership: 'Platinum Partner',
      since: '2018',
      benefits: ['Tool customization', 'Migration services', 'Training programs', 'Priority support']
    },
    {
      name: 'Scaled Agile',
      logo: '📈',
      category: 'Framework Partner',
      description: 'Authorized SAFe Program Consultant Partner with certified trainers and coaches',
      partnership: 'Authorized Partner',
      since: '2017',
      benefits: ['SAFe certification', 'Training delivery', 'Implementation support', 'Community access']
    }
  ];

  const technologyPartners = [
    {
      name: 'Docker',
      logo: '🐳',
      description: 'Container orchestration and microservices architecture expertise',
      specialization: 'DevOps & Containers'
    },
    {
      name: 'Kubernetes',
      logo: '⚙️',
      description: 'Cloud-native application deployment and management solutions',
      specialization: 'Orchestration'
    },
    {
      name: 'Jenkins',
      logo: '🔄',
      description: 'Continuous integration and deployment pipeline automation',
      specialization: 'CI/CD'
    },
    {
      name: 'Terraform',
      logo: '🏗️',
      description: 'Infrastructure as Code and cloud resource management',
      specialization: 'Infrastructure'
    },
    {
      name: 'Datadog',
      logo: '📊',
      description: 'Application performance monitoring and observability platform',
      specialization: 'Monitoring'
    },
    {
      name: 'Slack',
      logo: '💬',
      description: 'Team collaboration and agile communication solutions',
      specialization: 'Collaboration'
    }
  ];

  const industryPartners = [
    {
      name: 'Agile Alliance',
      logo: '🤝',
      description: 'Global nonprofit organization supporting agile software development',
      role: 'Community Leadership',
      contribution: 'Conference speaking, research collaboration, community building'
    },
    {
      name: 'DevOps Institute',
      logo: '🎓',
      description: 'Professional association advancing DevOps practices worldwide',
      role: 'Education Partner',
      contribution: 'Curriculum development, certification programs, training delivery'
    },
    {
      name: 'Scrum Alliance',
      logo: '🏆',
      description: 'Leading organization for Scrum education and certification',
      role: 'Training Partner',
      contribution: 'Certified training delivery, community events, thought leadership'
    },
    {
      name: 'AI Ethics Institute',
      logo: '🧠',
      description: 'Organization promoting responsible AI development and deployment',
      role: 'Advisory Board',
      contribution: 'Ethical AI guidelines, best practices development, policy advocacy'
    }
  ];

  const clientTestimonials = [
    {
      quote: "GitHub Technologies' partnership approach made our digital transformation seamless. Their deep expertise in both agile methodologies and AI integration delivered exceptional results.",
      author: "Sarah Johnson",
      title: "CTO, FinTech Solutions Inc.",
      company: "Fortune 500 Financial Services",
      result: "40% faster time-to-market"
    },
    {
      quote: "The combination of GitHub Technologies' consultancy and their technology partners created a perfect ecosystem for our DevOps transformation.",
      author: "Michael Chen",
      title: "VP of Engineering, HealthTech Corp",
      company: "Healthcare Technology",
      result: "60% reduction in deployment time"
    },
    {
      quote: "Working with GitHub Technologies and their partner network gave us access to best-in-class solutions and expertise. The results exceeded our expectations.",
      author: "Emma Rodriguez",
      title: "Head of Digital Innovation, RetailMax",
      company: "E-commerce Platform",
      result: "300% improvement in system reliability"
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Reach',
      description: 'Access to worldwide expertise and resources through our partner network'
    },
    {
      icon: <Award className="h-8 w-8 text-cyan-500" />,
      title: 'Certified Excellence',
      description: 'All partnerships maintain the highest certification and quality standards'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Collaborative Approach',
      description: 'Seamless integration between our teams and partner organizations'
    },
    {
      icon: <Star className="h-8 w-8 text-green-500" />,
      title: 'Innovation Access',
      description: 'Early access to cutting-edge technologies and methodologies'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Our Partners</h1>
              <p className="text-xl text-blue-100 mb-8">
                We collaborate with industry leaders to deliver comprehensive solutions that 
                drive your digital transformation success. Our strategic partnerships enable 
                us to provide world-class expertise and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                  <span>Become a Partner</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Partner Portal
                </button>
              </div>
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600">
              How our strategic partnerships enhance your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Partners</h2>
            <p className="text-xl text-gray-600">
              Long-term partnerships with industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategyPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{partner.logo}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                        {partner.partnership}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      Partner since {partner.since}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Partnership Benefits:</h4>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Partners</h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technology integrations for comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{partner.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                    <span className="text-blue-600 font-medium text-sm">{partner.specialization}</span>
                  </div>
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Partners</h2>
            <p className="text-xl text-gray-600">
              Collaborative relationships with leading industry organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{partner.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold text-gray-900">Role: </span>
                        <span className="text-blue-600">{partner.role}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Contribution: </span>
                        <span className="text-gray-700">{partner.contribution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Success stories from our collaborative partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100"
              >
                <div className="mb-6">
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-blue-600">{testimonial.title}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Become Our Partner</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our ecosystem of industry leaders and help us deliver exceptional 
            value to clients worldwide. Let's explore partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Partner with Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Partnership Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartners;