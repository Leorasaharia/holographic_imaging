import { motion } from 'framer-motion';
import HolographicBody from '../HolographicBody';
import GlassPanel from '../GlassPanel';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-sm font-medium tracking-widest text-primary/80 uppercase">
                  Research Prototype
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              >
                <span className="text-gradient-holo glow-text">Radiation-Free</span>
                <br />
                <span className="text-foreground">Holographic Body</span>
                <br />
                <span className="text-foreground">Imaging</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground font-light tracking-wide"
              >
                AI-Generated Anatomical Approximation from External Body Data
              </motion.p>
            </div>

            <GlassPanel delay={0.5} className="max-w-xl">
              <h3 className="text-primary font-display text-sm tracking-wider mb-3 uppercase">
                About the Project
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Traditional medical imaging (CT, MRI, X-ray) relies on radiation exposure, 
                high costs, and limited accessibility. This research explores whether AI can 
                infer approximate internal anatomical structures from external body geometry 
                and surface measurements alone—enabling a vision of computational, non-invasive 
                anatomical visualization.
              </p>
              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  This is a proof-of-concept research visualization, not a diagnostic tool.
                </p>
              </div>
            </GlassPanel>

            {/* Floating UI Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {['Non-Invasive', 'Zero Radiation', 'AI-Powered', 'Real-Time'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="px-4 py-2 rounded-full border border-primary/30 text-sm text-primary/90 
                             bg-primary/5 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Holographic Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Circular frame */}
              <div className="absolute inset-0 -m-8 rounded-full border border-primary/20 animate-rotate-slow" />
              <div className="absolute inset-0 -m-16 rounded-full border border-primary/10" />
              <div className="absolute inset-0 -m-24 rounded-full border border-primary/5" />
              
              <HolographicBody scale={1.2} />
              
              {/* Corner data displays */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-panel p-2 text-xs font-mono"
              >
                <div className="text-primary/70">SCAN: ACTIVE</div>
                <div className="text-accent">RES: 2048×2048</div>
              </motion.div>
              
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-panel p-2 text-xs font-mono"
              >
                <div className="text-primary/70">LATENT DIM: 512</div>
                <div className="text-accent">FPS: 60.0</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
