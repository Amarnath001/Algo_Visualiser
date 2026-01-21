import React from 'react';
import { motion } from 'framer-motion';

interface PlaybackControlsProps {
  isPlaying: boolean;
  speed: number;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onSpeedChange: (speed: number) => void;
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  isPlaying,
  speed,
  onPlay,
  onPause,
  onStop,
  onSpeedChange,
}) => {
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="playback-controls">
      <div className="control-buttons">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={isPlaying ? onPause : onPlay}
          className="control-button play-pause"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶'}
        </motion.button>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={onStop}
          className="control-button stop"
          aria-label="Stop"
        >
          ⏹
        </motion.button>
      </div>

      <div className="speed-control">
        <label htmlFor="speed-slider">Speed:</label>
        <input
          id="speed-slider"
          type="range"
          min="0.25"
          max="2"
          step="0.25"
          value={speed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          className="speed-slider"
        />
        <span className="speed-value">{speed}x</span>
      </div>
    </div>
  );
};
