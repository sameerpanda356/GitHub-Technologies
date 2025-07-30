import React from 'react';
import { Users, Heart, TrendingUp, Award, MapPin, Clock, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';

const JoinUs: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior Agile Coach',
      department: 'Consulting',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead agile transformations for enterprise clients, mentor teams, and drive organizational change.',
      requirements: [
        'Certified Scrum Master (CSM) or equivalent',
        'SAFe SPC or similar enterprise agile certification',
        '5+ years of agile coaching experience',
        'Strong communication and facilitation skills'
      ],
      benefits: ['$120k - $160k salary', 'Flexible remote work', 'Professional development budget', 'Equity participation']
    },
    {
      title: 'AI/ML Solutions Architect',
      department: 'Technology',
      location: 'San Francisco / Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement AI solutions for enterprise clients, lead technical teams, and drive innovation.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '7+ years experience in AI/ML development',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong Python, TensorFlow, PyTorch skills'
      ],
      benefits: ['$150k - $200k salary', 'Stock options', 'Conference attendance', 'Innovation time']
    },
    {
      title: 'DevOps Engineer',
      department: 'Technology',
      location: 'Austin / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain CI/CD pipelines, implement infrastructure as code, and ensure system reliability.',
      requirements: [
        'Strong experience with Kubernetes and Docker',
        'Proficiency in Terraform and infrastructure as code',
        'Experience with cloud platforms and monitoring tools',
        'Knowledge of security best practices'
      ],
      benefits: ['$100k - $140k salary', 'Remote work flexibility', 'Training budget', 'Health benefits']
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'New York / Chicago',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive new business acquisition, build client relationships, and expand market presence.',
      requirements: [
        'B2B sales experience in technology consulting',
        'Understanding of agile methodologies and DevOps',
        'Strong network in enterprise technology space',
        'Excellent presentation and negotiation skills'
      ],
      benefits: ['$90k base + commission', 'Car allowance', 'Performance bonuses', 'Travel opportunities']
    },
    {
      title: 'UX/UI Designer',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design user experiences for our AegisAI Suite, create intuitive interfaces, and conduct user research.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        'Proficiency in Figma, Adobe Creative Suite',
        'Experience with user research and testing',
        'Portfolio demonstrating B2B software design'
      ],
      benefits: ['$80k - $120k salary', 'Design tool budget', 'Flexible hours', 'Creative freedom']
    },
    {
      title: 'Technical Writer',
      department: 'Marketing',
      location: 'Remote',
      type: 'Contract',
      experience: '2+ years',
      description: 'Create technical documentation, blog posts, and marketing content for our services and products.',
      requirements: [
        'Strong writing skills with technical background',
        'Experience with agile methodologies',
        'Knowledge of DevOps and AI concepts',
        'Portfolio of technical writing samples'
      ],
      benefits: ['$40-60/hour contract', 'Flexible schedule', 'Byline opportunities', 'Portfolio building']
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, equity participation, and performance bonuses'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      title: 'Professional Growth',
      description: 'Continuous learning budget, conference attendance, and certification support'
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policy'
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-500" />,
      title: 'Collaborative Culture',
      description: 'Diverse team, inclusive environment, and team building activities'
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: 'Recognition & Rewards',
      description: 'Regular recognition programs, innovation awards, and career advancement'
    }
  ];

  const cultureValues = [
    {
      value: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      value: 'Collaboration',
      description: 'We believe in the power of teamwork and foster an environment of mutual support.'
    },
    {
      value: 'Excellence',
      description: 'We strive for the highest quality in everything we do and continuously improve.'
    },
    {
      value: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical standards in all our interactions.'
    },
    {
      value: 'Growth',
      description: 'We invest in our people\'s development and provide opportunities for career advancement.'
    },
    {
      value: 'Impact',
      description: 'We focus on creating meaningful change for our clients and communities.'
    }
  ];

  const applicationProcess = [
    {
      step: '1',
      title: 'Apply Online',
      description: 'Submit your resume and cover letter through our careers portal'
    },
    {
      step: '2',
      title: 'Initial Screening',
      description: 'Phone/video call with our talent acquisition team'
    },
    {
      step: '3',
      title: 'Technical Interview',
      description: 'In-depth discussion with hiring manager and team members'
    },
    {
      step: '4',
      title: 'Final Interview',
      description: 'Meet with leadership team and potential colleagues'
    },
    {
      step: '5',
      title: 'Offer & Onboarding',
      description: 'Receive offer and begin your journey with AegisAgile'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Be part of a dynamic team that's transforming businesses through agile excellence, 
              AI innovation, and DevOps mastery. Shape the future of technology consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">
              Comprehensive benefits and perks that support your professional and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our team and drive our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureValues.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.value}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Exciting opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{position.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <span
                              key={benefitIndex}
                              className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 flex flex-col justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Our streamlined hiring process designed to find the best fit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't see a position that matches your skills? We're always looking for talented 
            individuals who share GitHub Technologies' passion for excellence and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Send Your Resume
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Contact HR Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;