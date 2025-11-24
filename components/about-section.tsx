export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-primary">ResourceIQ</span>
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          ResourceIQ is designed to help teams simplify resource planning,
          enhance collaboration, and improve productivity with smart automation.
          Our mission is to create intuitive tools that empower businesses to
          operate efficiently and scale effortlessly.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-xl border bg-background/50 hover:shadow-md duration-200">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-muted-foreground">
              To become the leading intelligent resource management platform
              trusted by teams worldwide.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-background/50 hover:shadow-md duration-200">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              Empower organizations with efficient, scalable, and modern tools
              to manage their teams effortlessly.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-background/50 hover:shadow-md duration-200">
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-muted-foreground">
              Innovation, transparency, collaboration, and customer-first
              engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
