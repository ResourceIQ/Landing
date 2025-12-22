'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, Github } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

// We removed the import from '@/components/logos' to fix the error

export default function IntegrationsSection() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Integrate with your favorite tools</h2>
                        <p className="text-muted-foreground mt-6">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
                        <IntegrationCard
                            title="GitHub"
                            description="Streamline your development workflow by connecting your repositories and pull requests."
                            link="https://github.com">
                            <Github className="size-full text-foreground" />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Jira Software"
                            description="Sync your tasks and project management boards directly with Resource-IQ."
                            link="https://www.atlassian.com/software/jira">
                            <JiraLogo />
                        </IntegrationCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Fixed Jira Logo Component (defined locally to avoid import errors)
const JiraLogo = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="size-full text-[#0052CC]"
    >
        <path d="M11.53 2c0 2.39 1.94 4.33 4.33 4.33h3.81c.18 0 .33.15.33.33v3.81c0 2.39-1.94 4.33-4.33 4.33H11.86a.33.33 0 0 1-.33-.33V2.33c0-.18.15-.33.33-.33h-.33zm-9.2 0C4.72 2 6.66 3.94 6.66 6.33v3.81c0 .18-.15.33-.33.33H2.52C2.15 10.47 1.85 10.17 1.85 9.8V6.33c0-2.39 1.94-4.33 4.33-4.33h.15zM2.33 11.86h3.81c2.39 0 4.33 1.94 4.33 4.33v3.81c0 .18-.15.33-.33.33H6.33c-2.39 0-4.33-1.94-4.33-4.33V12.2c0-.19.15-.34.33-.34z"/>
    </svg>
)

const IntegrationCard = ({ title, description, children, link = '#' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card className="p-8 group hover:border-primary/50 transition-all">
            <div className="relative">
                {/* Logo Box */}
                <div className="size-12 p-2.5 rounded-xl border bg-background shadow-sm flex items-center justify-center">
                    {children}
                </div>

                <div className="space-y-2 py-6">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-6">
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="gap-1 px-0 hover:bg-transparent font-semibold group-hover:text-primary">
                        <Link href={link}>
                            Learn More
                            <ChevronRight className="ml-0 size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}