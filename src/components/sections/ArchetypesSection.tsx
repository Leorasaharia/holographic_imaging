import { motion } from 'framer-motion';
import GlassPanel from '../GlassPanel';

const archetypes = [
  { id: 1, label: 'Archetype α', variation: { shoulder: 0.8, hip: 0.6, torso: 1.0 } },
  { id: 2, label: 'Archetype β', variation: { shoulder: 1.0, hip: 0.8, torso: 0.9 } },
  { id: 3, label: 'Archetype γ', variation: { shoulder: 0.7, hip: 1.0, torso: 1.1 } },
  { id: 4, label: 'Archetype δ', variation: { shoulder: 0.9, hip: 0.7, torso: 0.85 } },
];

interface MiniBodyProps {
  variation: { shoulder: number; hip: number; torso: number };
}

const MiniBody = ({ variation }: MiniBodyProps) => {
  const shoulderWidth = 60 * variation.shoulder;
  const hipWidth = 50 * variation.hip;
  const torsoHeight = 80 * variation.torso;

  return (
    <svg
      viewBox="0 0 100 200"
      className="w-full h-48"
      style={{ filter: 'drop-shadow(0 0 10px hsl(187 100% 50% / 0.4))' }}
    >
      <defs>
        <linearGradient id="miniHoloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(187, 100%, 50%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(175, 100%, 45%)" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#miniHoloGradient)" strokeWidth="1">
        {/* Head */}
        <ellipse cx="50" cy="25" rx="15" ry="18" />
        
        {/* Neck */}
        <line x1="45" y1="42" x2="45" y2="50" />
        <line x1="55" y1="42" x2="55" y2="50" />
        
        {/* Torso */}
        <path
          d={`M ${50 - shoulderWidth/2} 52 
              Q ${50 - shoulderWidth/2 - 3} ${52 + torsoHeight/2} ${50 - hipWidth/2} ${52 + torsoHeight}
              L ${50 + hipWidth/2} ${52 + torsoHeight}
              Q ${50 + shoulderWidth/2 + 3} ${52 + torsoHeight/2} ${50 + shoulderWidth/2} 52`}
        />
        
        {/* Arms */}
        <path d={`M ${50 - shoulderWidth/2} 55 Q ${50 - shoulderWidth/2 - 15} 80 ${50 - shoulderWidth/2 - 10} 120`} strokeWidth="4" strokeLinecap="round" />
        <path d={`M ${50 + shoulderWidth/2} 55 Q ${50 + shoulderWidth/2 + 15} 80 ${50 + shoulderWidth/2 + 10} 120`} strokeWidth="4" strokeLinecap="round" />
        
        {/* Legs */}
        <path d={`M ${50 - hipWidth/2 + 5} ${52 + torsoHeight} L ${50 - hipWidth/2} 190`} strokeWidth="5" strokeLinecap="round" />
        <path d={`M ${50 + hipWidth/2 - 5} ${52 + torsoHeight} L ${50 + hipWidth/2} 190`} strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
};

const ArchetypesSection = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient-holo">Learned Body Archetypes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI-discovered anatomical clusters from unsupervised learning
          </p>
        </motion.div>

        {/* Archetypes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {archetypes.map((archetype, index) => (
            <motion.div
              key={archetype.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassPanel className="text-center hover:border-primary/40 transition-colors cursor-pointer group">
                <div className="relative mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MiniBody variation={archetype.variation} />
                  </motion.div>
                  
                  {/* Scan effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                      animate={{ y: [0, 192, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
                
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {archetype.label}
                </h3>
                
                <div className="flex justify-center gap-2">
                  {Object.entries(archetype.variation).map(([key, value]) => (
                    <div
                      key={key}
                      className="px-2 py-1 rounded text-xs font-mono bg-primary/10 text-primary/80"
                    >
                      {value.toFixed(1)}
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <GlassPanel>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 
                            flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-display">i</span>
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  About These Archetypes
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These body archetypes emerge from unsupervised clustering in the latent 
                  anatomy space. They represent natural groupings discovered by the AI model, 
                  without human-defined labels or categories. This approach enables exploration 
                  of anatomical variation without imposing diagnostic classifications.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 text-accent/80 italic">
                  No labels. No diagnosis. No medical prediction.
                </p>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchetypesSection;
