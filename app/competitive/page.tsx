'use client'

import { Button } from "@/components/ui/button"

export default function CompetitivePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-[#2D2D2D]">
              Don't Let AI Pass Your Business By
            </h1>
            <p className="text-2xl text-[#666666]">
              Get clarity on AI opportunities without the pressure
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <p className="text-lg text-[#2D2D2D]">
                Feeling overwhelmed by AI news but unsure where to start? You're not alone. We help mid-market leaders understand exactly where AI can impact their business today, without the hype or judgment. Start with a simple business conversation about your real opportunities.
              </p>
              <ul className="space-y-4">
                {[
                  "Get honest answers about what AI can (and can't) do for your business",
                  "See how other mid-market companies are successfully using AI today",
                  "Find your fastest path to meaningful AI adoption"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#8B1818] font-bold">•</span>
                    <span className="text-[#2D2D2D]">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="mt-8 bg-[#8B1818] hover:bg-[#6B1313] text-white px-8 py-3 rounded"
                onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
              >
                Book a Business Discussion
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Your Path Forward</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#8B1818] font-bold">1.</span>
                  <span>No-pressure discussion about your AI readiness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#8B1818] font-bold">2.</span>
                  <span>Clear assessment of your realistic opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#8B1818] font-bold">3.</span>
                  <span>Practical plan to get started at your pace</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
