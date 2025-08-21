// scripts/generate-ai-pod-brochure.mjs
import PDFDocument from 'pdfkit';
import fs from 'fs';

// Create directory if it doesn't exist
const dir = 'public/whitepapers';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Create a document
const doc = new PDFDocument({ margin: 50, size: 'A4', layout: 'landscape' });

// Pipe output to file
doc.pipe(fs.createWriteStream(`${dir}/ai-pod-brochure.pdf`));

// Add content function
const addPage = (title, content) => {
    doc.addPage();
    doc.fontSize(22).text(title, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(12).text(content, { align: 'justify', width: 700 });
  };

// Cover Page
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');

// Add a geometric pattern background
doc.save();
doc.translate(400, 300);
for (let i = 0; i < 36; i++) {
  doc.rotate(10);
  doc.rect(-300, -5, 600, 10).fill('#1e293b');
}
doc.restore();

// Set text color to white for all following text
doc.fillColor('white');

// Add main title
doc.fontSize(36).text('AI-Ready Modular Data Centers', 50, 150, { 
  align: 'center', 
  lineGap: 5
});

// Add subtitle
doc.fillColor('#38bdf8');
doc.fontSize(20).text('The Future of AI Infrastructure', 50, 220, { 
  align: 'center', 
  lineGap: 5
});

// Add company name
doc.fillColor('white');
doc.fontSize(16).text('GitHub Technologies LLC', 50, 280, { 
  align: 'center', 
  lineGap: 5
});

// Add a tech-inspired graphic
doc.circle(400, 400, 80).fill('#38bdf8');
doc.circle(400, 400, 60).fill('#0f172a');
doc.circle(400, 400, 40).fill('#38bdf8');
doc.circle(400, 400, 20).fill('#0f172a');

// Add AI text in the center of the graphic
doc.fillColor('white');
doc.fontSize(14).text('AI', 392, 395);

// Page 2: Executive Summary
addPage(
  'Executive Summary',
  'Our AI-Pod solutions represent the next generation of data center infrastructure, specifically engineered for artificial intelligence workloads. These modular, scalable units provide:\n\n' +
  '• 40% lower TCO compared to traditional data centers\n• 85% energy efficiency through advanced cooling systems\n• Deployment in 60% less time than conventional builds\n• Scalability from 50kW to 5MW+ without service disruption\n\n' +
  'Designed to support the most demanding AI training and inference workloads, our AI-Pods incorporate the latest in GPU technology, liquid cooling, and sustainable energy solutions.'
);

// Page 3: Technical Specifications
addPage(
  'Technical Specifications',
  'Standard AI-Pod Configuration:\n\n' +
  '• Compute: 8x NVIDIA H100 or A100 GPUs per node\n• Networking: NVIDIA Quantum-2 InfiniBand or Spectrum-X Ethernet\n• Storage: 200TB NVMe all-flash storage per rack\n• Cooling: Direct-to-chip liquid cooling with rear-door heat exchangers\n• Power: 50kW to 200kW per module, scalable to multi-megawatt\n• Density: Up to 40kW per rack unit\n• Security: Multi-factor access, biometric scanning, and 24/7 monitoring\n• Compliance: HIPAA, GDPR, SOC 2 Type II ready\n\n' +
  'Optional Upgrades:\n- Quantum-safe encryption modules\n- Immersion cooling systems\n- Renewable energy integration\n- Edge deployment packages'
);

// Page 4: Use Cases & Applications
addPage(
  'Use Cases & Applications',
  'Generative AI:\n- Large language model training and fine-tuning\n- Diffusion model inference at scale\n- Real-time content generation pipelines\n\n' +
  'Scientific Research:\n- Drug discovery and molecular simulation\n- Climate modeling and weather prediction\n- Astronomical data processing\n\n' +
  'Industrial AI:\n- Autonomous vehicle simulation\n- Robotics control systems\n- Predictive maintenance for manufacturing\n\n' +
  'Financial Services:\n- High-frequency trading algorithms\n- Fraud detection systems\n- Risk modeling and analysis'
);

// Page 5: Sustainability Features
addPage(
  'Sustainability Features',
  'Our AI-Pods are designed with environmental responsibility at their core:\n\n' +
  'Energy Efficiency:\n- PUE of 1.15 or lower through advanced cooling techniques\n- Waste heat recapture for facility heating\n- Dynamic power management based on workload demands\n\n' +
  'Renewable Integration:\n- Solar panel ready roof structures\n- Wind turbine compatibility\n- Battery storage system integration\n\n' +
  'Circular Design:\n- 95% recyclable components\n- Modular replacement reduces e-waste\n- Refurbishment program for hardware refresh cycles\n\n' +
  'Carbon Accounting:\n- Real-time emissions monitoring\n- Automated sustainability reporting\n- Carbon offset partnership programs'
);

// Page 6: Implementation Process
addPage(
  'Implementation Process',
  'Phase 1: Assessment (2-4 weeks)\n- AI workload analysis and capacity planning\n- Site evaluation and infrastructure audit\n- Regulatory compliance review\n\n' +
  'Phase 2: Design (4-6 weeks)\n- Customized pod design based on specific requirements\n- Integration planning with existing infrastructure\n- Sustainability and efficiency optimization\n\n' +
  'Phase 3: Deployment (8-12 weeks)\n- Factory assembly and testing\n- Site preparation and foundation work\n- Modular installation and commissioning\n\n' +
  'Phase 4: Operations (Ongoing)\n- 24/7 remote monitoring and management\n- Predictive maintenance and health checks\n- Continuous optimization and scaling support'
);

// Page 7: Financial Considerations
addPage(
  'Financial Considerations',
  'Cost Structure:\n\n' +
  'Capital Expenditure (CapEx) Options:\n- Full purchase with 5-year warranty\n- Lease-to-own financing arrangements\n- Project financing through partner institutions\n\n' +
  'Operational Expenditure (OpEx) Options:\n- AI-Pod as a Service subscription model\n- Power-based pricing (per kW/hour)\n- Compute-based pricing (per FLOP/hour)\n\n' +
  'EU Funding Opportunities:\n- Horizon Europe grants for AI infrastructure\n- Digital Europe Programme support\n- Regional development funds for technology adoption\n- Green transition subsidies for sustainable infrastructure\n\n' +
  'ROI Timeline:\n- Typical payback period: 18-24 months\n- 40% reduction in total cost of ownership over 5 years\n- Energy savings of up to 60% compared to traditional solutions'
);

// Page 8: Case Studies
addPage(
  'Case Studies',
  'Global Automotive Manufacturer:\n- Deployed 3 AI-Pods for autonomous vehicle development\n- Achieved 50% faster simulation times\n- Reduced energy costs by 45% compared to previous solution\n- Scaled from 100kW to 500kW over 18 months\n\n' +
  'European Research Consortium:\n- Implemented 5 AI-Pods for climate modeling research\n- Secured €8M in EU innovation grants\n- Achieved carbon-neutral operation through solar integration\n- Enabled 10x increase in research throughput\n\n' +
  'Financial Services Leader:\n- Deployed 2 AI-Pods for real-time fraud detection\n- Reduced false positives by 70%\n- Processed 5x more transactions without latency increase\n- Achieved 99.999% uptime in first year of operation'
);

// Page 9: Team Expertise
addPage(
  'Team Expertise',
  'Our multidisciplinary team brings decades of experience in AI infrastructure:\n\n' +
  'Data Center Architects:\n- 15+ years designing hyperscale facilities\n- Specialized in high-density compute environments\n- Expertise in thermal management and power distribution\n\n' +
  'AI/GPU Specialists:\n- NVIDIA DGX certified solution architects\n- Experience deploying some of Europe\'s largest AI clusters\n- Background in quantum computing systems integration\n\n' +
  'Sustainability Engineers:\n- LEED and BREEAM certified professionals\n- Renewable energy system design expertise\n- Carbon accounting and reporting specialists\n\n' +
  'EU Funding Advisors:\n- Successfully secured over €28M in technology grants\n- Expertise in Horizon Europe and Digital Europe programmes\n- Network of contacts across EU regulatory bodies'
);

// Page 10: Contact Information
doc.addPage();
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');

doc.fillColor('white');
doc.fontSize(28).text('Ready to Deploy Your AI Infrastructure?', 0, 100, { 
  align: 'center', 
  width: doc.page.width
});

doc.fillColor('#38bdf8');
doc.fontSize(16).text('Contact our experts to discuss your AI-Pod solution', 0, 150, { 
  align: 'center', 
  width: doc.page.width
});

doc.fillColor('white');
doc.fontSize(14).text('GitHub Technologies LLC', 50, 220, { color: 'white' });
doc.fontSize(12).text('AI Infrastructure Division', 50, 245, { color: 'white' });
doc.fontSize(12).text('30 N Gould St Ste N', 50, 270, { color: 'white' });
doc.fontSize(12).text('Sheridan, WY 82801', 50, 295, { color: 'white' });

doc.fillColor('#38bdf8');
doc.fontSize(12).text('Email: contact@githubtechnologies.com', 50, 350, { color: '#38bdf8' });
doc.fontSize(12).text('Phone: +1 (980) 355-5778 ', 50, 375, { color: '#38bdf8' });
doc.fontSize(12).text('Web: www.githubtechnologies.com/ai-data-centers', 50, 400, { color: '#38bdf8' });

doc.fillColor('white');
doc.fontSize(10).text('© 2025 GitHub Technologies. All rights reserved.', 0, 500, { 
  align: 'center', 
  width: doc.page.width
});

doc.fillColor('94a3b8');
doc.fontSize(10).text('Confidential - For authorized recipients only', 0, 520, { 
  align: 'center', 
  width: doc.page.width
});

// Finalize the PDF
doc.end();
console.log('Brochure generated at public/whitepapers/ai-pod-brochure.pdf');