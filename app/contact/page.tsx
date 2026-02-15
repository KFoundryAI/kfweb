'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Calendar } from 'lucide-react'

// Note: Metadata would be defined in a separate layout.tsx or via generateMetadata for server components

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brown mb-6">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-copper mb-8"></div>
              <p className="text-xl text-grey">
                Ready to transform your business with AI? We would love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Email */}
              <div className="text-center p-8 rounded-lg border border-copper/20">
                <Mail className="h-12 w-12 text-copper mx-auto mb-6" />
                <h2 className="text-xl font-heading font-bold text-brown mb-4">Email</h2>
                <a
                  href="mailto:hello@kfoundry.ai"
                  className="text-grey hover:text-copper transition-colors"
                >
                  hello@kfoundry.ai
                </a>
              </div>

              {/* Schedule */}
              <div className="text-center p-8 rounded-lg border border-copper/20">
                <Calendar className="h-12 w-12 text-copper mx-auto mb-6" />
                <h2 className="text-xl font-heading font-bold text-brown mb-4">Schedule</h2>
                <Button
                  variant="outline"
                  className="border-burgundy text-burgundy hover:bg-burgundy hover:text-cream"
                  onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
                >
                  Book a Call
                </Button>
              </div>

              {/* LinkedIn */}
              <div className="text-center p-8 rounded-lg border border-copper/20">
                <Linkedin className="h-12 w-12 text-copper mx-auto mb-6" />
                <h2 className="text-xl font-heading font-bold text-brown mb-4">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/company/kfoundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey hover:text-copper transition-colors"
                >
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-burgundy text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-cream">
              Let's Start the Conversation
            </h2>
            <p className="text-xl mb-8 text-cream/80 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore the possibilities,
              we are here to help.
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
