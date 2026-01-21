import { motion } from 'framer-motion';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="glass-panel px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 
                          flex items-center justify-center">
              <span className="text-primary font-display font-bold text-sm">HB</span>
            </div>
            <span className="font-display text-sm font-semibold text-foreground hidden sm:block">
              HoloBody
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {[
              { label: 'About', id: 'hero' },
              { label: 'Process', id: 'how-it-works' },
              { label: 'Demo', id: 'demo' },
              { label: 'Research', id: 'archetypes' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-primary 
                         transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Status indicator */}
          <div className="hidden md:flex items-center gap-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-accent"
            />
            <span className="text-xs text-muted-foreground font-mono">PROTOTYPE</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
