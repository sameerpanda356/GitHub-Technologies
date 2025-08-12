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
doc.pipe(fs.createWriteStream(`${dir}/enterprise-agile-transformation.pdf`));

// Add content
const addPage = (title, content) => {
  doc.addPage();
  doc.fontSize(22).text(title, { align: 'center' });
  doc.moveDown(0.5);
  doc.fontSize(12).text(content, { align: 'justify', width: 500 });
};

// Page 1: Title Page
doc.fontSize(28).text('Enterprise Agile Transformation Guide', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(18).text('A Comprehensive Framework for Large-Scale Adoption', { align: 'center' });
doc.moveDown(2);
doc.fontSize(14).text('GitHub Technologies', { align: 'center' });
doc.text('© 2025 GitHub Technologies. All rights reserved.', { align: 'center' });

// Page 2: Executive Summary
addPage(
  'Executive Summary',
  'Agile transformation at enterprise scale requires strategic planning and cultural evolution. This guide provides a proven framework for organizations with 500+ employees to achieve:\n\n' +
  '• 40-60% faster time-to-market\n• 30-50% increase in team productivity\n• 5x higher employee engagement\n• Measurable ROI within 12 months\n\n' +
  'Based on 12 years of experience transforming Fortune 500 companies across finance, healthcare, and manufacturing sectors.'
);

// Page 3: Why Enterprise Agile?
addPage(
  'Why Enterprise Agile?',
  'Traditional agile works well at team level but fails at scale due to:\n\n' +
  '• Siloed departments\n• Legacy system dependencies\n• Inconsistent processes\n• Resistance to change\n\n' +
  'Enterprise agile addresses these through:\n' +
  '1. Unified portfolio planning\n2. Value stream alignment\n3. Executive sponsorship\n4. Metrics-driven improvement'
);

// Page 4: Transformation Roadmap
addPage(
  'Transformation Roadmap',
  'Phase 1: Assessment (1-2 months)\n' +
  '- Current state analysis\n- Value stream mapping\n- Leadership alignment\n\n' +
  'Phase 2: Foundation (3-6 months)\n' +
  '- Pilot team selection\n- Agile training\n- Toolchain setup\n\n' +
  'Phase 3: Scaling (6-12 months)\n' +
  '- Program increment planning\n- DevOps implementation\n- Enterprise metrics\n\n' +
  'Phase 4: Optimization (Ongoing)\n' +
  '- Continuous improvement\n- Innovation sprints\n- Business agility metrics'
);

// Page 5: Framework Comparison
addPage(
  'Framework Comparison',
  'SAFe (Scaled Agile Framework):\n' +
  '- Best for: Large organizations with complex compliance needs\n' +
  '- Key feature: Program increment planning\n\n' +
  'LeSS (Large Scale Scrum):\n' +
  '- Best for: Organizations with Scrum experience\n' +
  '- Key feature: Feature teams\n\n' +
  'Nexus:\n' +
  '- Best for: Scaling Scrum beyond 3-5 teams\n' +
  '- Key feature: Integration team\n\n' +
  'Custom Hybrid:\n' +
  '- Best for: Unique organizational structures\n' +
  '- Key feature: Tailored practices'
);

// Page 6: Leadership Engagement
addPage(
  'Leadership Engagement',
  'Critical success factors:\n\n' +
  '1. Executive Sponsorship:\n' +
  '   - Dedicate 20% time to transformation\n' +
  '   - Remove organizational impediments\n\n' +
  '2. Middle Management Buy-in:\n' +
  '   - Agile leadership training\n' +
  '   - Redefine success metrics\n\n' +
  '3. Change Agents Network:\n' +
  '   - Identify champions (5% of workforce)\n' +
  '   - Create communities of practice'
);

// Page 7: Team Topologies
addPage(
  'Team Topologies',
  'Optimize team structures for flow:\n\n' +
  'Stream-Aligned Teams:\n' +
  '- End-to-end ownership of value streams\n\n' +
  'Enabling Teams:\n' +
  '- Provide specialized capabilities (DevOps, UX)\n\n' +
  'Complicated-Subsystem Teams:\n' +
  '- Handle complex legacy systems\n\n' +
  'Platform Teams:\n' +
  '- Build shared services for multiple streams\n\n' +
  'Ideal team size: 5-9 members with dedicated product owner'
);

// Page 8: Metrics That Matter
addPage(
  'Metrics That Matter',
  'Business Outcomes:\n' +
  '- Time-to-market\n- Customer satisfaction (NPS)\n- Revenue impact\n\n' +
  'Process Metrics:\n' +
  '- Flow efficiency\n- Cycle time\n- Deployment frequency\n\n' +
  'Team Health:\n' +
  '- Employee engagement\n- Team happiness index\n- Retention rate\n\n' +
  'Avoid vanity metrics: Velocity should not be compared across teams'
);

// Page 9: DevOps Integration
addPage(
  'DevOps Integration',
  'Essential practices for agile at scale:\n\n' +
  '• Infrastructure as Code (IaC)\n• Continuous Testing\n• Automated Deployment\n• Value Stream Management\n\n' +
  'Implementation roadmap:\n' +
  '1. Establish CI/CD pipelines\n' +
  '2. Implement automated testing\n' +
  '3. Adopt cloud-native architecture\n' +
  '4. Introduce production analytics'
);

// Page 10: Change Management
addPage(
  'Change Management',
  'Overcoming resistance:\n\n' +
  '1. Communication Plan:\n' +
  '   - Monthly town halls\n' +
  '   - Transformation newsletter\n' +
  '   - Success story spotlights\n\n' +
  '2. Learning Pathways:\n' +
  '   - Role-based training\n' +
  '   - Certification support\n' +
  '   - Mentorship program\n\n' +
  '3. Feedback Mechanisms:\n' +
  '   - Retrospectives at all levels\n' +
  '   - Pulse surveys\n' +
  '   - Improvement backlog'
);

// Page 11: Case Study - Global Bank
addPage(
  'Case Study: Global Bank',
  'Challenge:\n' +
  '- 18-month release cycles\n- 40% project failure rate\n- Siloed IT/business teams\n\n' +
  'Solution:\n' +
  '- Implemented SAFe framework\n- Created 35 agile release trains\n- Established DevOps center of excellence\n\n' +
  'Results (24 months):\n' +
  '- 60% faster time-to-market\n- 75% reduction in production incidents\n- $28M annual savings'
);

// Page 12: Common Pitfalls
addPage(
  'Common Pitfalls',
  'Avoid these transformation killers:\n\n' +
  '✗ Treating agile as process change only\n' +
  '✗ Underestimating cultural resistance\n' +
  '✗ Lack of executive commitment\n' +
  '✗ Tool-focused rather than people-focused\n' +
  '✗ Scaling too quickly without pilots\n' +
  '✗ Ignoring legacy system constraints\n' +
  '✗ Measuring team velocity instead of outcomes'
);

// Page 13: Tooling Landscape
addPage(
  'Tooling Landscape',
  'Essential tool categories:\n\n' +
  'Planning & Tracking:\n' +
  '- Jira Align\n- Azure DevOps\n- VersionOne\n\n' +
  'DevOps:\n' +
  '- GitHub Actions\n- Jenkins\n- GitLab CI\n\n' +
  'Collaboration:\n' +
  '- Miro\n- Confluence\n- Slack\n\n' +
  'Metrics:\n' +
  '- Value Stream Management platforms\n- Power BI\n- Tableau'
);

// Page 14: Sustaining Transformation
addPage(
  'Sustaining Transformation',
  'Ensure long-term success:\n\n' +
  '1. Quarterly Health Checks:\n' +
  '   - Agile maturity assessment\n' +
  '   - Business value delivered\n\n' +
  '2. Continuous Learning:\n' +
  '   - Internal agile conferences\n' +
  '   - Cross-train sharing\n\n' +
  '3. Evolution Committee:\n' +
  '   - Representatives from all levels\n' +
  '   - Authority to adjust framework\n\n' +
  '4. Innovation Budget:\n' +
  '   - 10-15% capacity for experiments'
);

// Page 15: Getting Started
addPage(
  'Getting Started',
  '30-Day Action Plan:\n\n' +
  'Week 1:\n' +
  '- Form transformation task force\n' +
  '- Conduct value stream mapping\n\n' +
  'Week 2:\n' +
  '- Select 2-3 pilot teams\n' +
  '- Begin leadership training\n\n' +
  'Week 3:\n' +
  '- Establish metrics baseline\n' +
  '- Identify initial impediments\n\n' +
  'Week 4:\n' +
  '- Launch first agile training\n' +
  '- Schedule first program increment\n\n' +
  'Need help? Contact our agile experts: transformation@githubtech.com'
);

// Finalize the PDF
doc.end();
console.log('PDF generated at public/whitepapers/enterprise-agile-transformation.pdf');