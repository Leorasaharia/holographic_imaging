import { motion } from 'framer-motion';

const ScanLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Primary scan line */}
      <motion.div
        className="absolute left-0 right-0 h-32 scan-line"
        animate={{
          y: ['-100%', '100vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Secondary scan line (offset) */}
      <motion.div
        className="absolute left-0 right-0 h-16 scan-line opacity-50"
        animate={{
          y: ['-100%', '100vh'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
          delay: 4,
        }}
      />
    </div>
  );
};

export default ScanLines;
