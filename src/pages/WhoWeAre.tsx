
export default function WhoWeAre() {

  const leadership = [
    {
      name: 'Ritu Kaushik',
      title: 'CEO & Founder',
      bio: 'Visionary CEO & Founder focused on shaping the future through innovation and purpose-driven leadership. Believes in empowering people, building exceptional teams, and delivering meaningful impact.',
      image: '/Rk.png'
    },
    {
      name: 'Nina Emory',
      title: 'CTO & Co-Founder',
      bio: 'As CTO & Co-Founder, I lead with a passion for innovation and excellence in technology. Focused on building transformative solutions, fostering engineering brilliance, and accelerating business growth through tech-driven strategies.',
      image: '/Nb.png'
    },
    {
      name: 'Divyanshu Garg',
      title: 'Head of AI Innovation',
      bio: 'As Head of AI Innovation, Divyanshu leads transformative AI strategies that drive business growth and shape the future of intelligent technology. With deep expertise in machine learning, automation, and emerging technologies, Divyanshu pioneers cutting-edge solutions that redefine industry standards and deliver measurable impact.',
      image: '/Dg.png'
    },
    {
      name: 'Shalini Kaushik',
      title: 'HR Manager',
      bio: 'With 8+ years of experience in driving talent acquisition, employee engagement, and culture transformation. Shalini is passionate about empowering people and building high-performing, inclusive workplaces that fuel organizational growth.',
      image: '/Sk.png'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
              <p className="text-xl text-blue-100 mb-8">
                  GitHub Technologies was founded on a bold belief: that SaaS and AI can 
                  accelerate digital transformation and build resilient, sustainable industries. 
                  Starting with the energy transition, we’re on a mission to turn complex 
                  challenges into scalable, real-world solutions.  
              </p>
              <p className="text-xl text-blue-100 mt-6">
                  What defines us is not just the technology we build, but the culture we foster — 
                  one rooted in agility, innovation, and impact. Our teams thrive on curiosity, 
                  collaboration, and a relentless drive to shape the future of SaaS across 
                  industries. 
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Our team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                    To empower organizations worldwide by delivering SaaS platforms that combine 
                    agility, AI innovation, and DevOps excellence. We focus on solving today’s 
                    urgent challenges — from energy transition to data-driven transformation — 
                    while enabling scalable growth across industries.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-orange-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                    To be recognized as a global leader in SaaS innovation — shaping resilient, 
                    adaptive, and sustainable organizations. We aim to set the benchmark for 
                    how technology-driven platforms transform industries, starting with energy 
                    and expanding into finance, healthcare, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-lg text-gray-600 mb-12">
            Our values guide not just the SaaS platforms we build, but the culture we live 
            every day. They reflect how we collaborate, innovate, and grow as a team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We pursue excellence in every SaaS solution — from design to delivery. 
                Our people bring craftsmanship, curiosity, and pride to everything we create.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We thrive on diversity and teamwork. By combining unique skills and perspectives, 
                we build solutions stronger than any one of us could achieve alone.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">
                Transparency and trust are the foundation of our partnerships. 
                We do what we say, and we measure success by the positive impact we create.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Curiosity fuels our culture. We experiment, learn, and adapt — turning bold 
                ideas into real SaaS platforms that change industries.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the visionaries driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-62 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Achievements</h2>
          <p className="text-lg text-gray-600 mb-12">
            We’re early in our journey, but already making waves with pilots, 
            partnerships, and recognition from the innovation ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-2xl mb-2">3+</h3>
              <p className="text-gray-600 text-sm">
                SaaS pilots launched in energy markets (congestion relief, CO₂ tracking, battery optimization).
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-2xl mb-2">2</h3>
              <p className="text-gray-600 text-sm">
                Recognitions from leading accelerator and startup programs in Europe.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-2xl mb-2">5+</h3>
              <p className="text-gray-600 text-sm">
                Strategic partnerships established with technology providers and domain experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Credibility</h2>
          <p className="text-lg text-gray-600 mb-12">
            Trust is the foundation of everything we build. 
            Our team holds globally recognized certifications and recognitions that 
            demonstrate our commitment to excellence, security, and sustainable growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-2">Agile & DevOps</h3>
              <p className="text-sm text-gray-600">
                Certified Scrum Masters, SAFe Program Consultants, and DevOps Engineers 
                ensuring world-class SaaS delivery practices.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-2">Cloud & Security</h3>
              <p className="text-sm text-gray-600">
                AWS, Azure, and GCP certified professionals delivering secure, scalable, 
                and compliant SaaS platforms.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md">
              <h3 className="font-semibold text-xl mb-2">Innovation & Recognition</h3>
              <p className="text-sm text-gray-600">
                Recognized by leading startup accelerators and industry programs for 
                innovation in SaaS and energy transition.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6"><p className='italic'>Let’s Shape the Future of SaaS Together</p></h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're an enterprise, investor, or innovation partner — let’s collaborate 
              to scale impact across energy and beyond.
          </p>
          <a
            href="/get-in-touch"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Connect With Us
          </a>
        </div>
      </section>
    </div>
  );
}