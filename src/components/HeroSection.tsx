import { Heart, Sparkles, Cake } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden px-4">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-float opacity-60">
        <Heart className="w-8 h-8 text-primary fill-primary" />
      </div>
      <div className="absolute top-32 right-16 animate-float-slow animation-delay-400 opacity-60">
        <Sparkles className="w-10 h-10 text-gold" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce-soft animation-delay-600 opacity-60">
        <Heart className="w-6 h-6 text-lavender fill-lavender" />
      </div>
      <div className="absolute bottom-40 right-10 animate-float animation-delay-200 opacity-60">
        <Cake className="w-12 h-12 text-peach" />
      </div>

      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        {/* Birthday cake emoji */}
        <div className="text-7xl md:text-8xl mb-6 animate-bounce-soft">🎂</div>
        
        {/* Main heading */}
        <h1 className="font-handwritten text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
          Happy Birthday,{" "}
          <span className="text-gradient">Maki</span>{" "}
          <span className="inline-block animate-wiggle">🎉</span>
          <span className="inline-block animate-float">💖</span>
        </h1>

        {/* Heartfelt message */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          On this special day, I want you to know how incredibly grateful I am to have you in my life. 
          Through every laugh, every tear, every crazy adventure — you've been my rock, my confidant, 
          and my forever friend. Here's to celebrating YOU! ✨
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
          <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-glow" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce-soft">
          <p className="text-sm text-muted-foreground mb-2">Scroll down for more love</p>
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
