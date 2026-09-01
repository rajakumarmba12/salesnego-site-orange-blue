'use client';

import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';

type StageRotationOptions = {
  stageCount: number;
  cycleDuration: number;
  reducedMotionStage?: number;
};

export function useStageRotation({ stageCount, cycleDuration, reducedMotionStage }: StageRotationOptions) {
  const [activeStage, setActiveStage] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [hiddenPaused, setHiddenPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [rotationRevision, setRotationRevision] = useState(0);
  const remainingTime = useRef(cycleDuration);
  const rotationActive = useRef(false);
  const skipRemainingUpdate = useRef(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      setReduceMotion(motionQuery.matches);
      if (motionQuery.matches && reducedMotionStage !== undefined) {
        skipRemainingUpdate.current = rotationActive.current;
        remainingTime.current = cycleDuration;
        setActiveStage(reducedMotionStage);
      }
    };
    const updateVisibility = () => setHiddenPaused(document.hidden);

    updateMotion();
    updateVisibility();
    motionQuery.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      motionQuery.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, [cycleDuration, reducedMotionStage]);

  const isPaused = hoverPaused || hiddenPaused || reduceMotion;

  useEffect(() => {
    if (isPaused) return;

    const delay = remainingTime.current;
    const startedAt = performance.now();
    rotationActive.current = true;
    const rotation = window.setTimeout(() => {
      rotationActive.current = false;
      skipRemainingUpdate.current = true;
      remainingTime.current = cycleDuration;
      setActiveStage((stage) => (stage + 1) % stageCount);
    }, delay);

    return () => {
      window.clearTimeout(rotation);
      rotationActive.current = false;
      if (skipRemainingUpdate.current) {
        skipRemainingUpdate.current = false;
        return;
      }
      remainingTime.current = Math.max(0, delay - (performance.now() - startedAt));
    };
  }, [activeStage, cycleDuration, isPaused, rotationRevision, stageCount]);

  const selectStage = useCallback((stage: number) => {
    skipRemainingUpdate.current = rotationActive.current;
    remainingTime.current = cycleDuration;
    setActiveStage(stage);
    setRotationRevision((revision) => revision + 1);
  }, [cycleDuration]);

  const pauseOnPointer = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'touch' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setHoverPaused(true);
    }
  }, []);

  const resumeOnPointer = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'touch') setHoverPaused(false);
  }, []);

  return { activeStage, hoverPaused, isPaused, pauseOnPointer, reduceMotion, resumeOnPointer, selectStage };
}
