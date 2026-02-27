import { Shield, Zap, Globe, Gauge, Clock, Headphones } from "lucide-react";

const features = [
  { icon: Shield, title: "Free SSL Certificate", description: "Every site gets HTTPS by default — no setup needed." },
  { icon: Zap, title: "Instant Deployment", description: "Send your code, we deploy it within minutes." },
  { icon: Globe, title: "Custom Domain Support", description: "Connect your own domain or use our free subdomain." },
  { icon: Gauge, title: "Global Fast Loading", description: "Optimized delivery for blazing fast load times." },
  { icon: Clock, title: "99.9% Uptime", description: "Your site stays online around the clock." },
  { icon: Headphones, title: "Managed Hosting Support", description: "We handle the tech, you focus on your work." },
];

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to <span className="gradient-text">go live</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Reliable hosting with all the essentials included — no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="gradient-border rounded-xl p-6 transition-all duration-300 hover:shadow-[var(--glow-primary)]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
