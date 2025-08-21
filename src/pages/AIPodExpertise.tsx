import React from 'react';
import { 
  Cpu, 
  Server, 
  Zap, 
  DollarSign, 
  Award, 
  Clock,
  BarChart3,
  Cloud,
  Shield
} from 'lucide-react';

const handleDownloadBrochure = async () => {
    try {
      const brochureUrl = '/whitepapers/ai-pod-brochure.pdf';
      const filename = 'GitHub-Technologies-AI-Pod-Brochure.pdf';
      
      // Use absolute URL in production
      const absoluteUrl = process.env.NODE_ENV === 'production' 
        ? brochureUrl 
        : `${window.location.origin}${brochureUrl}`;
      
      const response = await fetch(absoluteUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      
      const blob = await response.blob();
      
      // Detect if it's a PDF
      if (blob.type !== 'application/pdf') {
        throw new Error('Invalid file type');
      }
      
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }, 100);
    } catch (error) {
      console.error('Download error:', error);
      
      // Proper error handling for TypeScript's unknown type
      let errorMessage = 'Failed to download brochure';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      alert(`Download failed: ${errorMessage}`);
    }
  };

// Update component definition to accept props
interface AIPodExpertiseProps {
  navigateTo: (page: string) => void;
}

//const AIPodExpertise = () => {
  const AIPodExpertise: React.FC<AIPodExpertiseProps> = ({ navigateTo }) => {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Data Center Infrastructure Expert",
      bio: "15+ years designing and implementing hyperscale data centers. Former lead architect at Google's data center division. Specialized in modular, scalable designs with PUE optimization.",
      expertise: "Thermal Management, Power Distribution, Scalable Architecture",
      image: "/images/team/elena-rodriguez.jpg" // Placeholder path
    },
    {
      name: "Marcus Chen",
      role: "AI/GPU Hardware Specialist",
      bio: "Expert in high-performance computing infrastructure. Designed GPU clusters for top AI research institutions. NVIDIA DGX certified architect with background in quantum computing systems.",
      expertise: "GPU Cluster Design, NVLink Architecture, Cooling Solutions",
      image: "/images/team/marcus-chen.jpg" // Placeholder path
    },
    {
      name: "Sophie Müller",
      role: "Renewable Energy & Sustainability Engineer",
      bio: "LEED certified engineer with focus on carbon-neutral data solutions. Implemented solar+storage systems for data centers across Europe. Expert in heat recapture and reuse systems.",
      expertise: "Renewable Integration, Carbon Accounting, Circular Design",
      image: "/images/team/sophie-muller.jpg" // Placeholder path
    },
    {
      name: "Thomas Wright",
      role: "EU Grants & Funding Advisor",
      bio: "Specialized in securing technology innovation grants from EU programs. Successfully secured over €28M in funding for green tech projects. Expert in Horizon Europe and Digital Europe programmes.",
      expertise: "Grant Applications, Compliance, Public-Private Partnerships",
      image: "/images/team/thomas-wright.jpg" // Placeholder path
    }
  ];

  // Key features of AI-Pod
  const features = [
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "GPU-Optimized Architecture",
      description: "Pre-configured for NVIDIA HGX systems with liquid cooling support and optimized rack layout for maximum compute density."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Energy Efficient Design",
      description: "PUE of 1.15 or lower through advanced cooling techniques and power management systems with renewable integration."
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Rapid Deployment",
      description: "Fully pre-assembled modules that can be operational in 60% less time than traditional data center builds."
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Scalable by Design",
      description: "Modular approach allows incremental expansion from 50kW to 5MW+ without service disruption."
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Hybrid Ready",
      description: "Seamless integration with public cloud services and on-premises infrastructure for flexible AI workloads."
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Enterprise Security",
      description: "Multi-layered physical and cyber security with compliance built-in for regulated industries."
    }
  ];

  // Implementation process
  const processSteps = [
    {
      step: "1",
      title: "Assessment & Planning",
      description: "AI workload analysis, site evaluation, and capacity planning"
    },
    {
      step: "2",
      title: "Design & Engineering",
      description: "Customized pod design based on specific AI workload requirements"
    },
    {
      step: "3",
      title: "Regulatory & Funding",
      description: "Permitting assistance and grant application support"
    },
    {
      step: "4",
      title: "Deployment & Integration",
      description: "Turnkey installation and integration with existing infrastructure"
    },
    {
      step: "5",
      title: "Operations & Optimization",
      description: "Ongoing management, monitoring, and continuous improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">AI-Ready Modular Data Centers</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Purpose-built infrastructure for next-generation AI workloads. Deploy scalable, efficient, and sustainable compute anywhere.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => navigateTo('get-in-touch')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Consultation
              </button>
              <button 
                onClick={handleDownloadBrochure}
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AI-Pod Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our modular approach delivers superior performance, efficiency, and scalability for AI workloads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">40% Lower TCO</h3>
              <p className="text-gray-600">Reduce total cost of ownership through optimized design, energy efficiency, and modular expansion.</p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">85% Energy Efficiency</h3>
              <p className="text-gray-600">Advanced cooling and power management systems dramatically reduce energy consumption.</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Future-Proof Design</h3>
              <p className="text-gray-600">Easily adapt to new AI hardware generations without complete infrastructure overhaul.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Optimized Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed from the ground up for the unique demands of artificial intelligence workloads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-blue-600 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach from concept to operational AI infrastructure
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/5">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multidisciplinary specialists with decades of experience in AI infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center">
                    <Server className="h-16 w-16 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Expertise:</h4>
                    <p className="text-gray-600 text-sm">{member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy Your AI Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts design and implement a tailored AI-Pod solution for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Technical Consultation
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Case Studies
            </button>
          </div>
          <p className="mt-8 text-blue-100">
            Ask about our EU grant funding assistance program for qualifying organizations
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIPodExpertise;