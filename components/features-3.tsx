
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FireExtinguisher, Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'
import { BorderBeam } from './ui/border-beam'
export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Transform your team's potential</h2>
                    <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
                </div>
                <Card className="relative @min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Productivity boost</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Uncover hidden talents and ensure every team member contributes meaningfully to projects.</p>
                        </CardContent>
                    </div>

                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                
                                <FireExtinguisher
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Prevent burnout</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Help new managers quickly understand team strengths and optimize resource allocation from day one.</p>
                        </CardContent>
                    </div>

                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Skill utilization</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Strategic resource management that transforms how organizations leverage talent</p>
                        </CardContent>
                    </div>
                    <BorderBeam
                    duration={5}
                    size={500}
                    className="from-transparent
                                via-[#4FFD9D]
                                to-transparent"
                    />
                </Card>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-20% mask-radial-to-80% relative mx-auto size-36  duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)50%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)25%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)65%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t ">{children}</div>
        
    </div>
)
