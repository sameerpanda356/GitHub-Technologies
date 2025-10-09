import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    attachments: [] as File[], // ✅ allow multiple files
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const [fileSizeError, setFileSizeError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  
    if (totalSize > 10 * 1024 * 1024) {   // 10 MB limit
      setFileSizeError("Total attachment size exceeds 10 MB. Please reduce file size.");
      setFormData((prev) => ({ ...prev, attachments: [] }));  // Clear invalid files
    } else {
      setFileSizeError("");
      setFormData((prev) => ({ ...prev, attachments: files }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const url =
        process.env.NODE_ENV === "development"
          ? "http://localhost:5001/send-email"
          : "/.netlify/functions/send-email";
  
      // Build multipart/form-data payload
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("company", formData.company);
      data.append("subject", formData.subject);
      data.append("message", formData.message);
      if (formData.attachments && formData.attachments.length > 0) {
        formData.attachments.forEach((file) => {
          data.append("attachments", file);
        });
      }
  
      // ✅ Send as FormData (no headers!)
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: result.message || "Message sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
          attachments: [],
        });

        // ✅ Clear file input manually (important for browser UI)
        const fileInput = document.getElementById("attachment") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
        
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || `Error: ${response.status}`,
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Looking to accelerate your digital transformation with SaaS and AI-driven solutions?  
                Let’s explore how we can partner.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div style={{ display: 'none' }}>
          <label htmlFor="honeypot">Don't fill this out</label>
          <input 
            type="text" 
            id="honeypot" 
            name="honeypot" 
            onChange={handleInputChange} 
          />
        </div>
        {/* Header Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Global Offices</h2>
                <div className="grid gap-6">
                  <div className="p-4 bg-white rounded-lg shadow">
                    <h3 className="font-semibold text-gray-900">USA</h3>
                    <p className="text-gray-600">30 N Gould St Ste N, Sheridan, WY 82801</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <h3 className="font-semibold text-gray-900">India</h3>
                    <p className="text-gray-600">H1A/20 Sector-63, Noida, UP 201301</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <h3 className="font-semibold text-gray-900">Netherlands</h3>
                    <p className="text-gray-600">Prins Alexanderplein 6-14, Rotterdam 3067 GC</p>
                  </div>
                </div>
              </div>

        
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> Full Name * </label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address * </label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"> Company </label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2"> Subject * </label>
                <select id="subject" name="subject" required value={formData.subject} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="General">General Inquiry</option>
                  <option value="Investment">Investment</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Careers">Join Our Team</option>
                  <option value="Demo">Request Demo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message * </label>
                <textarea id="message" name="message" required rows={6} value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us about your project, requirements, or how we can help you..."
                />
              </div>

              {/* Attachment Field */}
              <div>
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-2">
                  Attachment (optional)
                </label>
                <div className="flex items-center space-x-3">
                <input
                  id="attachment"
                  name="attachments"
                  type="file"
                  multiple // ✅ allow selecting several files
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.ppt,.pptx,.xls,.xlsx"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                  <Paperclip className="w-5 h-5 text-gray-500" />
                </div>
                {formData.attachments.length > 0 && (
                  <ul className="text-sm text-gray-500 mt-1 space-y-1">
                    {formData.attachments.map((file, idx) => (
                      <li key={idx}>📎 {file.name}</li>
                    ))}
                  </ul>
                )}

                {/* Show soft error if any */}
                {fileSizeError && (
                  <p className="text-sm text-red-500 mt-1">{fileSizeError}</p>
                )}

              </div>

              <button type="submit" disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                } text-white py-3 px-6 rounded-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center space-x-2`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {submitStatus && (
                <div className={`mt-4 p-3 rounded-lg text-center ${
                  submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <section className="py-12 bg-gray-100">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose GitHub Technologies?</h2>
              </div>
              <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Agile Delivery</h3>
                <p className="text-gray-600">We deliver MVPs in weeks, not months — enabling rapid market validation.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Energy Expertise</h3>
                <p className="text-gray-600">Deep domain knowledge in SaaS for energy transition, Net Zero & flexibility markets.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Platforms</h3>
                <p className="text-gray-600">Our SaaS solutions scale from pilot projects to enterprise-ready deployments.</p>
              </div>
            </div>

            {/* Direct Email CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-700">Prefer email? Reach us directly at</p>
              <a href="mailto:contact@githubtechnologies.com" className="text-blue-600 font-semibold underline">
                contact@githubtechnologies.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;