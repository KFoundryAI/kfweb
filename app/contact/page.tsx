'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-cream">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-brown mb-4">Let&apos;s Talk</h1>
              <div className="w-20 h-1 bg-copper mb-5"></div>
              <p className="text-lg md:text-xl text-grey max-w-2xl">
                We&apos;re excited to help you forge the future with AI. Start a conversation with our team and let&apos;s see what we can build together.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Contact Form */}
              <div className="md:col-span-2 p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-brown font-semibold">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" className="mt-1 bg-cream border-copper/30 focus-visible:ring-copper" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brown font-semibold">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@email.com" className="mt-1 bg-cream border-copper/30 focus-visible:ring-copper" required />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-brown font-semibold">Company</Label>
                    <Input id="company" name="company" placeholder="Company or Organization" className="mt-1 bg-cream border-copper/30 focus-visible:ring-copper" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-brown font-semibold">Message</Label>
                    <Textarea id="message" name="message" placeholder="How can we help you?" className="mt-1 bg-cream border-copper/30 focus-visible:ring-copper" rows={5} required />
                  </div>
                  <Button type="submit" className="bg-copper text-cream font-bold hover:bg-brown w-full py-3 text-lg">Send Message</Button>
                </form>
              </div>
              {/* Sidebar */}
              <aside className="bg-cream border-l-2 border-copper/20 p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-heading font-bold text-brown mb-4">Contact Info</h2>
                  <p className="mb-2 text-brown font-medium">Email:</p>
                  <a href="mailto:hello@kfoundry.ai" className="text-copper text-base font-semibold break-words mb-4 block hover:underline">hello@kfoundry.ai</a>
                  <p className="mb-2 text-brown font-medium">Location:</p>
                  <p className="text-grey mb-4">Los Angeles, CA</p>
                </div>
                <div className="mt-8">
                  <h3 className="text-base font-heading text-brown font-semibold mb-2">Ready to Talk?</h3>
                  <a
                    href="https://calendly.com/chase-kfoundry/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full rounded-lg bg-copper text-cream text-center py-3 px-6 font-bold hover:bg-brown transition mb-2"
                  >
                    Book a Call
                  </a>
                  {/* Optionally, you could add Calendly embed here */}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
