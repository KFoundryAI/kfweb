'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  variant?: 'default' | 'transparent'
}

export default function Header({ variant = 'default' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const bgClass = variant === 'transparent' ? 'bg-transparent' : 'bg-cream'

  return (
    <header className={`py-6 px-4 ${bgClass}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/kf-logo.svg"
            alt="KFoundry"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-2xl font-heading font-bold text-burgundy">KFoundry</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/services"
            className="text-grey hover:text-copper transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-grey hover:text-copper transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/careers"
            className="text-grey hover:text-copper transition-colors"
          >
            Careers
          </Link>
          <Button
            className="bg-burgundy text-cream hover:bg-brown"
            onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-grey"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-copper/20">
          <div className="container mx-auto flex flex-col gap-4 pt-4">
            <Link
              href="/services"
              className="text-grey hover:text-copper transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-grey hover:text-copper transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/careers"
              className="text-grey hover:text-copper transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Button
              className="bg-burgundy text-cream hover:bg-brown w-full"
              onClick={() => {
                window.open('https://calendly.com/chase-kfoundry/30min', '_blank')
                setMobileMenuOpen(false)
              }}
            >
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
