import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/app/page'

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

describe('Home Page', () => {
  beforeEach(() => {
    // Mock window.open
    window.open = jest.fn()
  })

  it('renders the Header component', () => {
    render(<Home />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders the Footer component', () => {
    render(<Home />)

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders the main hero headline', () => {
    render(<Home />)

    expect(screen.getByText(/we are your/i)).toBeInTheDocument()
    expect(screen.getByText(/chief ai officer/i)).toBeInTheDocument()
  })

  it('renders the hero description', () => {
    render(<Home />)

    expect(
      screen.getByText(
        /kfoundry helps you navigate the ai landscape and implement solutions that drive real business value/i
      )
    ).toBeInTheDocument()
  })

  it('renders the Start Your AI Journey button', () => {
    render(<Home />)

    const button = screen.getByRole('button', { name: /start your ai journey/i })
    expect(button).toBeInTheDocument()
  })

  it('opens Calendly when Start Your AI Journey is clicked', () => {
    render(<Home />)

    const button = screen.getByRole('button', { name: /start your ai journey/i })
    fireEvent.click(button)

    expect(window.open).toHaveBeenCalledWith(
      'https://calendly.com/chase-kfoundry/30min',
      '_blank'
    )
  })

  it('renders Navigate AI with Confidence section', () => {
    render(<Home />)

    expect(screen.getByText(/navigate ai with confidence/i)).toBeInTheDocument()
  })

  it('renders Practical Implementation section', () => {
    render(<Home />)

    expect(screen.getByText(/practical implementation/i)).toBeInTheDocument()
  })

  it('renders Scale with Control section', () => {
    render(<Home />)

    expect(screen.getByText(/scale with control/i)).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<Home />)

    expect(screen.getByText(/ready to transform your business with ai/i)).toBeInTheDocument()
  })

  it('renders Schedule a Consultation button', () => {
    render(<Home />)

    const button = screen.getByRole('button', { name: /schedule a consultation/i })
    expect(button).toBeInTheDocument()
  })

  it('opens Calendly when Schedule a Consultation is clicked', () => {
    render(<Home />)

    const button = screen.getByRole('button', { name: /schedule a consultation/i })
    fireEvent.click(button)

    expect(window.open).toHaveBeenCalledWith(
      'https://calendly.com/chase-kfoundry/30min',
      '_blank'
    )
  })

  it('renders all value propositions', () => {
    render(<Home />)

    expect(screen.getByText(/quick validation through rapid deployment/i)).toBeInTheDocument()
    expect(screen.getByText(/cost-effective solutions/i)).toBeInTheDocument()
    expect(screen.getByText(/flexible integration/i)).toBeInTheDocument()
    expect(screen.getByText(/incremental scaling/i)).toBeInTheDocument()
  })

  it('renders implementation checklist items', () => {
    render(<Home />)

    expect(screen.getByText(/maximize your team's effectiveness/i)).toBeInTheDocument()
    expect(screen.getByText(/unlock the ai capabilities/i)).toBeInTheDocument()
    expect(screen.getByText(/create custom ai solutions/i)).toBeInTheDocument()
  })
})
