"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import styles from "./PreviewFrame.module.css";

type PreviewFrameProps = {
  children: ReactNode;
  contentWidth: number;
};

/** Fit a complete illustrative interface into the shared dashboard frame. */
export function PreviewFrame({ children, contentWidth }: PreviewFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const content = contentRef.current;
    if (!frame || !content) return;

    const fit = () => {
      const availableWidth = Math.max(0, frame.clientWidth - 24);
      const availableHeight = Math.max(0, frame.clientHeight - 24);
      const width = content.offsetWidth;
      const height = content.offsetHeight;
      if (!width || !height) return;
      const next = Math.min(availableWidth / width, availableHeight / height);
      setScale(current => current !== null && Math.abs(current - next) < 0.0001 ? current : next);
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(frame);
    observer.observe(content);
    return () => observer.disconnect();
  }, [contentWidth]);

  return (
    <div ref={frameRef} className={styles.frame} data-dashboard-frame="true">
      <div
        ref={contentRef}
        className={styles.content}
        data-dashboard-content="true"
        style={{ width: contentWidth, transform: `translate(-50%, -50%) scale(${scale ?? 0})` }}
      >
        {children}
      </div>
    </div>
  );
}
