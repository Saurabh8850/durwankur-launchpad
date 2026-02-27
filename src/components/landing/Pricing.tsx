import { Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917276011304";

const plans = [
  {
    name: "Starter",
    price: "₹49",
    description: "Static sites, portfolios & business pages",
    features: ["Free SSL", "Subdomain included", "Instant deployment", "WhatsApp support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹149",
    description: "Custom domains & auto-deploy from Git",
    features: ["Everything in Starter", "Custom domain support", "Git auto deploy", "Priority support"],
    popular: true,
  },
  {
    name: "Pro",
    price: "₹299",
    description: "Dynamic sites with database & backups",
    features: ["Everything in Growth", "Dynamic site support", "Database support", "Backup & monitoring"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start at ₹49/month. Upgrade as you grow — no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-primary bg-card shadow-[var(--glow-primary)] scale-[1.02]"
                  : "gradient-border"
              }`}
            >
              {plan.popular && (
                <span className="text-xs font-semibold text-primary-foreground bg-primary px-3 py-1 rounded-full self-start mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
