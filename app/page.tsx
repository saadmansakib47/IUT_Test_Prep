import Hero from '@/components/Hero';
import Card from '@/components/Card';
import HowItWorksStep from '@/components/HowItWorksStep';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Why Take Preparation with Us Section */}
      <section className="py-20 bg-gray-50 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 lg:max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004B49] mb-4">
              You can take your preparation with us
            </h2>
            <p className="text-lg text-gray-600">
              Three powerful pillars to supercharge your preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Real Simulation"
              description="Experience authentic exam conditions with timed tests, realistic question patterns, and pressure management. Auto-save ensures you never lose progress."
              icon={
                <div className="w-12 h-12 bg-[#004B49]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#004B49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              }
            />
            <Card
              title="Smart Analytics"
              description="Track your performance over time with detail-ed insights. Visualize your strengths, identify weak areas, and monitor improvement trends."
              icon={
                <div className="w-12 h-12 bg-[#004B49]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#004B49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              }
            />
            <Card
              title="Adaptive Learning"
              description="Questions automatically adjust to your skill level. Focus on areas that need improvement with personalized difficulty recommendations."
              icon={
                <div className="w-12 h-12 bg-[#004B49]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#004B49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004B49] mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <HowItWorksStep
              step="1"
              title="Create Account"
              description="Sign up for free in seconds and get instant access to all mock tests and features"
            />
            <HowItWorksStep
              step="2"
              title="Take Exam"
              description="Practice under realistic exam conditions with timer, question navigation, and auto-save"
            />
            <HowItWorksStep
              step="3"
              title="Review & Improve"
              description="Analyze detailed results, track performance trends, and identify areas for improvement"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
