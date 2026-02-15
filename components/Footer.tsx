import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brown text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/brand/kf-logo.svg"
                alt="KFoundry"
                width={32}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-heading font-bold">KFoundry</span>
            </Link>
            <p className="text-cream/70">Your partner in AI transformation</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <a
              href="mailto:hello@kfoundry.ai"
              className="text-cream/70 hover:text-cream transition-colors"
            >
              hello@kfoundry.ai
            </a>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/kfoundry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-grey mt-8 pt-8 text-cream/70 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {currentYear} KFoundry. All rights reserved.</p>
            <Link href="/privacy" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
