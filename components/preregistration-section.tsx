'use client'

import React, { useState, useTransition } from 'react'
import { registerUser } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle2, Loader2, Rocket, ShieldCheck, Zap } from 'lucide-react'

export default function PreregistrationPage() {
  const [isPending, startTransition] = useTransition()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setError(null)
    startTransition(async () => {
      const result = await registerUser(formData)
      if (result?.error) {
        setError(result.error)
      } else {
        setIsSubmitted(true)
      }
    })
  }

  return (
    <div className="relative min-h-screen pt-32 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-zinc-950">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/10 opacity-50 blur-[80px]"></div>
      </div>

      <main className="mx-auto max-w-4xl px-6 text-center">

        {/*1. Hero Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border bg-indigo-50/50 px-3 py-1 text-sm font-medium dark:bg-indigo-950/30">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
          </span>
          <span>⚡ 52% of developers leave jobs due to burnout</span>
          <span className="text-xs text-muted-foreground ml-1">(We're fixing that)</span>
        </div>

        {/*2 - Main Headline */}
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Stop guessing who's the <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            best developer for the job.
          </span>
        </h1>

        {/*3- Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          ResourceIQ analyzes your Jira tickets and GitHub commits to recommend
          the right developer for every task — based on <span className="font-medium text-foreground">actual skills + current workload</span>.
          No more gut feelings. No more burnout.
        </p>

        {/*1. Hero Badge */}
        <div className="mx-auto mt-10 max-w-md">
          {!isSubmitted ? (
            <form action={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <Input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  className={`h-12 bg-background/50 backdrop-blur-sm ${error ? 'border-destructive' : ''}`}
                  required
                />
                {error && <p className="mt-2 text-left text-xs text-destructive font-medium">{error}</p>}
              </div>
              <Button type="submit" size="lg" className="h-12 px-8 shadow-lg shadow-primary/20" disabled={isPending}>
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Join the waitlist →'}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 p-8 animate-in fade-in zoom-in duration-500">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle2 className="size-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mt-2">Check your inbox!</h3>
              <p className="text-muted-foreground">
                We've sent a confirmation to your email. See you on the inside!
              </p>
            </div>
          )}
        </div>

        {/* Benefits Grid */}
        <div className="mt-24 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          <BenefitCard
            icon={<span className="text-lg font-bold">70/30</span>}
            title="Skill + Workload Matching"
            desc="Our weighted algorithm doesn't just look at who's skilled — it checks who actually has time to do the work."
          />
          <BenefitCard
            icon={<span className="text-lg font-bold">🧠</span>}
            title="NLP-Powered Profiling"
            desc="We analyze commits, PRs, and Jira comments to discover skills your team forgot existed."
          />
          <BenefitCard
            icon={<span className="text-lg font-bold">⚖️</span>}
            title="Fair by Design"
            desc="Regular bias audits. Full transparency. GDPR compliant. Built for developers, not surveillance."
          />
        </div>

        {/* Trusted badged */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            Jira + GitHub Native
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            BCS Code of Conduct
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            EU AI Act Ready
          </span>
        </div>
      </main>
    </div>
  )
}

function BenefitCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group rounded-2xl border bg-background/40 p-6 backdrop-blur-md transition-all hover:border-primary/50">
      <div className="mb-4 inline-block rounded-lg bg-background p-2 shadow-sm border group-hover:bg-primary/5 transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  )
}