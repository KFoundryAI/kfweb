'use client'

import { Button } from "@/components/ui/button"
import { Rocket, DollarSign, Cloud, TrendingUp } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
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
          <div className="container mx-auto px-4 relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-brown max-w-4xl mb-8">
              We Are Your{' '}
              <span className="inline-block border-b-4 border-copper">
                Chief AI Officer.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-grey max-w-2xl mb-12">
              KFoundry helps you navigate the AI landscape and implement solutions that drive real business value.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-burgundy text-cream hover:bg-brown px-8 py-6 text-lg"
                onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
              >
                Start Your AI Journey
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brown mb-6">
                Navigate AI with Confidence
              </h2>
              <div className="w-24 h-1 bg-copper mb-8"></div>
              <p className="text-lg md:text-xl text-grey leading-relaxed">
                We help executives identify where AI will create the most immediate impact for their business. By understanding your goals and challenges, we find the sweet spot between your business objectives and AI&apos;s current capabilities. Our approach ensures you&apos;re investing in AI initiatives that deliver real value, not just following trends.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brown mb-6">
                Practical Implementation
              </h2>
              <div className="w-24 h-1 bg-copper mb-8"></div>
              <p className="text-lg md:text-xl text-grey leading-relaxed mb-8">
                Whether you need to optimize existing tools or build custom solutions, we&apos;re here to help.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 text-lg text-grey">
                  <span className="text-copper flex-shrink-0">✓</span>
                  <span>Maximize your team&apos;s effectiveness with tools like ChatGPT and Google Gemini</span>
                </li>
                <li className="flex gap-4 text-lg text-grey">
                  <span className="text-copper flex-shrink-0">✓</span>
                  <span>Unlock the AI capabilities in software you already own like Salesforce</span>
                </li>
                <li className="flex gap-4 text-lg text-grey">
                  <span className="text-copper flex-shrink-0">✓</span>
                  <span>Create custom AI solutions that combine leading models with your proprietary knowledge and methods to build sustainable competitive advantages</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brown mb-6">
                Scale with Control
              </h2>
              <div className="w-24 h-1 bg-copper mb-8"></div>
              <p className="text-lg md:text-xl text-grey leading-relaxed mb-12">
                We believe AI implementation should pay for itself. Our approach emphasizes:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Rocket className="h-6 w-6 text-copper flex-shrink-0 mt-1" />
                  <p className="text-lg text-grey">
                    Quick validation through rapid deployment to production
                  </p>
                </div>
                <div className="flex gap-4">
                  <DollarSign className="h-6 w-6 text-copper flex-shrink-0 mt-1" />
                  <p className="text-lg text-grey">
                    Cost-effective solutions using open-source models and tools
                  </p>
                </div>
                <div className="flex gap-4">
                  <Cloud className="h-6 w-6 text-copper flex-shrink-0 mt-1" />
                  <p className="text-lg text-grey">
                    Flexible integration with your existing cloud infrastructure (AWS, Azure, or GCP)
                  </p>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="h-6 w-6 text-copper flex-shrink-0 mt-1" />
                  <p className="text-lg text-grey">
                    Incremental scaling based on validated results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-burgundy text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-cream">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 text-cream/80 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you leverage AI to drive growth and efficiency in your organization.
            </p>
            <Button
              className="bg-gold hover:bg-copper text-cream px-8 py-6 text-lg"
              onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
