import React from 'react';
import { Calendar, User, ArrowLeft, Clock, TrendingUp } from 'lucide-react';

/*const FutureOfAgile: React.FC = () => {
  const navigate = useNavigate();*/

  const FutureOfAgile: React.FC<{ navigateTo?: (page: string) => void }> = ({ navigateTo }) => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <button 
            onClick={() => navigateTo?.('our-insights')}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8"
          >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Insights
        </button>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="mb-6">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            AI & Agile
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The Future of Agile: Integrating AI into Sprint Planning
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span>Dr. Emily Watson</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>March 15, 2025</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            <span>8 min read</span>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
          alt="AI and Agile"
          className="w-full h-auto rounded-xl shadow-lg mb-8"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            Artificial intelligence is revolutionizing agile methodologies, from automated story point estimation to intelligent sprint optimization. This article explores practical strategies for implementing AI-driven agile practices that can transform your team's productivity and predictability.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Current State of Sprint Planning</h2>
          <p>
            Traditional sprint planning relies heavily on human estimation, which is inherently subjective and often inconsistent. Teams struggle with:
          </p>
          <ul className="my-6 space-y-2">
            <li>Inaccurate story point estimations</li>
            <li>Unforeseen dependencies and blockers</li>
            <li>Difficulty balancing workloads across team members</li>
            <li>Challenges predicting velocity based on historical data</li>
          </ul>
          <p>
            These pain points create inefficiencies that compound over multiple sprints, leading to missed deadlines, frustrated teams, and unsatisfied stakeholders.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How AI is Transforming Agile Practices</h2>
          <p>
            Modern AI solutions are addressing these challenges through several innovative approaches:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Intelligent Story Point Estimation</h3>
          <p>
            Machine learning models trained on historical project data can now predict story points with 85-90% accuracy. These systems analyze:
          </p>
          <ul className="my-6 space-y-2">
            <li>Similarity to previously completed user stories</li>
            <li>Complexity metrics from code repositories</li>
            <li>Team composition and individual capabilities</li>
            <li>External dependencies and integration requirements</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Automated Sprint Backlog Creation</h3>
          <p>
            AI-powered tools can now recommend optimal sprint backlogs by:
          </p>
          <ul className="my-6 space-y-2">
            <li>Balancing technical debt with new feature development</li>
            <li>Identifying hidden dependencies between user stories</li>
            <li>Optimizing for knowledge sharing and pair programming opportunities</li>
            <li>Accounting for team member availability and vacations</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Predictive Sprint Risk Analysis</h3>
          <p>
            Advanced algorithms can now forecast potential sprint risks with remarkable accuracy by analyzing:
          </p>
          <ul className="my-6 space-y-2">
            <li>Historical velocity patterns</li>
            <li>Individual contributor performance trends</li>
            <li>External dependency statuses</li>
            <li>Even sentiment analysis from standup meeting transcripts</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-12 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Case Study: Acme Corp's AI Transformation</h3>
            <p className="text-blue-700">
              After implementing AI-powered sprint planning, Acme Corporation saw a 40% reduction in sprint carryover and a 28% improvement in estimation accuracy within three months. Their teams reported higher satisfaction with planning sessions and more predictable delivery timelines.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementing AI in Your Agile Process</h2>
          <p>
            Here's a practical roadmap for integrating AI into your sprint planning:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Phase 1: Data Collection</h3>
          <ul className="my-6 space-y-2">
            <li>Ensure all user stories are properly documented in your project management tool</li>
            <li>Connect your code repository to enable technical analysis</li>
            <li>Historical sprint data should be cleaned and normalized</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Phase 2: Pilot Implementation</h3>
          <ul className="my-6 space-y-2">
            <li>Start with AI-assisted story point estimation</li>
            <li>Compare AI predictions with team estimates to build trust</li>
            <li>Gradually introduce more advanced features</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Phase 3: Full Integration</h3>
          <ul className="my-6 space-y-2">
            <li>Incorporate AI recommendations into your sprint planning ceremonies</li>
            <li>Use predictive analytics for risk management</li>
            <li>Continuously refine models based on team feedback</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Human Element in AI-Driven Agile</h2>
          <p>
            While AI brings tremendous value, human judgment remains essential. The most successful implementations:
          </p>
          <ul className="my-6 space-y-2">
            <li>Treat AI as a team member rather than a replacement</li>
            <li>Maintain transparency about how decisions are made</li>
            <li>Allow teams to override recommendations with justification</li>
            <li>Regularly review and calibrate the AI models</li>
          </ul>

          <div className="bg-gray-100 p-6 rounded-lg my-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>AI can improve estimation accuracy by up to 90% when properly implemented</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>The best results come from combining AI insights with human expertise</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Implementation should be gradual, starting with basic features</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Continuous feedback and model refinement are critical for long-term success</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Looking Ahead: The Next Frontier</h2>
          <p>
            As AI continues to evolve, we can expect even more sophisticated agile enhancements:
          </p>
          <ul className="my-6 space-y-2">
            <li>Real-time sprint adjustments based on daily progress</li>
            <li>Automated retrospective analysis with actionable insights</li>
            <li>Predictive staffing recommendations for optimal team composition</li>
            <li>Integration with customer feedback for backlog prioritization</li>
          </ul>

          <p className="mt-12 text-lg">
            The future of agile is not about replacing human teams with machines, but about augmenting human capabilities with intelligent systems. By embracing AI in sprint planning, organizations can achieve unprecedented levels of predictability, efficiency, and ultimately, better software delivered faster.
          </p>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want More Insights Like This?</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for the latest on AI, Agile, and DevOps innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </div>
  );
};

export default FutureOfAgile;