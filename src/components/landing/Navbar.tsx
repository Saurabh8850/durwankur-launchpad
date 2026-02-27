import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917276011304";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="text-lg font-bold tracking-tight">
          Durwankur<span className="text-primary">Hosting</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Get Started</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
