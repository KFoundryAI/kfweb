'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Network } from 'lucide-react'

export default function RoiPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="py-6 px-4 bg-[#f6f0de]">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#56211d]">KFoundry</span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Button 
              className="bg-[#56211d] text-[#f6f0de] hover:bg-[#44352c]"
              onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
            >
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div 
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: 'url(/background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'scaleX(-1)',
              }}
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(246, 240, 222, 0.9) 0%, rgba(246, 240, 222, 0.8) 50%, rgba(246, 240, 222, 0.2) 100%)',
              }}
            />
            <div className="container mx-auto px-4 relative h-full flex items-center">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 max-w-2xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#44352c] mb-8">
                    A Business First Approach to AI
                  </h1>
                  <p className="text-xl md:text-2xl text-[#705e4e] mb-12">
                    Clear, measurable outcomes without the technical complexity
                  </p>
                  <Button 
                    className="bg-[#56211d] text-[#f6f0de] hover:bg-[#44352c] text-xl px-10 py-6"
                    onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
                  >
                    Book a Conversation
                  </Button>
                </div>

                <div className="flex-1 space-y-6 max-w-lg">
                  <div className="bg-white rounded-lg p-8 shadow-md">
                    <h3 className="text-xl font-semibold text-[#c17d44] mb-3">A Simple Conversation</h3>
                    <p className="text-[#705e4e]">Share your business goals with us – your industry expertise combined with our AI knowledge is all we need to get started.</p>
                  </div>

                  <div className="bg-white rounded-lg p-8 shadow-md">
                    <h3 className="text-xl font-semibold text-[#c17d44] mb-3">Your AI Roadmap</h3>
                    <p className="text-[#705e4e]">We show you where AI capabilities intersect with your business goals, creating a clear path to implementing AI solutions that deliver real value.</p>
                  </div>

                  <div className="bg-white rounded-lg p-8 shadow-md">
                    <h3 className="text-xl font-semibold text-[#c17d44] mb-3">Implemented Quickly to Prove Value</h3>
                    <p className="text-[#705e4e]">We execute a rapid implementation plan for your AI project, helping you demonstrate real results with minimal upfront investment.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="py-24 bg-[#f6f0de]">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#44352c] text-center mb-16">
                  We are AI builders who speak your language
                </h2>
                <div className="space-y-8 text-2xl text-[#705e4e] mb-16 text-center">
                  <p className="whitespace-nowrap">KFoundry is an AI firm built for business leaders, not IT experts.</p>
                  <p className="whitespace-nowrap">We turn your business objectives into practical AI solutions...and actually build them.</p>
                </div>
                <div className="text-center">
                  <Button 
                    className="bg-[#56211d] text-[#f6f0de] hover:bg-[#44352c] text-xl px-10 py-6"
                    onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
                  >
                    Book a Conversation
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Dark CTA Section */}
          <section className="py-24 bg-[#1e2e29]">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f6f0de] text-center">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-xl mb-12 text-[#bdb7a7] text-center">
                  Let's discuss how we can help you leverage AI to drive growth and efficiency in your organization.
                </p>
                <div className="text-center">
                  <Button 
                    className="bg-[#c17d44] hover:bg-[#705e4e] text-[#f6f0de] text-xl px-10 py-6"
                    onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#44352c] text-[#f6f0de] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Network className="h-6 w-6" />
                <span className="text-xl font-bold">KFoundry</span>
              </div>
              <p className="text-[#bdb7a7]">
                Your partner in AI transformation
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-[#bdb7a7]">hello@kfoundry.ai</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/kfoundry" target="_blank" rel="noopener noreferrer" className="text-[#bdb7a7] hover:text-[#f6f0de]">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#705e4e] mt-8 pt-8 text-[#bdb7a7] text-sm">
            <div className="flex justify-between items-center">
              <p>&copy; 2025 KFoundry. All rights reserved.</p>
              <a href="/privacy" className="text-[#bdb7a7] hover:text-[#f6f0de]">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
