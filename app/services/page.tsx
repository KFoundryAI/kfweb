'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Lightbulb, Cog, TrendingUp, Users } from 'lucide-react'

// Note: Metadata would be defined in a separate layout.tsx or via generateMetadata for server components

const services = [
  {
    icon: Lightbulb,
    title: 'AI Strategy',
    description:
      'We help you identify where AI will create the most immediate impact for your business. Our strategic assessments find the sweet spot between your business objectives and AI capabilities.',
  },
  {
    icon: Cog,
    title: 'Implementation',
    description:
      'From optimizing existing tools like ChatGPT and Salesforce AI to building custom solutions, we handle the technical heavy lifting so you can focus on results.',
  },
  {
    icon: Users,
    title: 'Training & Enablement',
    description:
      'Empower your team to leverage AI effectively. We provide hands-on training tailored to your tools, processes, and use cases.',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Support',
    description:
      'AI is evolving rapidly. We provide ongoing advisory and support to ensure your AI initiatives continue delivering value as the landscape changes.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brown mb-6">
                Our Services
              </h1>
              <div className="w-24 h-1 bg-copper mb-8"></div>
              <p className="text-xl text-grey">
                We provide end-to-end AI consulting services to help you navigate the AI landscape
                and implement solutions that drive real business value.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-8 rounded-lg border border-copper/20 hover:border-copper/40 transition-colors"
                >
                  <service.icon className="h-12 w-12 text-copper mb-6" />
                  <h2 className="text-2xl font-heading font-bold text-brown mb-4">
                    {service.title}
                  </h2>
                  <p className="text-grey leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-burgundy text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-cream">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-cream/80 max-w-2xl mx-auto">
              Schedule a consultation to discuss how we can help you leverage AI to drive growth and
              efficiency.
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
