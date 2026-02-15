'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

interface JobPosting {
  id: string
  title: string
  location: string
  type: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

const jobPostings: JobPosting[] = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'We\'re looking for an exceptional AI Engineer to join our team and help build the next generation of AI-powered solutions.',
    responsibilities: [
      'Design and implement AI/ML solutions for our clients',
      'Collaborate with cross-functional teams to define project requirements',
      'Optimize existing ML models and develop new ones',
      'Stay current with the latest AI developments and best practices'
    ],
    requirements: [
      'Strong background in Machine Learning and Deep Learning',
      'Experience with PyTorch, TensorFlow, or similar frameworks',
      'Excellent programming skills in Python',
      'Strong communication and problem-solving abilities'
    ]
  },
  {
    id: 'tpm',
    title: 'Technical Program Manager',
    location: 'Remote',
    type: 'Full-time',
    description: 'We\'re seeking a Technical Program Manager to drive the successful delivery of complex AI implementation projects.',
    responsibilities: [
      'Lead cross-functional teams in delivering AI solutions',
      'Define project scope, goals, and deliverables',
      'Manage stakeholder relationships and expectations',
      'Create and maintain project documentation'
    ],
    requirements: [
      'Experience managing technical projects, preferably in AI/ML',
      'Strong technical background with understanding of software development',
      'Excellent organizational and leadership skills',
      'Strong communication and stakeholder management abilities'
    ]
  }
]

export default function Careers() {
  const [selectedJob, setSelectedJob] = React.useState<JobPosting | null>(null)

  return (
    <div className="min-h-screen bg-[#f6f0de]">
      <header className="py-6 px-4 bg-[#f6f0de]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="/" className="text-2xl font-bold text-[#56211d]">KFoundry</a>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="/careers" className="text-[#44352c] hover:text-[#c17d44]">We're Hiring - Join our Team</a>
            <Button 
              className="bg-[#56211d] text-[#f6f0de] hover:bg-[#44352c]"
              onClick={() => window.open('https://calendly.com/chase-kfoundry/30min', '_blank')}
            >
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#44352c] mb-8">Join Our Team</h1>
        <p className="text-xl text-[#705e4e] mb-12 max-w-2xl">
          Help us shape the future of AI implementation and drive real business value for our clients.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {selectedJob ? (
            <div className="md:col-span-2 bg-white rounded-lg p-8 shadow-lg">
              <button
                onClick={() => setSelectedJob(null)}
                className="text-[#44352c] hover:text-[#c17d44] mb-6"
                type="button"
              >
                ← Back to all positions
              </button>
              <h2 className="text-3xl font-bold text-[#44352c] mb-4">{selectedJob.title}</h2>
              <div className="flex gap-4 text-[#705e4e] mb-6">
                <span>{selectedJob.location}</span>
                <span>•</span>
                <span>{selectedJob.type}</span>
              </div>
              <p className="text-lg text-[#705e4e] mb-8">{selectedJob.description}</p>
              
              <h3 className="text-xl font-bold text-[#44352c] mb-4">Responsibilities</h3>
              <ul className="list-disc list-inside mb-8 text-[#705e4e]">
                {selectedJob.responsibilities.map((resp: string, index: number) => (
                  <li key={index} className="mb-2">{resp}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-[#44352c] mb-4">Requirements</h3>
              <ul className="list-disc list-inside mb-8 text-[#705e4e]">
                {selectedJob.requirements.map((req: string, index: number) => (
                  <li key={index} className="mb-2">{req}</li>
                ))}
              </ul>

              <Button 
                className="bg-[#56211d] text-[#f6f0de] hover:bg-[#44352c]"
                onClick={() => window.location.href = 'mailto:careers@kfoundry.ai'}
              >
                Apply Now
              </Button>
            </div>
          ) : (
            jobPostings.map((job: JobPosting) => (
              <div
                key={job.id}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedJob(job)}
                role="button"
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedJob(job)
                  }
                }}
              >
                <h2 className="text-3xl font-bold text-[#44352c] mb-2">{job.title}</h2>
                <div className="flex gap-4 text-[#705e4e] mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <p className="text-[#705e4e] mb-4">{job.description}</p>
                <div className="flex items-center text-[#c17d44]">
                  Learn more <ChevronRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  )
}
