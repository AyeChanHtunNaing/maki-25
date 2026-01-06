import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="flex justify-center gap-3 mb-6 text-3xl">
          <span className="animate-float">🎈</span>
          <span className="animate-float animation-delay-200">🎂</span>
          <span className="animate-float animation-delay-400">🎈</span>
        </div>

        {/* Main text */}
        <p className="font-handwritten text-2xl md:text-3xl text-foreground mb-4">
          Made with{" "}
          <Heart className="inline-block w-6 h-6 text-primary fill-primary animate-pulse mx-1" />{" "}
          just for you
        </p>

        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-gold" />
          Wishing you the happiest birthday ever
          <Sparkles className="w-4 h-4 text-gold" />
        </p>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30"></div>
          <span className="text-xl">💝</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
