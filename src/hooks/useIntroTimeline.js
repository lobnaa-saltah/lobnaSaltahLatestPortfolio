import { useState, useEffect } from 'react';
import { INTRO_TIMELINE } from '../constants/introConfig';

export function useIntroTimeline(onFinish) {
  const [phase, setPhase] = useState('start');

  useEffect(() => {
    const timerL = setTimeout(() => setPhase('letterL'), INTRO_TIMELINE.LETTER_L_DELAY);
    const timerS = setTimeout(() => setPhase('letterS'), INTRO_TIMELINE.LETTER_S_DELAY);
    const timerDraw = setTimeout(() => setPhase('drawingCircle'), INTRO_TIMELINE.DRAWING_CIRCLE_DELAY);
    const timerFlash = setTimeout(() => setPhase('flashDot'), INTRO_TIMELINE.FLASH_DOT_DELAY);
    const timerExit = setTimeout(() => setPhase('exit'), INTRO_TIMELINE.EXIT_START_DELAY);
    const timerDone = setTimeout(() => {
      if (typeof onFinish === 'function') {
        onFinish();
      }
    }, INTRO_TIMELINE.TOTAL_DURATION);

    return () => {
      clearTimeout(timerL);
      clearTimeout(timerS);
      clearTimeout(timerDraw);
      clearTimeout(timerFlash);
      clearTimeout(timerExit);
      clearTimeout(timerDone);
    };
  }, [onFinish]);

  return { phase };
}
