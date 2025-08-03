import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp, BookOpen, Video, Download } from 'lucide-react';

interface OurInsightsProps {
  navigateTo?: (page: string) => void;
}

//const OurInsights: React.FC = () => {
  const OurInsights: React.FC<OurInsightsProps> = ({ navigateTo }) => {
  const featuredArticle = {
    title: 'The Future of Agile: Integrating AI into Sprint Planning',
    excerpt: 'Discover how artificial intelligence is revolutionizing agile methodologies, from automated story point estimation to intelligent sprint optimization. Learn practical strategies for implementing AI-driven agile practices.',
    author: 'Dr. Emily Watson',
    date: 'March 15, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
    category: 'AI & Agile'
  };

  const articles = [
    {
      title: 'SAFe 6.0: What\'s New and How to Migrate',
      excerpt: 'A comprehensive guide to the latest SAFe framework updates and migration strategies for enterprise organizations.',
      author: 'David Kim',
      date: 'March 10, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg',
      category: 'Agile Frameworks'
    },
    {
      title: 'DevOps Security: Implementing DevSecOps at Scale',
      excerpt: 'Best practices for integrating security into your DevOps pipeline without compromising speed or agility.',
      author: 'Michael Rodriguez',
      date: 'March 8, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3183133/pexels-photo-3183133.jpeg',
      category: 'DevOps'
    },
    {
      title: 'Kanban vs Scrum: Choosing the Right Framework',
      excerpt: 'An in-depth comparison of Kanban and Scrum methodologies to help you choose the best fit for your team.',
      author: 'Sarah Chen',
      date: 'March 5, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      category: 'Agile Frameworks'
    },
    {
      title: 'Machine Learning Operations: MLOps Best Practices',
      excerpt: 'Essential MLOps practices for deploying and maintaining machine learning models in production environments.',
      author: 'Dr. Emily Watson',
      date: 'March 1, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      category: 'AI & Machine Learning'
    },
    {
      title: 'Building High-Performance Agile Teams',
      excerpt: 'Strategies for creating and maintaining high-performing agile teams that consistently deliver value.',
      author: 'David Kim',
      date: 'February 28, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg',
      category: 'Team Management'
    },
    {
      title: 'Cloud-Native DevOps: Kubernetes and Beyond',
      excerpt: 'Exploring cloud-native DevOps practices with Kubernetes, service mesh, and modern deployment strategies.',
      author: 'Michael Rodriguez',
      date: 'February 25, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      category: 'Cloud & DevOps'
    }
  ];

  const whitepapers = [
    {
      title: 'Enterprise Agile Transformation Guide',
      description: 'A comprehensive 40-page guide for planning and executing large-scale agile transformations.',
      pages: '40 pages',
      format: 'PDF'
    },
    {
      title: 'AI in Software Development: Market Analysis 2025',
      description: 'Research report on AI adoption trends, challenges, and opportunities in software development.',
      pages: '28 pages',
      format: 'PDF'
    },
    {
      title: 'DevOps Maturity Assessment Framework',
      description: 'A practical framework for assessing and improving your organization\'s DevOps maturity.',
      pages: '15 pages',
      format: 'PDF'
    }
  ];

  const webinars = [
    {
      title: 'Scaling Agile with SAFe: Real-World Case Studies',
      date: 'April 15, 2025',
      time: '2:00 PM EST',
      type: 'Live Webinar',
      registration: 'Open'
    },
    {
      title: 'AI-Powered DevOps: Automation Beyond CI/CD',
      date: 'April 22, 2025',
      time: '1:00 PM EST',
      type: 'Live Webinar',
      registration: 'Open'
    },
    {
      title: 'Building Resilient Microservices Architecture',
      date: 'April 29, 2025',
      time: '3:00 PM EST',
      type: 'Live Webinar',
      registration: 'Open'
    }
  ];

  const categories = [
    'All Categories',
    'Agile Frameworks',
    'AI & Machine Learning',
    'DevOps',
    'Team Management',
    'Cloud & DevOps'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');

  const filteredArticles = selectedCategory === 'All Categories' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Insights</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay ahead with expert insights, industry trends, and practical guidance 
              on agile transformation, AI innovation, and DevOps excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredArticle.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">GitHub Technologies Team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{featuredArticle.date}</span>
                  </div>
                  <span className="text-gray-500">{featuredArticle.readTime}</span>
                </div>
                  <button 
                  //onClick={() => navigateTo?.('future-of-agile')} //to open the new window in the same tab.
                  onClick={() => {
                    
                    const url = `${window.location.origin}/#/future-of-agile`;
                    const newWindow = window.open(url, '_blank');

                    // Force initialization
                    if (newWindow) {
                      newWindow.onload = () => {
                        if (newWindow.document.body.innerHTML === '') {
                          newWindow.location.href = url;
                        }
                      };
                  navigateTo?.('url')}
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Expert insights and practical guidance from our team
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Whitepapers */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Whitepapers & Guides</h2>
              </div>
              <div className="space-y-6">
                {whitepapers.map((paper, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{paper.pages}</span>
                        <span>{paper.format}</span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Webinars */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Video className="h-8 w-8 text-cyan-500" />
                <h2 className="text-3xl font-bold text-gray-900">Upcoming Webinars</h2>
              </div>
              <div className="space-y-6">
                {webinars.map((webinar, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <span>{webinar.date}</span>
                      <span>{webinar.time}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {webinar.registration}
                      </span>
                    </div>
                    <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, industry trends, 
            and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurInsights;