'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SPARK_OPENING: Message = {
  role: 'assistant',
  content:
    "Hey there 👋 I'm Spark — KFoundry's AI. I help companies figure out where AI actually makes sense (and where it's just hype). What's on your mind?",
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([SPARK_OPENING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

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
        body: JSON.stringify({ messages: updatedMessages }),
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
    inputRef.current?.focus()
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
        return (
          <strong key={i} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        )
      }
      // Convert links
      const linkParts = part.split(/(\[.*?\]\(.*?\))/g)
      return linkParts.map((lp, j) => {
        const linkMatch = lp.match(/\[(.*?)\]\((.*?)\)/)
        if (linkMatch) {
          return (
            <a
              key={`${i}-${j}`}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper underline hover:text-brown"
            >
              {linkMatch[1]}
            </a>
          )
        }
        // Convert bare URLs
        const urlParts = lp.split(/(https?:\/\/[^\s)]+)/g)
        return urlParts.map((up, k) => {
          if (/^https?:\/\//.test(up)) {
            return (
              <a
                key={`${i}-${j}-${k}`}
                href={up}
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper underline hover:text-brown"
              >
                {up}
              </a>
            )
          }
          return <span key={`${i}-${j}-${k}`}>{up}</span>
        })
      })
    })
  }

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-copper p-4 text-cream shadow-lg transition-all hover:scale-105 hover:bg-brown"
          aria-label="Open AI chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="border-copper/20 fixed bottom-6 right-6 z-50 flex max-h-[600px] w-[380px] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-brown px-5 py-4 text-cream">
            <div>
              <h3 className="font-heading text-base font-bold">Spark</h3>
              <p className="text-cream/70 text-xs">KFoundry&apos;s AI Use Case Explorer</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-cream/70 hover:text-cream">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat area */}
          <div className="bg-cream/50 max-h-[420px] min-h-[300px] flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'rounded-br-md bg-copper text-cream'
                      : 'border-copper/15 rounded-bl-md border bg-white text-brown shadow-sm'
                  }`}
                >
                  {formatContent(msg.content)}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="text-brown/50 border-copper/15 rounded-2xl rounded-bl-md border bg-white px-4 py-2.5 shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-copper/10 border-t bg-white p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="border-copper/30 focus:ring-copper/50 flex-1 rounded-lg border bg-cream px-3 py-2 text-sm text-brown focus:outline-none focus:ring-2"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="rounded-lg bg-copper p-2 text-cream transition hover:bg-brown disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
