import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917276011304";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid opacity-40" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 text-center py-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Hosting starting at just ₹49/month
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Launch Your Website
          <br />
          <span className="gradient-text">in Minutes</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Fast, secure, and affordable hosting starting at just ₹49/month.
          Perfect for freelancers, businesses, and students.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all glow"
          >
            Deploy My Website
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-secondary/50 text-foreground font-semibold text-base hover:bg-secondary transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
