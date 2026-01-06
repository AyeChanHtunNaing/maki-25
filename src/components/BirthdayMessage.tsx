import { Heart } from "lucide-react";

const BirthdayMessage = () => {
  return (
    <section className="py-20 px-4 bg-card" id="message">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-handwritten text-4xl md:text-5xl text-foreground mb-4">
            A Special Message For You 💌
          </h2>
        </div>

        {/* Message card */}
        <div className="relative">
          {/* Decorative hearts */}
          <div className="absolute -top-4 -left-4 animate-float opacity-60">
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </div>
          <div className="absolute -bottom-4 -right-4 animate-float-slow opacity-60">
            <Heart className="w-6 h-6 text-lavender fill-lavender" />
          </div>

          {/* Message content */}
          <div className="bg-gradient-to-br from-pink-light via-card to-lavender-light rounded-3xl p-8 md:p-12 shadow-card border border-border/50">
            <div className="font-handwritten text-xl md:text-2xl text-foreground leading-relaxed space-y-6">
              <p>My Dearest Maki,</p>
              
              <p>
                Today marks another beautiful year of your life, and I couldn't be more grateful 
                to be celebrating it with you. From the moment we became friends, my life became 
                infinitely brighter, funnier, and more meaningful.
              </p>

              <p>
                You've been there through my highest highs and my lowest lows. You've laughed 
                with me until tears streamed down our faces, and you've held my hand when I 
                needed strength. You understand me in ways no one else does, and for that, 
                I'm eternally grateful.
              </p>

              <p>
                On your special day, I wish you all the happiness your heart can hold. May this 
                new year bring you endless joy, incredible adventures, and all the love you 
                so freely give to others coming back to you tenfold.
              </p>

              <p>
                May your dreams take flight, your smile never fade, and your heart always know 
                how incredibly loved you are. You deserve every beautiful thing this world has 
                to offer, and I'll always be here cheering you on.
              </p>

              <p className="text-right pt-4">
                With all my love and infinite hugs,
                <br />
                <span className="text-primary">Chan 💖</span>
              </p>
            </div>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-border/50">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
              <span className="text-2xl">🎂</span>
              <span className="text-2xl">🎈</span>
              <span className="text-2xl">🎁</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayMessage;
