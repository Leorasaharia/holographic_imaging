import { useState } from 'react';
import { motion } from 'framer-motion';
import HolographicBody from '../HolographicBody';
import GlassPanel from '../GlassPanel';
import { Slider } from '@/components/ui/slider';

const InteractiveDemoSection = () => {
  const [latentAxis, setLatentAxis] = useState(50);
  const [structuralVariation, setStructuralVariation] = useState(50);
  const [depth, setDepth] = useState(50);

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient-holo">Interactive Demo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the latent anatomy space with real-time visualization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlassPanel>
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                Latent Space Controls
              </h3>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm text-muted-foreground">
                      Latent Anatomy Axis
                    </label>
                    <span className="text-xs font-mono text-primary">
                      {latentAxis.toFixed(1)}
                    </span>
                  </div>
                  <Slider
                    value={[latentAxis]}
                    onValueChange={(value) => setLatentAxis(value[0])}
                    max={100}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm text-muted-foreground">
                      Structural Variation
                    </label>
                    <span className="text-xs font-mono text-primary">
                      {structuralVariation.toFixed(1)}
                    </span>
                  </div>
                  <Slider
                    value={[structuralVariation]}
                    onValueChange={(value) => setStructuralVariation(value[0])}
                    max={100}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm text-muted-foreground">
                      Visualization Depth
                    </label>
                    <span className="text-xs font-mono text-primary">
                      {depth.toFixed(1)}
                    </span>
                  </div>
                  <Slider
                    value={[depth]}
                    onValueChange={(value) => setDepth(value[0])}
                    max={100}
                    step={0.1}
                    className="w-full"
                  />
                </div>
              </div>
            </GlassPanel>

            {/* Data readout */}
            <GlassPanel delay={0.2}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-display font-bold text-primary">
                    512
                  </div>
                  <div className="text-xs text-muted-foreground">Latent Dims</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-accent">
                    60
                  </div>
                  <div className="text-xs text-muted-foreground">FPS</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-holo-blue">
                    2.4M
                  </div>
                  <div className="text-xs text-muted-foreground">Vertices</div>
                </div>
              </div>
            </GlassPanel>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-lg border border-accent/30 bg-accent/5"
            >
              <p className="text-xs text-accent/90 leading-relaxed">
                ⚠️ This visualization represents AI-inferred anatomical approximations, 
                not real patient scans. For research and educational purposes only.
              </p>
            </motion.div>
          </motion.div>

          {/* Holographic Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Frame */}
              <div className="absolute -inset-8 rounded-2xl border border-primary/20 glow-border" />
              <div className="absolute -inset-12 rounded-2xl border border-primary/10" />
              
              {/* Corner brackets */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
              
              <div className="p-8 glass-panel">
                <HolographicBody 
                  latentAxis={latentAxis} 
                  structuralVariation={structuralVariation}
                  scale={1}
                />
              </div>

              {/* Status indicators */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute top-2 right-2 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs font-mono text-green-400">LIVE</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
