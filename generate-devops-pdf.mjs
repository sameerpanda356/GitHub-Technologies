import PDFDocument from 'pdfkit';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Create directory if it doesn't exist
const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = 'public/whitepapers';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create a document
const doc = new PDFDocument({ margin: 50 });

// Pipe output to file
doc.pipe(fs.createWriteStream(`${outputDir}/devops-maturity-assessment.pdf`));

// Add content function
const addPage = (title, content) => {
  doc.addPage();
  doc.fontSize(18).text(title, { align: 'center' });
  doc.moveDown(0.5);
  doc.fontSize(11).text(content, { align: 'justify', width: 500 });
};

// Page 1: Title Page
doc.fontSize(24).text('DevOps Maturity Assessment Framework', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(16).text('A Practical Guide for Continuous Improvement', { align: 'center' });
doc.moveDown(2);
doc.fontSize(12).text('GitHub Technologies Team', { align: 'center' });
doc.text('August 7, 2025', { align: 'center' });
doc.text('v1.0', { align: 'center' });

// Page 2: Executive Summary
addPage(
  'Executive Summary',
  'DevOps maturity directly impacts business performance. Organizations with high DevOps maturity experience:\n' +
  '• 30x more frequent deployments\n' +
  '• 200x faster lead times from commit to deploy\n' +
  '• 24x faster recovery from failures\n' +
  '• 3x lower change failure rates\n\n' +
  'This framework assesses maturity across four pillars:\n' +
  '1. Culture: Collaboration, shared responsibility, and blamelessness\n' +
  '2. Automation: CI/CD, infrastructure as code, and automated testing\n' +
  '3. Measurement: Tracking and acting upon key metrics\n' +
  '4. Sharing: Knowledge sharing and collaboration across teams'
);

// Page 3: Assessment Framework Overview
addPage(
  'Assessment Framework Overview',
  'The DevOps Maturity Model consists of five levels:\n\n' +
  'Level 1: Initial\n' +
  '- Ad-hoc processes\n' +
  '- Manual deployments\n' +
  '- Siloed teams\n\n' +
  'Level 2: Managed\n' +
  '- Basic automation\n' +
  '- Some process standardization\n' +
  '- Beginning of cross-team collaboration\n\n' +
  'Level 3: Defined\n' +
  '- Standardized processes\n' +
  '- CI/CD implementation\n' +
  '- Basic monitoring\n\n' +
  'Level 4: Quantitatively Managed\n' +
  '- Metrics-driven improvement\n' +
  '- Automated testing\n' +
  '- Proactive monitoring\n\n' +
  'Level 5: Optimizing\n' +
  '- Continuous experimentation\n' +
  '- Self-healing systems\n' +
  '- Predictive analytics'
);

// Page 4: Culture Dimension
addPage(
  'Culture Dimension',
  'People, collaboration, and mindset are the foundation of DevOps:\n\n' +
  'Key Assessment Criteria:\n' +
  '• Blameless postmortems\n' +
  '• Cross-functional teams\n' +
  '• Leadership support\n' +
  '• Failure tolerance\n' +
  '• Shared responsibility\n\n' +
  'Improvement Playbook:\n' +
  '• Implement "You build it, you run it" ownership\n' +
  '• Conduct value stream mapping workshops\n' +
  '• Establish psychological safety practices'
);

// Page 5: Automation Dimension
addPage(
  'Automation Dimension',
  'Automation enables speed, consistency, and reliability:\n\n' +
  'Key Metrics:\n' +
  '• Deployment frequency\n' +
  '• Lead time for changes\n' +
  '• % automated test coverage\n' +
  '• Infrastructure provisioning time\n\n' +
  'Toolchain Evaluation:\n' +
  '- CI/CD: Jenkins, GitLab CI, GitHub Actions\n' +
  '- IaC: Terraform, CloudFormation, Pulumi\n' +
  '- Containerization: Docker, Kubernetes\n' +
  '- Configuration Management: Ansible, Chef, Puppet'
);

// Page 6: Measurement Dimension
addPage(
  'Measurement Dimension',
  'What gets measured gets improved:\n\n' +
  'Core DORA Metrics:\n' +
  '1. Deployment Frequency\n' +
  '2. Lead Time for Changes\n' +
  '3. Mean Time to Recovery (MTTR)\n' +
  '4. Change Failure Rate\n\n' +
  'Diagnostic Checklist:\n' +
  '[ ] End-to-end monitoring\n' +
  '[ ] Real-time dashboards\n' +
  '[ ] Business metrics correlation\n' +
  '[ ] Automated alerting\n' +
  '[ ] Log aggregation'
);

// Page 7: Sharing Dimension
addPage(
  'Sharing Dimension',
  'Breaking down silos through knowledge transfer:\n\n' +
  'Best Practices:\n' +
  '• Internal open source model\n' +
  '• Guilds and communities of practice\n' +
  '• Pair programming/mob sessions\n' +
  '• Centralized documentation hub\n' +
  '• Cross-team demos\n\n' +
  'Tool Stack:\n' +
  '- Documentation: Confluence, Notion, GitHub Wikis\n' +
  '- Collaboration: Slack, Microsoft Teams\n' +
  '- Knowledge Sharing: Internal tech talks, workshops'
);

// Page 8: Implementation Roadmap
addPage(
  'Implementation Roadmap',
  '90-Day Improvement Plan:\n\n' +
  'Weeks 1-4: Assessment\n' +
  '- Current state analysis\n' +
  '- Baseline metrics collection\n' +
  '- Quick win identification\n\n' +
  'Weeks 5-8: Automation Foundation\n' +
  '- CI pipeline implementation\n' +
  '- Infrastructure as Code setup\n' +
  '- Basic monitoring\n\n' +
  'Weeks 9-12: Culture & Measurement\n' +
  '- Blameless postmortem process\n' +
  '- DORA metrics dashboard\n' +
  '- Knowledge sharing sessions'
);

// Page 9: Case Study - Financial Services
addPage(
  'Case Study: Financial Services Transformation',
  'Starting Point (Level 1):\n' +
  '- Monthly release cycles\n' +
  '- Manual deployments (4+ hours)\n' +
  '- 40% failure rate\n' +
  '- Siloed teams\n\n' +
  'Improvements Implemented:\n' +
  '- Containerized 200+ applications\n' +
  '- Implemented GitOps workflow\n' +
  '- Created SRE team\n' +
  '- Established blameless culture\n\n' +
  'Results After 18 Months (Level 4):\n' +
  '- Daily deployments\n' +
  '- 15-minute deployment time\n' +
  '- 98% reduction in outages\n' +
  '- $2.3M annual infrastructure savings'
);

// Page 10: Conclusion & Next Steps
addPage(
  'Conclusion & Next Steps',
  'Continuous Improvement Cycle:\n' +
  '1. Assess: Quarterly maturity scoring\n' +
  '2. Prioritize: Focus on 1-2 dimensions per quarter\n' +
  '3. Implement: Small, incremental changes\n' +
  '4. Measure: Track DORA metrics weekly\n' +
  '5. Optimize: Retrospect and adjust\n\n' +
  'Getting Started:\n' +
  '1. Download assessment toolkit\n' +
  '2. Schedule initial maturity assessment\n' +
  '3. Join DevOps Community of Practice\n' +
  '4. Implement first automation workflow'
);

// Finalize the PDF
doc.end();
console.log('PDF generated at public/whitepapers/devops-maturity-assessment.pdf');