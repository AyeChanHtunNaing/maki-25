import HeroSection from "@/components/HeroSection";
import MemoryGallery from "@/components/MemoryGallery";
import QualitiesSection from "@/components/QualitiesSection";
import BirthdayMessage from "@/components/BirthdayMessage";
import SurpriseSection from "@/components/SurpriseSection";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import Sparkles from "@/components/Sparkles";
import { FloatingBalloons } from "@/components/Balloon";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Background effects */}
      <Sparkles />
      <FloatingBalloons />
      
      {/* Music player */}
      <MusicPlayer />
      
      {/* Page sections */}
      <HeroSection />
      <MemoryGallery />
      <QualitiesSection />
      <BirthdayMessage />
      <SurpriseSection />
      <Footer />
    </main>
  );
};

export default Index;
