import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import * as React from "react";

  const Footer = () => {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'What We Do', id: 'what-we-do' },
    { name: 'Who We Serve', id: 'who-we-serve' },
    { name: 'Who We Are', id: 'who-we-are' }
  ];

  const services = [
    { name: 'Agile Transformation', id: 'what-we-do' },
    { name: 'AI Solutions', id: 'aegis-ai-suite' },
    { name: 'DevOps Excellence', id: 'what-we-do' },
    { name: 'Our Insights', id: 'our-insights' }
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="GitHub Technologies Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">GitHub Technologies</span>
            </div>
            <p className="text-gray-300 mb-6">
            <p className="italic">The market doesn’t reward ‘Agile.’ It rewards ships-that-win. We build warships.</p>
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/github-technologies" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/github_tech" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/githubtechnologies" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/githubtechnologies" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.id}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">contact@githubtechnologies.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+1 (980) 355-5778</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <div className="text-gray-300">
                  <div>30 N Gould St Ste N</div>
                  <div>Sheridan, WY 82801</div>
                  <div>United States</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2020 GitHub Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;