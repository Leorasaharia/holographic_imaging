import { motion } from 'framer-motion';
import { Scan, Box, Brain, Layers, Eye } from 'lucide-react';
import GlassPanel from '../GlassPanel';

const steps = [
  {
    icon: Scan,
    title: 'External Body Geometry',
    description: 'Surface measurements and body geometry captured via non-invasive sensors',
  },
  {
    icon: Box,
    title: '3D Surface Reconstruction',
    description: 'Point cloud processing to generate detailed mesh representation',
  },
  {
    icon: Brain,
    title: 'AI Latent Anatomy Space',
    description: 'Deep neural networks encode anatomical priors from training data',
  },
  {
    icon: Layers,
    title: 'Internal Structure Approximation',
    description: 'Inference of approximate internal organ positions and structures',
  },
  {
    icon: Eye,
    title: 'Holographic Visualization',
    description: 'Real-time semi-transparent 3D rendering for exploration',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient-holo">How It Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From external measurements to holographic visualization
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <GlassPanel className="inline-block max-w-md">
                    <div className={`flex items-center gap-4 mb-3 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 
                                    flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </GlassPanel>
                </div>

                {/* Center node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 
                           rounded-full bg-primary glow-border z-10"
                >
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Arrow indicators */}
          <div className="hidden md:block">
            {steps.slice(0, -1).map((_, index) => (
              <motion.div
                key={`arrow-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.5 }}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: `${(index + 1) * 20}%` }}
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  className="text-primary/50"
                >
                  ↓
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
