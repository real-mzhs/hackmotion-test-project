"use client";

import { trackEvent } from "@/lib/analytics";
import { useCallback, useEffect, useRef, useState } from "react";

export const TIMESTAMP_STATIC_TOP_DRILL = 5;
export const TIMESTAMP_DYNAMIC_TOP_DRILL = 14;
export const TIMESTAMP_TOP_FULL_SWING_CHALLENGE = 24;

const useVideoEffect = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [accordionIndex, setAccordionIndex] = useState(-1);

  const updateVideoState = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      const currentTime = video.currentTime;
      const duration = video.duration || 1;
      const newScrollPercent = (currentTime / duration) * 100;
      setScrollPercent(newScrollPercent);

      let newAccordionIndex = -1;
      if (currentTime >= TIMESTAMP_TOP_FULL_SWING_CHALLENGE) {
        newAccordionIndex = 2;
      } else if (currentTime >= TIMESTAMP_DYNAMIC_TOP_DRILL) {
        newAccordionIndex = 1;
      } else if (currentTime >= TIMESTAMP_STATIC_TOP_DRILL) {
        newAccordionIndex = 0;
      }
      setAccordionIndex(newAccordionIndex);
    }
  }, []);

  const handleVideoEnd = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      trackEvent("fullVideoWatch", { videoDuration: video.duration });
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const animationFrame = { current: 0 };

      const animate = () => {
        updateVideoState();
        animationFrame.current = requestAnimationFrame(animate);
      };

      animationFrame.current = requestAnimationFrame(animate);

      video.addEventListener("ended", handleVideoEnd);

      return () => {
        cancelAnimationFrame(animationFrame.current);
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [updateVideoState]);

  const setVideoTime = useCallback((time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  }, []);

  const handleAccordionToggle = useCallback(
    (index: number) => {
      setAccordionIndex(index);
      switch (index) {
        case 0:
          setVideoTime(TIMESTAMP_STATIC_TOP_DRILL);
          break;
        case 1:
          setVideoTime(TIMESTAMP_DYNAMIC_TOP_DRILL);
          break;
        case 2:
          setVideoTime(TIMESTAMP_TOP_FULL_SWING_CHALLENGE);
          break;
      }
    },
    [setVideoTime]
  );

  return {
    videoRef,
    scrollPercent,
    accordionIndex,
    handleAccordionToggle,
    setVideoTime,
  };
};

export default useVideoEffect;
