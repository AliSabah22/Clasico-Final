import { useState, useRef, useEffect } from 'react';

interface VideoPlayerOptions {
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function useVideoPlayer(options: VideoPlayerOptions = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(options.muted ?? true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (options.autoplay) {
      video.play().catch(() => {
        // Autoplay was prevented
        console.log('Autoplay prevented');
      });
    }

    if (options.loop) {
      video.loop = true;
    }

    video.muted = isMuted;
  }, [options.autoplay, options.loop, isMuted]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return {
    videoRef,
    isPlaying,
    isMuted,
    togglePlay,
    toggleMute,
  };
} 