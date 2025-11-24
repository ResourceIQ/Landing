export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that's right for your team. No hidden fees.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          
          {/* Free Plan */}
          <div className="border rounded-2xl p-8 bg-background/50 hover:shadow-lg duration-200">
            <h3 className="text-2xl font-semibold mb-3">Starter</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <p className="text-muted-foreground mb-6">For small teams getting started</p>
            <ul className="space-y-3 text-left">
              <li>✔ Basic features</li>
              <li>✔ 2 team members</li>
              <li>✔ Community support</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-2xl p-8 bg-primary text-primary-foreground shadow-xl scale-105">
            <h3 className="text-2xl font-semibold mb-3">Pro</h3>
            <p className="text-4xl font-bold mb-4">$29</p>
            <p className="opacity-80 mb-6">For growing teams and businesses</p>
            <ul className="space-y-3 text-left">
              <li>✔ All Starter features</li>
              <li>✔ Unlimited team members</li>
              <li>✔ Priority support</li>
              <li>✔ Advanced analytics</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-2xl p-8 bg-background/50 hover:shadow-lg duration-200">
            <h3 className="text-2xl font-semibold mb-3">Enterprise</h3>
            <p className="text-4xl font-bold mb-4">Custom</p>
            <p className="text-muted-foreground mb-6">Tailored solutions for enterprises</p>
            <ul className="space-y-3 text-left">
              <li>✔ All Pro features</li>
              <li>✔ Dedicated account manager</li>
              <li>✔ Custom integrations</li>
              <li>✔ SLA support</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
