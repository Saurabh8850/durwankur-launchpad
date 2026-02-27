import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917276011304";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold mb-1">Durwankur Hosting</h3>
            <p className="text-muted-foreground text-sm">Fast, secure & affordable web hosting.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@durwankurhosting.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@durwankurhosting.com
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Support
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Durwankur Hosting – All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
