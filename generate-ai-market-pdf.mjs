import PDFDocument from 'pdfkit';
import fs from 'fs';

// Create directory if it doesn't exist
const dir = 'public/whitepapers';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Create a document
const doc = new PDFDocument({ margin: 50 });

// Pipe output to file
doc.pipe(fs.createWriteStream(`${dir}/ai-market-analysis.pdf`));

// Add content
const addPage = (title, content) => {
  doc.addPage();
  doc.fontSize(22).text(title, { align: 'center' });
  doc.moveDown(0.5);
  doc.fontSize(12).text(content, { align: 'justify', width: 500 });
};

// Page 1: Title Page
doc.fontSize(28).text('AI Market Analysis 2025', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(18).text('Strategic Insights for Business Leaders and Investors', { align: 'center' });
doc.moveDown(2);
doc.fontSize(14).text('GitHub Technologies AI Research Division', { align: 'center' });
doc.text('© 2025 GitHub Technologies. All rights reserved.', { align: 'center' });
doc.text('Confidential - Do Not Distribute', { align: 'center', color: 'red' });

// Page 2: Executive Summary
addPage(
  'Executive Summary',
  'The global AI market will reach $1.2T by 2025, growing at 42% CAGR. Key drivers:\n\n' +
  '• Generative AI adoption across industries\n• Cloud AI platform democratization\n• Regulatory frameworks maturing\n• AI-first product strategies\n\n' +
  'Major shifts: 60% of enterprises will deploy AI orchestration layers, while specialized AI chips will capture 30% of semiconductor revenue.'
);

// Page 3: Market Segmentation
addPage(
  'Market Segmentation',
  '1. AI Software ($650B):\n   - Enterprise applications\n   - AI development tools\n   - AI-as-a-Service\n\n' +
  '2. AI Hardware ($380B):\n   - AI processors\n   - Edge AI devices\n   - Quantum accelerators\n\n' +
  '3. AI Services ($170B):\n   - Implementation\n   - Managed services\n   - Consulting'
);

// Page 4: Generative AI Revolution
addPage(
  'Generative AI Revolution',
  'Key developments:\n\n' +
  '• Text-to-X platforms will grow 10x\n• Multimodal models become standard\n• Custom enterprise LLMs proliferate\n• Copyright challenges intensify\n\n' +
  'Market impact:\n- $280B in creative industries\n- 40% productivity gains in knowledge work\n- New regulatory frameworks emerging'
);

// Page 5: Industry Adoption Analysis
addPage(
  'Industry Adoption Analysis',
  'Healthcare:\n- $120B market\n- Drug discovery acceleration (60% faster)\n- AI diagnostics (FDA-approved)\n\n' +
  'Manufacturing:\n- $98B market\n- Predictive maintenance (30% cost reduction)\n- Generative design\n\n' +
  'Financial Services:\n- $145B market\n- Fraud detection (99.5% accuracy)\n- Algorithmic trading (80% of volume)'
);

// Page 6: Technology Innovations
addPage(
  'Technology Innovations',
  '1. Neuromorphic Computing:\n   - Brain-inspired chips\n   - 100x energy efficiency\n\n' +
  '2. Federated Learning:\n   - Privacy-preserving AI\n   - Healthcare applications\n\n' +
  '3. AI Security:\n   - Adversarial defense systems\n   - Zero-trust AI architectures\n\n' +
  '4. Quantum AI:\n   - Optimization breakthroughs\n   - Material science advances'
);

// Page 7: Competitive Landscape
addPage(
  'Competitive Landscape',
  'Market Leaders:\n\n' +
  '• NVIDIA: 35% AI chip market share\n• Microsoft: Azure AI ecosystem\n• OpenAI: GPT-5 and enterprise solutions\n• Anthropic: Constitutional AI\n\n' +
  'Emerging Challengers:\n- Mistral AI (Europe)\n- Cohere (Canada)\n- DeepSeek (China)\n- Krutrim (India)'
);

// Page 8: Investment Trends
addPage(
  'Investment Trends',
  'VC Funding:\n- $185B in 2025 (40% YoY growth)\n- Early-stage: 55%\n- Series B+: 45%\n\n' +
  'Hot Sectors:\n1. AI safety and alignment\n2. Vertical-specific LLMs\n3. AI developer tools\n4. Robotics integration\n\n' +
  'Corporate Investment:\n- 75% of Fortune 500 have dedicated AI funds'
);

// Page 9: Regulatory Outlook
addPage(
  'Regulatory Outlook',
  'Global Framework Developments:\n\n' +
  '• EU AI Act: Tiered risk approach\n• US Executive Order: Safety standards\n• China: Focused on generative AI\n\n' +
  'Compliance Requirements:\n- Algorithmic impact assessments\n- Transparency documentation\n- Human oversight protocols\n- Bias testing mandates'
);

// Page 10: Talent Landscape
addPage(
  'Talent Landscape',
  'Critical Skills Gap:\n- 3M unfilled AI positions globally\n- 40% salary premiums for AI specialists\n\n' +
  'Top Roles:\n1. Prompt engineers\n2. AI ethicists\n3. MLOps engineers\n4. AI product managers\n\n' +
  'Solutions:\n- Corporate academies\n- AI apprenticeship programs\n- Global talent mobility'
);

// Page 11: Ethical Considerations
addPage(
  'Ethical Considerations',
  'Key Challenges:\n\n' +
  '• Deepfake detection arms race\n• Algorithmic bias mitigation\n• Job displacement concerns\n• Environmental impact\n\n' +
  'Emerging Solutions:\n- AI watermarking standards\n- Diversity in training datasets\n- Just transition frameworks\n- Green AI initiatives'
);

// Page 12: Startup Ecosystem
addPage(
  'Startup Ecosystem',
  'Top Innovation Hubs:\n1. San Francisco\n2. London\n3. Beijing\n4. Tel Aviv\n\n' +
  'Most Funded Categories:\n- AI infrastructure: $48B\n- Healthcare AI: $32B\n- Industrial AI: $28B\n\n' +
  'Exit Landscape:\n- IPO window reopening\n- Strategic acquisitions accelerating\n- PE roll-ups in vertical markets'
);

// Page 13: Cloud AI Platforms
addPage(
  'Cloud AI Platforms',
  'Market Share Analysis:\n\n' +
  '1. Azure AI: 32%\n   - OpenAI integration\n   - Enterprise security\n\n' +
  '2. AWS: 28%\n   - SageMaker dominance\n   - Cost efficiency\n\n' +
  '3. Google Cloud: 22%\n   - Vertex AI\n   - TPU advantage\n\n' +
  '4. Others: 18%\n   - IBM\n   - Oracle\n   - Specialized providers'
);

// Page 14: Edge AI Deployment
addPage(
  'Edge AI Deployment',
  'Growth Drivers:\n\n' +
  '• Real-time processing needs\n• Bandwidth optimization\n• Privacy requirements\n\n' +
  'Market Projections:\n- $87B by 2025 (45% CAGR)\n- 15B edge AI devices deployed\n\n' +
  'Key Applications:\n- Autonomous vehicles\n- Smart factories\n- AR/VR systems\n- Agricultural drones'
);

// Page 15: AI in Cybersecurity
addPage(
  'AI in Cybersecurity',
  'Market Size: $45B\n\n' +
  'Key Capabilities:\n1. Threat prediction\n2. Automated response\n3. Vulnerability discovery\n4. Fraud prevention\n\n' +
  'Adoption Challenges:\n- Adversarial attacks\n- False positives\n- Skills shortage\n- Integration complexity'
);

// Page 16: Future Predictions
addPage(
  '2026-2030 Predictions',
  '• AGI prototypes emerge\n• AI-first companies dominate S&P 500\n• AI generates 30% of digital content\n• AI patents exceed 1M annually\n\n' +
  'Disruption Areas:\n- Education: Personalized AI tutors\n- Entertainment: AI-generated media\n- Science: Accelerated discovery\n- Government: AI policy advisors'
);

// Page 17: Implementation Roadmap
addPage(
  'Enterprise Implementation Roadmap',
  'Phase 1: Foundation (0-6 months)\n- AI readiness assessment\n- Pilot use cases\n- Talent strategy\n\n' +
  'Phase 2: Scaling (6-18 months)\n- Platform implementation\n- Process integration\n- Change management\n\n' +
  'Phase 3: Transformation (18-36 months)\n- AI-first products\n- Ecosystem partnerships\n- Continuous innovation'
);

// Page 18: ROI Framework
addPage(
  'ROI Framework',
  'Quantifiable Benefits:\n\n' +
  '• Productivity: 30-50% gains\n• Cost Reduction: 25-40%\n• Revenue Growth: 15-30%\n• Innovation Speed: 2-3x faster\n\n' +
  'Measurement Approach:\n1. Baseline metrics\n2. Incremental tracking\n3. Value attribution\n4. Ecosystem effects'
);

// Page 19: Case Studies
addPage(
  'Industry Case Studies',
  'Retail Giant:\n- AI demand forecasting\n- Result: 18% inventory reduction, $420M savings\n\n' +
  'Global Bank:\n- AI fraud detection\n- Result: $1.2B fraud prevented, false positives ↓70%\n\n' +
  'Auto Manufacturer:\n- Generative design\n- Result: 40% lighter components, 12-month faster development'
);

// Page 20: Strategic Recommendations
addPage(
  'Strategic Recommendations',
  'For Enterprises:\n1. Establish AI governance\n2. Build data foundations\n3. Prioritize high-impact use cases\n4. Develop AI talent pipeline\n\n' +
  'For Investors:\n1. Focus on AI infrastructure\n2. Vertical-specific solutions\n3. Emerging markets\n4. Ethical AI leaders\n\n' +
  'Contact: ai-research@githubtech.com'
);

// Finalize the PDF
doc.end();
console.log('PDF generated at public/whitepapers/ai-market-analysis.pdf');