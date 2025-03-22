import { useRef, useEffect, useState } from "react";
import { useElementVisibility } from "../hooks/useElementVisibility";

interface VideoBackgroundProps {
  videoSrc: string;
  overlayColor?: string;
  overlayGradient?: string;
  overlayOpacity?: number;
  visibleOverlayOpacity?: number;
  playbackRate?: number;
  className?: string;
  children?: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  overlayColor = "black",
  overlayGradient,
  overlayOpacity = 0.5,
  visibleOverlayOpacity = 0.3,
  playbackRate = 1,
  className = "",
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isVisible, intersectionRatio } = useElementVisibility(containerRef);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const dynamicOpacity = isVisible
    ? overlayOpacity - (intersectionRatio * (overlayOpacity - visibleOverlayOpacity))
    : overlayOpacity;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
      
      // Add event listener for loaded data
      const handleVideoLoaded = () => {
        setVideoLoaded(true);
      };
      
      videoRef.current.addEventListener('loadeddata', handleVideoLoaded);
      
      return () => {
        videoRef.current?.removeEventListener('loadeddata', handleVideoLoaded);
      };
    }
  }, [playbackRate]);

  useEffect(() => {
    if (!videoRef.current || !videoLoaded) return;
    
    const videoElement = videoRef.current;
    
    const handleVisibilityChange = async () => {
      try {
        if (isVisible) {
          if (videoElement.paused) {
            console.log("Video is now visible - attempting to play");
            await videoElement.play();
            console.log("Video playing successfully");
          }
        } else {
          if (!videoElement.paused) {
            console.log("Video is now hidden - pausing");
            videoElement.pause();
          }
        }
      } catch (error) {
        console.error("Error managing video playback:", error);
      }
    };
    
    handleVisibilityChange();
  }, [isVisible, videoLoaded]);

  return (
    <div 
      ref={containerRef} 
      className={`video-section relative w-full h-full overflow-hidden ${className}`}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          zIndex: 1,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div 
        className="video-overlay absolute inset-0 transition-opacity duration-500"
        style={{
          background: overlayGradient || overlayColor,
          opacity: dynamicOpacity,
          mixBlendMode: 'multiply',
          zIndex: 2
        }}
      />
      
      <div className="relative w-full h-full z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
