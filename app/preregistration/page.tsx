'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle2, Rocket } from 'lucide-react'

export default function PreregistrationPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your API logic here (e.g., Supabase, Resend, or Airtable)
    console.log("Registered email:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="relative min-h-screen pt-32 pb-12 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-zinc-950">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/10 opacity-50 blur-[80px]"></div>
      </div>

      <main className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium">
          <Rocket className="size-4 text-primary" />
          <span>Coming Soon: Early Access</span>
        </div>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Be the first to know when <br /> 
          <span className="text-primary">we launch.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Join 500+ professionals already on the waitlist. Get exclusive early-bird 
          pricing and priority access to our most requested features.
        </p>

        <div className="mx-auto mt-10 max-w-md">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-11"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" size="lg" className="h-11 px-8">
                Join Waitlist
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 p-6 animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="size-8 text-primary" />
              <h3 className="font-semibold text-lg">You're on the list!</h3>
              <p className="text-sm text-muted-foreground">
                We'll send an invite to {email} soon.
              </p>
            </div>
          )}
          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Just updates on our progress and launch dates.
          </p>
        </div>

        {/* Social Proof / Benefit Section */}
        <div className="mt-20 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
          {[
            { title: "Early Access", desc: "Get hands-on experience before the public release." },
            { title: "Special Pricing", desc: "Lock in lifetime discounts available only to pre-registrants." },
            { title: "Direct Input", desc: "Help shape our roadmap with your feedback and requests." }
          ].map((benefit, i) => (
            <div key={i} className="rounded-2xl border bg-background/50 p-6 backdrop-blur-sm">
              <h3 className="font-bold">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}