import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    attachment: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const url = import.meta.env.DEV
        ? "http://localhost:9999/.netlify/functions/send-email" // local functions
        : "/.netlify/functions/send-email"; // production

      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("company", formData.company);
      data.append("subject", formData.subject);
      data.append("message", formData.message);
      if (formData.attachment) {
        data.append("attachment", formData.attachment);
      }

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
          attachment: null,
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || `Error: ${response.status}`,
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology
            solutions? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">contact@githubtechnologies.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">+1 (980) 355-5778</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Addresses</h3>
              <p className="text-gray-600">
                <strong>USA:</strong> 30 N Gould St Ste N, Sheridan, WY 82801
              </p>
              <p className="text-gray-600">
                <strong>India:</strong> H1A/20 Sector-63, Noida, UP 201301
              </p>
              <p className="text-gray-600">
                <strong>Netherlands:</strong> Prins Alexanderplein 6-14, 3067 GC Rotterdam
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
              <p className="text-gray-600">Sat - Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@company.com"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your company name"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg"
            />

            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="services">Services & Solutions</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="support">Technical Support</option>
              <option value="careers">Career Opportunities</option>
              <option value="other">Other</option>
            </select>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              required
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              type="file"
              id="attachment"
              name="attachment"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  attachment: e.target.files ? e.target.files[0] : null,
                })
              }
              className="w-full px-4 py-3 border rounded-lg"
            />

            {formData.attachment && (
              <p className="text-sm text-gray-500">Attached: {formData.attachment.name}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white ${
                isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              <Send className="w-5 h-5 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus && (
              <div
                className={`mt-4 p-3 rounded-lg text-center ${
                  submitStatus.success
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
