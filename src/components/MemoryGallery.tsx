import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const memories = [
  {
    id: 1,
    image: "/images/memories/1.jpg",
    caption: "Best Days Together 🌸",
    description: "At Doi Inthanon National Park, Thailand’s highest peak — our very first road trip together.",
  },
  {
    id: 2,
    image: "/images/memories/2.jpg",
    caption: "Jumping into Adult Life🚀",
    description: "Leaving home and starting a new chapter abroad together"
  },
  {
    id: 3,
    image: "/images/memories/3.jpg",
    caption: "Forever Memories 💫",
    description: "Moments that will stay in our hearts forever, from our visit to Dream World — one of Thailand’s best amusement parks ",
  },
  {
    id: 4,
    image: "/images/memories/4.jpg",
    caption: "Adventures Together 🌈",
    description: "Every journey is better with you by my side, especially those cold moments during our Khao Yai trip.",
  },
  {
    id: 5,
    image: "/images/memories/5.jpg",
    caption: "Best Sunset at 24 🌅",
    description: "Sharing the most beautiful sunset together on my 24th birthday evening",
  },
];

const MemoryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section className="py-20 px-4 bg-card" id="memories">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-handwritten text-4xl md:text-5xl text-foreground mb-4">
            Memory Lane 📸
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            A journey through our most precious moments together
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {memories.map((memory) => (
                <div
                  key={memory.id}
                  className="min-w-full aspect-[16/9] md:aspect-[21/9] relative group"
                >
                  {/* Placeholder gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-light via-lavender-light to-peach-light flex items-center justify-center">
                    <div className="text-center p-8">
                      {/* Image with fallback */}
                      <img
                          src={memory.image}
                          alt={memory.caption}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 md:p-8">
                    <h3 className="font-handwritten text-2xl md:text-3xl text-primary-foreground mb-2">
                      {memory.caption}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm md:text-base">
                      {memory.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 shadow-soft flex items-center justify-center hover:bg-card hover:scale-110 transition-all duration-300"
            aria-label="Previous memory"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 shadow-soft flex items-center justify-center hover:bg-card hover:scale-110 transition-all duration-300"
            aria-label="Next memory"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to memory ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;
