export default function AboutSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header + mission */}
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 mb-4">
            WHY WE BUILT RESOURCEIQ
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            From gut feeling to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              data-driven fairness
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            ResourceIQ wasn't built to sell another project management tool. 
            It was built because <span className="font-semibold text-foreground">52% of developers leave their jobs due to burnout</span> — 
            and most managers are still assigning tasks based on memory, spreadsheets, or whoever's available.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            We're replacing intuition-based allocation with an intelligent engine that 
            understands both <span className="font-medium text-foreground">what developers know</span> and{' '}
            <span className="font-medium text-foreground">how much they can handle</span>.
          </p>
        </div>

        {/* Problem and Solution*/}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* The Old Way */}
          <div className="rounded-xl border border-red-200 bg-red-50/30 p-6 dark:border-red-900 dark:bg-red-950/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                <span className="text-lg">❌</span>
              </div>
              <h3 className="text-lg font-semibold">The Old Way: Guesswork</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span className="text-muted-foreground">Managers rely on memory and "gut feeling"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span className="text-muted-foreground">Senior developers get bored with simple tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span className="text-muted-foreground">Junior developers are overwhelmed by complex work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span className="text-muted-foreground">Hidden skills go unnoticed for months or years</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Source: State of Developer Experience 2024, Harness
            </p>
          </div>

          {/* new way - ResourceIQ */}
          <div className="rounded-xl border border-green-200 bg-green-50/30 p-6 dark:border-green-900 dark:bg-green-950/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                <span className="text-lg">✓</span>
              </div>
              <h3 className="text-lg font-semibold">ResourceIQ: Data-Driven</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5 font-bold">→</span>
                <span className="text-muted-foreground"><span className="font-medium text-foreground">NLP-powered skill extraction</span> from commits and tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5 font-bold">→</span>
                <span className="text-muted-foreground"><span className="font-medium text-foreground">70/30 weighted algorithm</span> — skill match + availability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5 font-bold">→</span>
                <span className="text-muted-foreground">Discover hidden expertise in your existing team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5 font-bold">→</span>
                <span className="text-muted-foreground">Fair distribution = less burnout, more throughput</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats from my research*/}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">52%</div>
            <p className="text-xs text-muted-foreground mt-1">Leave jobs due to burnout</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">83%</div>
            <p className="text-xs text-muted-foreground mt-1">Experience burnout or boredom</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">68%</div>
            <p className="text-xs text-muted-foreground mt-1">Rely on memory/spreadsheets</p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">70/30</div>
            <p className="text-xs text-muted-foreground mt-1">Skill + Workload weighting</p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-16 rounded-2xl bg-slate-50 p-8 dark:bg-slate-900/50">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span> 
                Built by developers, for developers
              </h3>
              <p className="text-sm text-muted-foreground">
                We've been the ones getting paged at 2 AM for bugs we didn't write. 
                We've been the senior engineers stuck fixing CSS while juniors drowned in legacy code. 
                ResourceIQ is the tool we wished existed.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="bg-white dark:bg-slate-950 rounded-lg p-5 border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-1 bg-indigo-500 rounded-full"></div>
                  <p className="text-sm font-medium text-indigo-700 dark:text-indigo-400">OUR APPROACH</p>
                </div>
                <blockquote className="text-sm italic text-muted-foreground">
                  "The best developer for a task isn't always the most skilled one — 
                  it's the one with the right skills <span className="font-medium not-italic text-foreground">and</span> the capacity to do the work well."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-200 group">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
            <p className="text-sm text-muted-foreground">
              A world where <span className="font-medium text-foreground">no developer burns out</span> from poorly distributed work, 
              and every team member's skills are discovered and utilized — not forgotten.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-200 group">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-muted-foreground">
              Replace intuition-based task assignment with a <span className="font-medium text-foreground">transparent, fair, data-driven engine</span> 
              that respects developer capacity while maximizing team output.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-200 group">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Values</h3>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Fairness</span> — No algorithmic bias. Regular audits.<br />
              <span className="font-medium text-foreground">Transparency</span> — Every recommendation explained.<br />
              <span className="font-medium text-foreground">Human-first</span> — AI suggests, humans decide.
            </p>
          </div>
        </div>

        {/* BCS & Ethics Alignment. from Chapter 5 */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs">
            <span className="flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-muted-foreground">BCS Code of Conduct aligned</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">GDPR compliant</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">EU AI Act ready</span>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            ResourceIQ is designed following professional standards and ethical AI principles.
            We don't just build features — we build responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}