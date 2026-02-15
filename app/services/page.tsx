'use client'

import Footer from '@/components/Footer'

// Use-case cards content
const useCases = [
  {
    title: 'Workflow Automation',
    description:
      'From automated diligence to content composition, we streamline business routines and unlock productivity with scalable, reliable workflows.'
  },
  {
    title: 'Information Retrieval',
    description:
      'Supercharge your teams with enterprise search, AI-powered sales enablement, and powerful discovery—making knowledge and insights instantly accessible.'
  },
  {
    title: 'Data Processing',
    description:
      'Organize unstructured data, migrate legacy systems, and predict readiness with advanced analytics and purpose-built data agents.'
  },
  {
    title: 'Product & Software Development',
    description:
      'Accelerate delivery, enable secure and reliable migration, and unlock cost-effective, iterative product development that scales alongside you.'
  }
]

const maturityPhases = [
  { name: 'Phase 1', title: 'Foundation', desc: 'Lay the groundwork—AI literacy, safe experimentation, and baseline tool integration.' },
  { name: 'Phase 2', title: 'Integration', desc: 'Embed AI into key workflows—process automation, data pipelines, advanced workflow configuration.' },
  { name: 'Phase 3', title: 'Custom', desc: 'Custom agent builds, agentic orchestration, and org-specific AI competency at scale.' }
]

const paieStages = [
  { label: 'Deliberate', desc: 'Early, intentional use—novelty, testing, and careful rollout. Users consult the AI.' },
  { label: 'Default', desc: 'AI is how work gets done—integrated, invisible, and expected. Teams rely on the AI routinely.' },
  { label: 'Disruptive', desc: 'AI use pushes boundaries, enabling patterns of work that were previously impossible.' }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* HEADER Placeholder (add when Header component exists) */}
      <main className="flex-1">
        {/* What We Do */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brown mb-6">What We Do</h1>
            <div className="w-24 h-1 bg-copper mb-8"></div>
            <p className="text-lg md:text-xl text-grey max-w-2xl">
              We help organizations bridge the gap from AI curiosity to real business transformation. Whether it’s automating workflows, surfacing insights, or enabling next-generation product teams, KFoundry provides the expertise, tools, and mindset your team needs to become AI fluent and future-ready.
            </p>
          </div>
        </section>

        {/* Use Case Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brown mb-12 text-center">Sample Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {useCases.map((u) => (
                <div key={u.title} className="p-8 rounded-lg border border-copper/25 bg-cream hover:border-copper/60 transition-colors shadow-md">
                  <h3 className="text-xl font-heading font-bold text-burgundy mb-2">{u.title}</h3>
                  <p className="text-grey text-base">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Maturity Model */}
        <section className="py-16 bg-copper/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-heading font-bold text-brown mb-8">AI Maturity Model</h2>
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
              {maturityPhases.map((phase, idx) => (
                <div key={phase.name} className={
                  `flex-1 rounded-lg px-6 py-8 mb-2 md:mb-0 text-center bg-cream shadow-lg border-2 ${idx === 0 ? 'border-gold' : idx === 1 ? 'border-copper' : 'border-burgundy'}`
                }>
                  <div className="text-sm uppercase tracking-wider text-copper mb-1">{phase.name}</div>
                  <div className="text-xl font-heading font-bold text-brown mb-2">{phase.title}</div>
                  <div className="text-grey text-base">{phase.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAIE Framework */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-heading font-bold text-brown mb-8">PAIE Framework: Growth Through Use</h2>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {paieStages.map((stage, i) => (
                <div key={stage.label} className={
                  `flex-1 border-2 rounded-lg p-6 md:p-8 shadow-md
                   ${i === 0 ? 'border-gold' : i === 1 ? 'border-copper' : 'border-burgundy'} bg-cream`}
                >
                  <span className="block text-copper font-bold text-lg mb-1">{stage.label}</span>
                  <div className="text-grey">{stage.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-grey text-sm italic text-center max-w-xl mx-auto">
              PAIE: Pragmatic AI Expert. As teams move from deliberate to disruptive use, their impact multiplies.
            </div>
          </div>
        </section>

        {/* Cost of Inaction */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brown mb-4">The Cost of Inaction</h2>
            <blockquote className="text-burgundy italic text-lg md:text-xl max-w-xl mx-auto mb-6">
              "I've never felt this much behind as a programmer... I have a sense that I could be 10X more powerful if I just properly string together what has become available over the last ~year and a failure to claim the boost feels decidedly like skill issue."
              <br/>
              <span className="block text-copper font-bold mt-2">— Andrej Karpathy</span>
            </blockquote>
            <p className="text-grey max-w-3xl mx-auto mb-8">
              Every month your team spends without real AI fluency, your competitors are compounding their advantage. Locking down AI tools doesn't protect your company—it guarantees you're hiring to catch up. The companies investing in AI competency now will set the pace. Everyone else will be reacting.
            </p>
            <a
              href="mailto:hello@kfoundry.ai"
              className="inline-block bg-gold hover:bg-copper text-cream font-semibold px-8 py-4 mt-4 rounded-lg text-lg transition-colors"
            >
              Start Your AI Journey
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
