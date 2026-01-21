import React from 'react';
import { motion } from 'framer-motion';
import { Algorithm } from '@core/types';

interface AlgorithmSelectorProps {
  algorithms: Algorithm[];
  selected: string | null;
  onSelect: (algorithmName: string) => void;
}

export const AlgorithmSelector: React.FC<AlgorithmSelectorProps> = ({
  algorithms,
  selected,
  onSelect,
}) => {
  // Group algorithms by data structure
  const algorithmsByStructure = algorithms.reduce((acc, alg) => {
    const structure = alg.dataStructure || 'other';
    if (!acc[structure]) {
      acc[structure] = [];
    }
    acc[structure].push(alg);
    return acc;
  }, {} as Record<string, Algorithm[]>);

  return (
    <div className="algorithm-selector">
      <h2>Algorithms</h2>
      
      {Object.entries(algorithmsByStructure).map(([structure, algs]) => (
        <div key={structure} className="algorithm-group">
          <h3 className="group-title">{structure.toUpperCase()}</h3>
          
          {algs.map((algorithm) => (
            <motion.button
              key={algorithm.name}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(algorithm.name)}
              className={`algorithm-button ${selected === algorithm.name ? 'selected' : ''}`}
            >
              {algorithm.name}
            </motion.button>
          ))}
        </div>
      ))}
    </div>
  );
};
