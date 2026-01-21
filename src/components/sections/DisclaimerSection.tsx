import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const DisclaimerSection = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 via-primary/50 to-accent/50 rounded-2xl blur opacity-50" />
          
          <div className="relative glass-panel p-8 md:p-12 rounded-2xl border border-accent/30">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Icon */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px hsl(175 100% 45% / 0.3)',
                    '0 0 40px hsl(175 100% 45% / 0.5)',
                    '0 0 20px hsl(175 100% 45% / 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/50 
                         flex items-center justify-center flex-shrink-0"
              >
                <AlertTriangle className="w-10 h-10 text-accent" />
              </motion.div>
              
              {/* Content */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Ethical & Research Disclaimer
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  This system does <span className="text-accent font-semibold">NOT</span> perform 
                  medical diagnosis and is intended solely for research, visualization, and 
                  educational exploration.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {['Research Only', 'Non-Clinical', 'Educational', 'No Patient Data'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-sm font-medium 
                               border border-accent/40 text-accent bg-accent/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Additional notes */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-8 border-t border-border/50"
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Data Sources</div>
                  <div className="text-foreground">Open, non-clinical datasets only</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Purpose</div>
                  <div className="text-foreground">Proof-of-concept visualization</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Status</div>
                  <div className="text-foreground">Research prototype</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
