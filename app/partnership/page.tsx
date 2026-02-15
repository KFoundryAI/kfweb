'use client'

import { Button } from "@/components/ui/button"

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-[#2D2D2D]">
              AI Made Simple for Business Leaders
            </h1>
            <p className="text-2xl text-[#666666]">
              From business conversation to implemented solution
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <p className="text-lg text-[#2D2D2D]">
                Finally, an AI partner that speaks your language. We handle the technical complexity while you focus on business outcomes. Built specifically for executives who want to leverage AI without getting lost in the technical details.
              </p>
              <ul className="space-y-4">
                {[
                  "Discussions focused on your business, not technology",
                  "Clear connection between your goals and AI capabilities",
                  "Solutions designed for business users, not technical teams"
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
                  <span>Business-focused discussion about your objectives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#8B1818] font-bold">2.</span>
                  <span>Clear roadmap showing immediate opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#8B1818] font-bold">3.</span>
                  <span>Quick path to your first business outcome</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
