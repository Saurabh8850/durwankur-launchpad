import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917276011304";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative rounded-2xl border border-border bg-card p-10 md:p-16 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-[100px] rounded-full" />

          <h2 className="relative text-3xl md:text-4xl font-bold mb-4">
            Ready to launch your website <span className="gradient-text">today?</span>
          </h2>
          <p className="relative text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Get your site live in minutes. No technical skills required.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all glow"
          >
            Start Hosting Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
