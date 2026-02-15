'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-[#f6f0de]">
      {/* Navigation */}
      <nav className="py-4 px-6 bg-white/80 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#56211d]">KFoundry</span>
          </Link>
          <div className="flex gap-4 items-center">
            <Button 
              className="bg-[#56211d] text-[#f6f0de] hover:bg-[#44352c]"
              onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-[#44352c] mb-6">
            Make Your Business Knowledge Work Harder
          </h1>
          <p className="text-2xl text-[#705e4e] mb-8">
            AI solutions that executives can understand and teams will embrace
          </p>
          <Button 
            className="bg-[#56211d] text-[#f6f0de] hover:bg-[#44352c] px-8 py-6 text-lg"
            onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
          >
            Book a Business Discussion
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-[#56211d] mb-2">94%</div>
            <div className="text-[#705e4e]">of executives say AI will be critical to their business success in the next 5 years</div>
          </div>
          <div className="bg-[#56211d] text-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl font-bold mb-2">3.5x</div>
            <div>faster time to value when implementing AI with business-first approach</div>
          </div>
          <div className="bg-[#c17d44] text-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl font-bold mb-2">85%</div>
            <div>of AI projects fail without proper business alignment</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-[#44352c]">
              No technical expertise needed. Share your business objectives with us, and we'll show you how AI can amplify your company's knowledge and expertise. Built for business leaders who want results, not technical complexity.
            </p>
            <ul className="space-y-4">
              {[
                "Speak your language - business goals, not technical jargon",
                "Solutions that amplify your company's existing expertise",
                "Clear path from business objective to implemented solution"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-[#c17d44] font-bold">•</span>
                  <span className="text-[#44352c]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-[#44352c]">Your Path Forward</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-[#c17d44] font-bold">1.</span>
                <span className="text-[#44352c]">Business-focused discussion about your objectives</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#c17d44] font-bold">2.</span>
                <span className="text-[#44352c]">Clear roadmap showing immediate opportunities</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#c17d44] font-bold">3.</span>
                <span className="text-[#44352c]">Quick path to your first business outcome</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
