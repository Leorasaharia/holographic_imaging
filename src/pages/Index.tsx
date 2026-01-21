import StarfieldBackground from '@/components/StarfieldBackground';
import ScanLines from '@/components/ScanLines';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import InteractiveDemoSection from '@/components/sections/InteractiveDemoSection';
import ArchetypesSection from '@/components/sections/ArchetypesSection';
import DisclaimerSection from '@/components/sections/DisclaimerSection';
import TechStackSection from '@/components/sections/TechStackSection';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <StarfieldBackground />
      <ScanLines />
      <div className="fixed inset-0 grid-overlay pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        
        <div id="demo">
          <InteractiveDemoSection />
        </div>
        
        <div id="archetypes">
          <ArchetypesSection />
        </div>
        
        <DisclaimerSection />
        
        <TechStackSection />
        
        {/* Footer */}
        <footer className="relative py-12 px-4 border-t border-border/30">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Radiation-Free Holographic Body Imaging Research Project
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Research Prototype • Not for Clinical Use
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
