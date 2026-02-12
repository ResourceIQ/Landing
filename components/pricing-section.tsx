import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'


export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        Simple, transparent pricing
                    </span>
                    <h1 className="text-center text-3xl font-semibold lg:text-4xl">
                        Built for software teams, <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">not enterprise budgets</span>
                    </h1>
                    <p>No complex contracts. No per-feature upselling. Just intelligent developer allocation that pays for itself.</p>
                </div>
                {/* Header END */}


                {/* Card */}
                <div className="mt-8 grid gap-6 [--color-card:var(--color-muted)] *:border-none *:shadow-none md:mt-20 md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="bg-muted flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Starter</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$0 / mo</span>
                            <CardDescription className="text-sm">Per team. Unlimited developers.</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Basic workload dashboard', 'Email support', '70/30 recommendation engine (skill + workload)', 'Automated skill profiling from commits & tasks', 'Jira + GitHub native integration'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/preregistration">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="bg-muted relative">
                        <span className="absolute -top-3 left-0 right-0 mx-auto flex w-fit items-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                            </span>
                            MOST POPULAR FOR MID-SIZED TEAMS
                        </span>


                        <CardHeader>
                            <CardTitle className="font-medium">Pro</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$19 / mo</span>
                            <CardDescription className="text-sm">Per team. Unlimited developers.</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Starter', 'Custom algorithm weights (adjust 70/30 ratio)', 'Workload heatmaps & capacity planning', 'Manual profile overrides', 'Priority email & chat support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className='mt-auto'>
                            <Button
                                asChild
                                className="w-full">
                                <Link href="/preregistration">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="bg-muted flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                                    <span className="text-sm font-bold">🏢</span>
                                </div>
                                <CardTitle className="text-lg font-medium">Enterprise</CardTitle>
                            </div>
                            <div className="mt-4">
                                <span className="text-3xl font-bold">Custom</span>
                            </div>
                            <CardDescription className="text-sm">
                                Tailored for large organizations
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Pro Plan', 'On-premise deployment option', 'Dedicated account manager', 'Custom contract terms'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/preregistration">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                {/* Card END */}

                {/* COMPETITIVE COMPARISON */}
                <div className="mt-16 rounded-2xl border bg-slate-50 p-6 dark:bg-slate-900/50 md:p-8">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                            <span className="text-sm font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                                Why ResourceIQ is different
                            </span>
                            <h3 className="text-xl font-semibold">
                                No third-party connectors. No manual skill tagging.
                            </h3>
                            <p className="text-muted-foreground max-w-2xl text-sm">
                                Float and Resource Guru require complex n8n/Zapier setups.
                                Jira Roadmaps lacks semantic skill matching. Only ResourceIQ gives you
                                <span className="font-medium text-foreground"> native Jira + GitHub integration with NLP-powered profiling</span>.
                            </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs shadow-sm dark:bg-slate-800">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            <span>Built specifically for software teams</span>
                        </div>
                    </div>

                
                    <div className="mt-6 grid grid-cols-2 gap-3 text-xs md:grid-cols-4 md:gap-4 md:text-sm">
                        <div className="rounded-lg border bg-white p-3 dark:bg-slate-950">
                            <div className="font-medium">✅ ResourceIQ</div>
                            <div className="text-muted-foreground mt-1">Native Jira + GitHub</div>
                        </div>
                        <div className="rounded-lg border bg-white p-3 dark:bg-slate-950">
                            <div className="font-medium">❌ Float</div>
                            <div className="text-muted-foreground mt-1">3rd party connectors</div>
                        </div>
                        <div className="rounded-lg border bg-white p-3 dark:bg-slate-950">
                            <div className="font-medium">❌ Resource Guru</div>
                            <div className="text-muted-foreground mt-1">Manual skill tags</div>
                        </div>
                        <div className="rounded-lg border bg-white p-3 dark:bg-slate-950">
                            <div className="font-medium">⚠️ Jira Roadmaps</div>
                            <div className="text-muted-foreground mt-1">No semantic matching</div>
                        </div>
                    </div>
                </div>

                {/* for cutome */}
                <div className="mt-12 text-center">
                    <p className="text-muted-foreground text-sm">
                        Need more than 50 developers? {' '}
                        <Link href="/preregistration" className="font-medium text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-400">
                            Contact us for volume pricing
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}