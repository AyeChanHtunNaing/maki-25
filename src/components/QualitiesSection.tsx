import { Heart, Shield, Smile, Sparkles, Star, Sun } from "lucide-react";

const qualities = [
  {
    icon: Heart,
    title: "Kind",
    description: "Your heart is made of gold, always ready to help",
    color: "from-pink to-pink-light",
  },
  {
    icon: Shield,
    title: "Supportive",
    description: "You're my rock through every storm",
    color: "from-lavender to-lavender-light",
  },
  {
    icon: Smile,
    title: "Funny",
    description: "You make every moment brighter with laughter",
    color: "from-peach to-peach-light",
  },
  {
    icon: Star,
    title: "Loyal",
    description: "Through thick and thin, always by my side",
    color: "from-gold to-peach",
  },
  {
    icon: Sparkles,
    title: "Inspiring",
    description: "You push me to be the best version of myself",
    color: "from-primary to-lavender",
  },
  {
    icon: Sun,
    title: "Radiant",
    description: "Your energy lights up every room you enter",
    color: "from-peach to-gold",
  },
];

const QualitiesSection = () => {
  return (
    <section className="py-20 px-4 gradient-hero" id="special">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-handwritten text-4xl md:text-5xl text-foreground mb-4">
            Why You're Special 💝
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Just a few of the million reasons I adore you
          </p>
        </div>

        {/* Quality cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((quality, index) => (
            <div
              key={quality.title}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${quality.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft`}>
                <quality.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-handwritten text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {quality.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {quality.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles className="w-5 h-5 text-gold animate-sparkle" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitiesSection;
