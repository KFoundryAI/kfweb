import { render, screen, fireEvent } from '@testing-library/react'
import ContactPage from '@/app/contact/page'

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

// Mock Header and Footer components
jest.mock('@/components/Header', () => ({
  __esModule: true,
  default: () => <header data-testid="header">Header</header>,
}))

jest.mock('@/components/Footer', () => ({
  __esModule: true,
  default: () => <footer data-testid="footer">Footer</footer>,
}))

describe('Contact Page', () => {
  beforeEach(() => {
    window.open = jest.fn()
  })

  it('renders the Header component', () => {
    render(<ContactPage />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders the Footer component', () => {
    render(<ContactPage />)

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders the page title', () => {
    render(<ContactPage />)

    expect(screen.getByRole('heading', { level: 1, name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the intro description', () => {
    render(<ContactPage />)

    expect(screen.getByText(/ready to transform your business with ai/i)).toBeInTheDocument()
  })

  it('renders Email contact option', () => {
    render(<ContactPage />)

    expect(screen.getByText('Email')).toBeInTheDocument()
    const emailLink = screen.getByRole('link', { name: /hello@kfoundry.ai/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@kfoundry.ai')
  })

  it('renders Schedule contact option', () => {
    render(<ContactPage />)

    expect(screen.getByText('Schedule')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book a call/i })).toBeInTheDocument()
  })

  it('renders LinkedIn contact option', () => {
    render(<ContactPage />)

    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    const linkedinLink = screen.getByRole('link', { name: /follow us/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/kfoundry')
  })

  it('opens Calendly when Book a Call is clicked', () => {
    render(<ContactPage />)

    const button = screen.getByRole('button', { name: /book a call/i })
    fireEvent.click(button)

    expect(window.open).toHaveBeenCalledWith(
      'https://calendly.com/chase-kfoundry/30min',
      '_blank'
    )
  })

  it('renders the CTA section', () => {
    render(<ContactPage />)

    expect(screen.getByText(/let's start the conversation/i)).toBeInTheDocument()
  })

  it('renders Schedule a Consultation button in CTA', () => {
    render(<ContactPage />)

    const buttons = screen.getAllByRole('button', { name: /schedule a consultation/i })
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('opens Calendly when Schedule a Consultation is clicked', () => {
    render(<ContactPage />)

    const button = screen.getByRole('button', { name: /schedule a consultation/i })
    fireEvent.click(button)

    expect(window.open).toHaveBeenCalledWith(
      'https://calendly.com/chase-kfoundry/30min',
      '_blank'
    )
  })
})
