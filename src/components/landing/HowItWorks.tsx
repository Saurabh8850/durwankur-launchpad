import { Send, Rocket, Globe } from "lucide-react";

const steps = [
  { icon: Send, step: "01", title: "Send your website", description: "Share your website files or GitHub repo via WhatsApp." },
  { icon: Rocket, step: "02", title: "We deploy instantly", description: "Our team sets up your site with SSL and a secure URL." },
  { icon: Globe, step: "03", title: "Your site goes live", description: "Access your live website with a fast, secure URL." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three simple steps to get your website online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-mono text-muted-foreground mb-2 block">STEP {s.step}</span>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
