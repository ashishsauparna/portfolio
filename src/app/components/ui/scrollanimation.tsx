'use client'

import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '@/../public/animations/scroll.json'; // Adjust the path as necessary

interface LottieAnimationProps {
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = ({ width = 400, height = 400, loop = true, autoplay = true }: LottieAnimationProps) => {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={animationData}
      style={{ height: `${height}px`, width: `${width}px`, overflow:'visible' }}
    />
  );
};

export default LottieAnimation;
