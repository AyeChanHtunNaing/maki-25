import { useState } from "react";
import { Gift, PartyPopper, Heart, Sparkles } from "lucide-react";
import Confetti from "./Confetti";

const SurpriseSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSurprise = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setIsRevealed(true);
    }, 500);
  };

  return (
    <section className="py-20 px-4 gradient-hero relative overflow-hidden" id="surprise">
      <Confetti isActive={showConfetti} />
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="font-handwritten text-4xl md:text-5xl text-foreground mb-4">
            One More Thing... 🎁
          </h2>
          <p className="text-muted-foreground text-lg">
            There's a little surprise waiting for you
          </p>
        </div>

        {!isRevealed ? (
          /* Surprise button */
          <button
            onClick={handleSurprise}
            className="group relative inline-flex items-center gap-3 px-12 py-6 rounded-full gradient-button text-primary-foreground font-semibold text-xl shadow-glow hover:shadow-soft transition-all duration-500 hover:scale-105 animate-pulse-glow"
          >
            <Gift className="w-7 h-7 group-hover:animate-wiggle" />
            <span>Click for a Surprise 🎁</span>
            <PartyPopper className="w-7 h-7 group-hover:animate-wiggle" />
            
            {/* Decorative sparkles */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold animate-sparkle" />
            <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-gold animate-sparkle animation-delay-400" />
          </button>
        ) : (
          /* Revealed content */
          <div className="animate-fade-in-up">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 max-w-2xl mx-auto">
              {/* Celebration icons */}
              <div className="flex justify-center gap-4 mb-8 text-5xl">
                <span className="animate-bounce-soft">🎉</span>
                <span className="animate-bounce-soft animation-delay-200">🥳</span>
                <span className="animate-bounce-soft animation-delay-400">🎊</span>
              </div>

              <h3 className="font-handwritten text-3xl md:text-4xl text-primary mb-6">
                You Are My Greatest Gift!
              </h3>

              <div className="font-handwritten text-xl text-foreground leading-relaxed space-y-4">
                <p>
                  The real surprise is that there's no gift that could ever match what you mean to me.
                </p>
                <p>
                  You're the kind of friend everyone dreams of having — loyal, loving, hilarious, 
                  and absolutely irreplaceable.
                </p>
                <p>
                  So here's my promise: I'll always be here for you, through every birthday, 
                  every adventure, and every moment in between.
                </p>
                <p className="text-primary text-2xl pt-4">
                  Happy Birthday, Beautiful Soul! 🌟💖
                </p>
              </div>

              {/* Hearts decoration */}
              <div className="flex justify-center gap-2 mt-8">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-6 h-6 text-primary fill-primary animate-bounce-soft"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurpriseSection;
