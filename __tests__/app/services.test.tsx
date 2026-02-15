import { render, screen, fireEvent } from '@testing-library/react'
import ServicesPage from '@/app/services/page'

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

describe('Services Page', () => {
  beforeEach(() => {
    window.open = jest.fn()
  })

  it('renders the Header component', () => {
    render(<ServicesPage />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders the Footer component', () => {
    render(<ServicesPage />)

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders the page title', () => {
    render(<ServicesPage />)

    expect(screen.getByRole('heading', { level: 1, name: /our services/i })).toBeInTheDocument()
  })

  it('renders the intro description', () => {
    render(<ServicesPage />)

    expect(
      screen.getByText(/we provide end-to-end ai consulting services/i)
    ).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<ServicesPage />)

    expect(screen.getByText('AI Strategy')).toBeInTheDocument()
    expect(screen.getByText('Implementation')).toBeInTheDocument()
    expect(screen.getByText('Training & Enablement')).toBeInTheDocument()
    expect(screen.getByText('Ongoing Support')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<ServicesPage />)

    expect(screen.getByText(/identify where ai will create/i)).toBeInTheDocument()
    expect(screen.getByText(/optimizing existing tools/i)).toBeInTheDocument()
    expect(screen.getByText(/empower your team/i)).toBeInTheDocument()
    expect(screen.getByText(/ai is evolving rapidly/i)).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<ServicesPage />)

    expect(screen.getByText(/ready to get started/i)).toBeInTheDocument()
  })

  it('renders Schedule a Consultation button', () => {
    render(<ServicesPage />)

    const button = screen.getByRole('button', { name: /schedule a consultation/i })
    expect(button).toBeInTheDocument()
  })

  it('opens Calendly when Schedule a Consultation is clicked', () => {
    render(<ServicesPage />)

    const button = screen.getByRole('button', { name: /schedule a consultation/i })
    fireEvent.click(button)

    expect(window.open).toHaveBeenCalledWith(
      'https://calendly.com/chase-kfoundry/30min',
      '_blank'
    )
  })
})
