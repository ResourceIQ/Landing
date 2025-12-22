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
        <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium">
          <Rocket className="size-4 text-primary" />
          <span>Join the exclusive waitlist</span>
        </div>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          The future of your workflow <br /> 
          <span className="text-primary font-serif italic">starts here.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We’re building something special. Get early access, founder updates, 
          and a permanent "Early Bird" badge on your profile.
        </p>

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
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Get Early Access'}
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
                icon={<Zap className="size-5 text-primary" />}
                title="Priority Onboarding"
                desc="Skip the queue and get personalized setup assistance."
            />
            <BenefitCard 
                icon={<ShieldCheck className="size-5 text-primary" />}
                title="Lifetime Discount"
                desc="15% off all plans, forever. Only for our first 1,000 users."
            />
            <BenefitCard 
                icon={<Rocket className="size-5 text-primary" />}
                title="Beta Features"
                desc="Test new features months before they go public."
            />
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