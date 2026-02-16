'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<'intro' | 'chat'>('intro')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open && step === 'chat') {
      inputRef.current?.focus()
    }
  }, [open, step])

  const startChat = async () => {
    setStep('chat')
    setLoading(true)

    // Send initial greeting
    const greeting: Message = {
      role: 'user',
      content: `Hi, I'm ${name || 'someone'}${company ? ` from ${company}` : ''}. I'm curious about how AI could help my business.`,
    }

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [greeting],
          name,
          company,
        }),
      })
      const data = await res.json()
      setMessages([
        { role: 'assistant', content: data.reply || "Hey! Tell me about your business — what's eating your time?" },
      ])
    } catch {
      setMessages([
        { role: 'assistant', content: "Hey! I'm having a moment — but tell me about your business and I'll figure it out." },
      ])
    }
    setLoading(false)
  }

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMsg: Message = { role: 'user', content: input.trim() }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages,
          name,
          company,
        }),
      })
      const data = await res.json()
      setMessages([...updatedMessages, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Something glitched on my end. Try that again?' },
      ])
    }
    setLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Format message content with basic markdown-like rendering
  const formatContent = (text: string) => {
    // Convert **bold** to <strong>
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
      }
      // Convert links
      const linkParts = part.split(/(\[.*?\]\(.*?\))/g)
      return linkParts.map((lp, j) => {
        const linkMatch = lp.match(/\[(.*?)\]\((.*?)\)/)
        if (linkMatch) {
          return (
            <a key={`${i}-${j}`} href={linkMatch[2]} target="_blank" rel="noopener noreferrer"
              className="text-copper underline hover:text-brown">
              {linkMatch[1]}
            </a>
          )
        }
        return <span key={`${i}-${j}`}>{lp}</span>
      })
    })
  }

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-copper hover:bg-brown text-cream rounded-full p-4 shadow-lg transition-all hover:scale-105"
          aria-label="Open AI chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-h-[600px] bg-white rounded-2xl shadow-2xl border border-copper/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-brown text-cream px-5 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-heading font-bold text-base">KFoundry AI</h3>
              <p className="text-cream/70 text-xs">Explore what AI can do for you</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-cream/70 hover:text-cream">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Intro gate */}
          {step === 'intro' && (
            <div className="p-5 flex-1">
              <p className="text-brown text-sm mb-4">
                Hey! I&apos;m the KFoundry AI — I help companies figure out where AI can actually move the needle. Give me a bit of context and let&apos;s explore.
              </p>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-brown/70 uppercase tracking-wider">Your name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="w-full mt-1 px-3 py-2 rounded-lg border border-copper/30 bg-cream text-brown text-sm focus:outline-none focus:ring-2 focus:ring-copper/50"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown/70 uppercase tracking-wider">Company</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Acme Corp"
                    className="w-full mt-1 px-3 py-2 rounded-lg border border-copper/30 bg-cream text-brown text-sm focus:outline-none focus:ring-2 focus:ring-copper/50"
                  />
                </div>
                <button
                  onClick={startChat}
                  disabled={!name.trim()}
                  className="w-full bg-copper text-cream font-semibold py-2.5 rounded-lg hover:bg-brown transition disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                >
                  Let&apos;s Talk AI →
                </button>
              </div>
            </div>
          )}

          {/* Chat area */}
          {step === 'chat' && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[420px] bg-cream/50">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-copper text-cream rounded-br-md'
                          : 'bg-white text-brown border border-copper/15 rounded-bl-md shadow-sm'
                      }`}
                    >
                      {formatContent(msg.content)}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white text-brown/50 rounded-2xl rounded-bl-md px-4 py-2.5 border border-copper/15 shadow-sm">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-copper/10 bg-white">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 rounded-lg border border-copper/30 bg-cream text-brown text-sm focus:outline-none focus:ring-2 focus:ring-copper/50"
                    disabled={loading}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || loading}
                    className="bg-copper text-cream p-2 rounded-lg hover:bg-brown transition disabled:opacity-40"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
