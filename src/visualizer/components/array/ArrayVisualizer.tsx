import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ArrayVisualizerProps {
  step: any;
  speed: number;
}

export const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({ step, speed }) => {
  if (!step?.data?.array) {
    return <div className="array-visualizer">No data to visualize</div>;
  }

  const array = step.data.array as number[];
  const highlights = step.highlights || {};
  const comparing = highlights.indices || [];
  const swapping = highlights.swaps?.[0] || [];
  const sorted = highlights.sorted || [];

  const getBarColor = (index: number): string => {
    if (swapping.includes(index)) return '#ff4757'; // Red for swapping
    if (comparing.includes(index)) return '#ffa502'; // Orange for comparing
    if (sorted.includes(index)) return '#2ed573'; // Green for sorted
    return '#5352ed'; // Default blue
  };

  const maxValue = Math.max(...array, 1);

  return (
    <div className="array-visualizer">
      <AnimatePresence mode="wait">
        <motion.div
          key={step.type}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="array-container"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: '4px',
            height: '400px',
            padding: '20px',
          }}
        >
          {array.map((value, index) => (
            <motion.div
              key={`${index}-${value}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                backgroundColor: getBarColor(index),
                height: `${(value / maxValue) * 100}%`,
              }}
              transition={{
                duration: 0.5 / speed,
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className="array-bar"
              style={{
                flex: 1,
                minWidth: '30px',
                backgroundColor: getBarColor(index),
                borderRadius: '4px 4px 0 0',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                padding: '8px 4px',
                position: 'relative',
              }}
            >
              <motion.span
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 / speed }}
              >
                {value}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {step.description && (
        <motion.p
          key={step.description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="step-description"
          style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '14px',
            color: '#666',
          }}
        >
          {step.description}
        </motion.p>
      )}
    </div>
  );
};
