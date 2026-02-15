import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { alt: string; src: string; className?: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={props.alt} src={props.src} className={props.className} />
  ),
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('Footer', () => {
  it('renders the KFoundry logo and tagline', () => {
    render(<Footer />)

    expect(screen.getByAltText('KFoundry')).toBeInTheDocument()
    expect(screen.getByText('Your partner in AI transformation')).toBeInTheDocument()
  })

  it('renders contact email', () => {
    render(<Footer />)

    const emailLink = screen.getByRole('link', { name: /hello@kfoundry.ai/i })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@kfoundry.ai')
  })

  it('renders LinkedIn link', () => {
    render(<Footer />)

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/kfoundry')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders privacy policy link', () => {
    render(<Footer />)

    const privacyLink = screen.getByRole('link', { name: /privacy policy/i })
    expect(privacyLink).toBeInTheDocument()
    expect(privacyLink).toHaveAttribute('href', '/privacy')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${currentYear} KFoundry`))).toBeInTheDocument()
  })

  it('renders Contact heading', () => {
    render(<Footer />)

    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Follow Us heading', () => {
    render(<Footer />)

    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('logo links to homepage', () => {
    render(<Footer />)

    const logoLinks = screen.getAllByRole('link')
    const homeLink = logoLinks.find((link) => link.getAttribute('href') === '/')
    expect(homeLink).toBeDefined()
  })
})
