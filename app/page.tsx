'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { ClipboardCheck, Search, Database, Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-24 md:py-32 px-4 bg-cream">
          <span className="uppercase tracking-widest text-copper text-base md:text-lg font-semibold mb-4">Building with AI. Grounded in Your Business.</span>
          <h1 className="font-heading text-brown text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            You Know Your Business. <span className="text-copper">We Know How to Make It Faster.</span>
          </h1>
          <p className="text-brown/90 text-lg md:text-2xl mb-10 max-w-2xl mx-auto">
            Most companies know AI matters. Few have the bandwidth to act on it.
            <br className="hidden md:inline" />
            We bring decades of business and engineering experience to find high-impact opportunities-then build and ship them in weeks, not quarters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-copper text-cream font-semibold px-8 py-4 text-lg shadow-none hover:bg-brown transition"
              onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
            >
              Book a Strategy Call
            </Button>
            <Button
              variant="outline"
              className="border-copper text-copper bg-cream hover:bg-copper hover:text-cream font-semibold px-8 py-4 text-lg transition"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-brown text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <div className="w-24 h-1 bg-copper mb-8" />
            <p className="text-grey text-lg md:text-xl mb-12">
              Three steps. No big commitment upfront.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center md:text-left">
                <span className="text-copper font-heading text-5xl font-bold">1</span>
                <h3 className="font-heading font-bold text-brown text-xl mt-2 mb-3">We Listen</h3>
                <p className="text-grey">
                  Tell us about your business—where you&apos;re headed, what&apos;s slowing you down, what you wish your team had time to tackle. We find where AI creates the most leverage.
                </p>
              </div>
              <div className="text-center md:text-left">
                <span className="text-copper font-heading text-5xl font-bold">2</span>
                <h3 className="font-heading font-bold text-brown text-xl mt-2 mb-3">We Build</h3>
                <p className="text-grey">
                  We pick the highest-impact opportunity and ship a working solution in weeks—not a deck, not a roadmap, a real tool your team uses.
                </p>
              </div>
              <div className="text-center md:text-left">
                <span className="text-copper font-heading text-5xl font-bold">3</span>
                <h3 className="font-heading font-bold text-brown text-xl mt-2 mb-3">We Scale</h3>
                <p className="text-grey">
                  Results in hand, we expand what&apos;s working. Your team learns the tools along the way.
                </p>
              </div>
            </div>
            <p className="text-grey text-lg text-center md:text-left">
              No 6-month discovery phase. No massive SOW. It starts with a conversation.
            </p>
          </div>
        </section>

        {/* Why KFoundry */}
        <section className="py-24 bg-cream px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-brown text-3xl md:text-4xl font-bold mb-4">Why KFoundry?</h2>
            <div className="w-24 h-1 bg-copper mb-8" />
            <p className="text-grey text-lg md:text-xl mb-8">
              Foundries forge raw materials into valuable tools. KFoundry forges your <span className="text-copper font-semibold">K=Knowledge</span> into a durable, unfair business advantage-built on modern AI.
            </p>
            <ul className="list-disc list-inside space-y-2 text-grey text-lg ml-4">
              <li>Rooted in deep technology expertise and pragmatic business outcomes</li>
              <li>Rapid pilots, then scale: No faith-based IT projects</li>
              <li>Proprietary knowledge stays yours; value stays compounding</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-white px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-heading text-brown text-3xl md:text-4xl font-bold mb-4">What Can We Help Forge?</h2>
            <div className="w-24 h-1 bg-copper mb-12 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-cream rounded-lg shadow-md p-8 flex flex-col items-center">
                <ClipboardCheck className="h-10 w-10 text-copper mb-4" />
                <h3 className="font-heading font-bold text-brown text-xl mb-2">Workflow Automation</h3>
                <ul className="text-grey text-sm space-y-1">
                  <li>Accial due diligence</li>
                  <li>Content composer</li>
                </ul>
              </div>
              <div className="bg-cream rounded-lg shadow-md p-8 flex flex-col items-center">
                <Search className="h-10 w-10 text-copper mb-4" />
                <h3 className="font-heading font-bold text-brown text-xl mb-2">Information Retrieval</h3>
                <ul className="text-grey text-sm space-y-1">
                  <li>Spinnaker search</li>
                  <li>Sales training tools</li>
                  <li>Enterprise GPT</li>
                </ul>
              </div>
              <div className="bg-cream rounded-lg shadow-md p-8 flex flex-col items-center">
                <Database className="h-10 w-10 text-copper mb-4" />
                <h3 className="font-heading font-bold text-brown text-xl mb-2">Data Processing</h3>
                <ul className="text-grey text-sm space-y-1">
                  <li>Organize unstructured data</li>
                  <li>Database migration</li>
                  <li>Predictive analytics (deal probability)</li>
                  <li>Scheduling/availability analysis</li>
                </ul>
              </div>
              <div className="bg-cream rounded-lg shadow-md p-8 flex flex-col items-center">
                <Code className="h-10 w-10 text-copper mb-4" />
                <h3 className="font-heading font-bold text-brown text-xl mb-2">Product & Software Dev</h3>
                <ul className="text-grey text-sm space-y-1">
                  <li>Code base migration</li>
                  <li>Higher security & reliability</li>
                  <li>Async team workflows</li>
                  <li>Productive, collab prototyping</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Inaction */}
        <section className="py-24 bg-cream px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-brown text-3xl md:text-4xl font-bold mb-4">Cost of Inaction</h2>
            <div className="w-24 h-1 bg-copper mb-8" />
            <p className="text-lg text-grey mb-4">
              <span className="font-semibold text-copper">The uncomfortable truth:</span> Every month your team spends without real AI fluency, your competitors are compounding their advantage. This isn't a technology you can "wait and see" on. The companies that invest in their people's AI competency now will be the ones setting the pace-everyone else will be reacting.
            </p>
            <p className="text-grey">
              Locking down AI tools doesn't protect your company. It guarantees you'll be hiring to catch up while your competitors are shipping with smaller, faster, AI-augmented teams.
            </p>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-24 bg-burgundy text-center px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-cream">
              Turn Your Knowledge Into Competitive Advantage
            </h2>
            <p className="text-xl mb-8 text-cream/80 max-w-2xl mx-auto">
              Schedule a 1:1 strategy call-we&apos;ll help you chart a direct path to AI-driven wins.
            </p>
            <Button
              className="bg-gold hover:bg-copper text-brown font-bold px-10 py-6 text-lg"
              onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
            >
              Start the Conversation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
