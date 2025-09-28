import React, { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    subject: "General Inquiry",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // spam protection

    try {
      console.log("Form submitted:", formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        subject: "General Inquiry",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            Looking to accelerate your digital transformation with SaaS and AI-driven
            solutions? Let’s explore how we can partner.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
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
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow space-y-6">
          {/* Status Banner */}
          {status === "success" && (
            <div className="p-4 bg-green-100 text-green-700 font-medium rounded-lg border border-green-300">
              ✅ Thank you! We’ll be in touch shortly.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-100 text-red-700 font-medium rounded-lg border border-red-300">
              ❌ Oops! Something went wrong. Please try again.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="border rounded px-4 py-2 w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="border rounded px-4 py-2 w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
              className="border rounded px-4 py-2 w-full"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="border rounded px-4 py-2 w-full"
            />
          </div>

          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Company Website (optional)"
            className="border rounded px-4 py-2 w-full"
          />

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full"
          >
            <option>General Inquiry</option>
            <option>Partnership</option>
            <option>Investment</option>
            <option>Join Our Team</option>
            <option>Request Demo</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={5}
            className="border rounded px-4 py-2 w-full"
          />

          {/* Honeypot */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Extra Info */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Agile Delivery</h3>
            <p className="text-gray-600">
              We deliver MVPs in weeks, not months — enabling rapid market validation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Energy Expertise</h3>
            <p className="text-gray-600">
              Deep domain knowledge in SaaS for energy transition, Net Zero & flexibility
              markets.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Platforms</h3>
            <p className="text-gray-600">
              Our SaaS solutions scale from pilot projects to enterprise-ready deployments.
            </p>
          </div>
        </div>

        {/* Direct Email CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700">Prefer email? Reach us directly at</p>
          <a
            href="mailto:contact@githubtechnologies.com"
            className="text-blue-600 font-semibold underline"
          >
            contact@githubtechnologies.com
          </a>
        </div>
      </section>
    </div>
  );
}