import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'

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
  default: ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => (
    <a href={href} onClick={onClick}>{children}</a>
  ),
}))

describe('Header', () => {
  beforeEach(() => {
    // Mock window.open
    window.open = jest.fn()
  })

  it('renders the KFoundry logo and brand name', () => {
    render(<Header />)

    expect(screen.getByAltText('KFoundry')).toBeInTheDocument()
    expect(screen.getByText('KFoundry')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /careers/i })).toBeInTheDocument()
  })

  it('renders the Get Started button', () => {
    render(<Header />)

    const button = screen.getByRole('button', { name: /get started/i })
    expect(button).toBeInTheDocument()
  })

  it('opens Calendly link when Get Started button is clicked', () => {
    render(<Header />)

    const button = screen.getByRole('button', { name: /get started/i })
    fireEvent.click(button)

    expect(window.open).toHaveBeenCalledWith(
      'https://calendly.com/chase-kfoundry/30min',
      '_blank'
    )
  })

  it('renders with default variant', () => {
    const { container } = render(<Header />)

    const header = container.querySelector('header')
    expect(header).toHaveClass('bg-cream')
  })

  it('renders with transparent variant', () => {
    const { container } = render(<Header variant="transparent" />)

    const header = container.querySelector('header')
    expect(header).toHaveClass('bg-transparent')
  })

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Header />)

    // Initially mobile menu should be closed
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toBeInTheDocument()

    // Click to open
    fireEvent.click(menuButton)

    // Menu should now be open with close button
    const closeButton = screen.getByRole('button', { name: /close menu/i })
    expect(closeButton).toBeInTheDocument()

    // Mobile nav links should be visible
    const mobileLinks = screen.getAllByRole('link', { name: /services/i })
    expect(mobileLinks.length).toBeGreaterThan(1)
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Header />)

    // Open the mobile menu
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(menuButton)

    // Get all services links and click the mobile one (second one)
    const serviceLinks = screen.getAllByRole('link', { name: /services/i })
    fireEvent.click(serviceLinks[1]) // Click mobile link

    // After clicking a link, the mobile menu should close
    // The open menu button should be back
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when contact link is clicked', () => {
    render(<Header />)

    // Open the mobile menu
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))

    // Click mobile contact link
    const contactLinks = screen.getAllByRole('link', { name: /contact/i })
    fireEvent.click(contactLinks[1])

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when careers link is clicked', () => {
    render(<Header />)

    // Open the mobile menu
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))

    // Click mobile careers link
    const careersLinks = screen.getAllByRole('link', { name: /careers/i })
    fireEvent.click(careersLinks[1])

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('opens Calendly and closes menu when mobile Get Started is clicked', () => {
    render(<Header />)

    // Open the mobile menu
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))

    // Click mobile Get Started button (second one)
    const buttons = screen.getAllByRole('button', { name: /get started/i })
    fireEvent.click(buttons[1]) // Mobile button

    // Should open Calendly
    expect(window.open).toHaveBeenCalledWith(
      'https://calendly.com/chase-kfoundry/30min',
      '_blank'
    )

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has correct href for navigation links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '/services')
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
    expect(screen.getByRole('link', { name: /careers/i })).toHaveAttribute('href', '/careers')
  })

  it('logo links to homepage', () => {
    render(<Header />)

    const logoLink = screen.getByRole('link', { name: /kfoundry/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })
})
