import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlassPanel = ({ children, className = '', delay = 0 }: GlassPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass-panel p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassPanel;
