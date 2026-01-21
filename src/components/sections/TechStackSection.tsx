import { motion } from 'framer-motion';

const technologies = [
  { name: 'Python', icon: '🐍' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'Streamlit', icon: '📊' },
  { name: 'Plotly', icon: '📈' },
  { name: 'Three.js', icon: '🎮' },
];

const TechStackSection = () => {
  return (
    <section className="relative py-20 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Powered By
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group"
              >
                <div className="px-5 py-3 rounded-full border border-primary/20 bg-card/50 
                              backdrop-blur-sm flex items-center gap-3 
                              group-hover:border-primary/40 group-hover:bg-primary/5 
                              transition-all duration-300 glow-border">
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
