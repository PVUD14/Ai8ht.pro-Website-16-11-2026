"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroWaveBackground.module.css";
type WaveScene = ReturnType<typeof import("@/lib/heroWaveScene").createWaveScene>;
type DeviceNavigator = Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };

export function HeroWaveBackground() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const device = navigator as DeviceNavigator;
    const constrained = device.connection?.saveData || (device.deviceMemory !== undefined && device.deviceMemory <= 2);
    const compact = window.innerWidth < 768 || navigator.hardwareConcurrency <= 4;
    const interval = 1000 / (compact ? 24 : 30);
    let scene: WaveScene | undefined;
    let disposed = false, loading = false, visible = false, failed = false;
    let frame = 0, previous = 0, elapsed = 0, slowFrames = 0, frames = 0;
    let px = 0, py = 0, targetX = 0, targetY = 0;
    const mode = (value: string) => { host.dataset.waveState = value; };
    const stop = () => { cancelAnimationFrame(frame); frame = 0; previous = 0; };
    const resize = () => {
      if (!scene || !host.clientWidth || !host.clientHeight) return;
      scene.resize(host.clientWidth, host.clientHeight);
      scene.render(elapsed, px, py);
    };
    const tick = (now: number) => {
      frame = 0;
      if (disposed || !scene || !visible || document.hidden || failed) return;
      if (motion.matches) { mode("fallback"); return; }
      if (!previous) previous = now;
      const delta = now - previous;
      if (delta >= interval) {
        elapsed += Math.min(delta, 80) / 1000;
        previous = now - (delta % interval);
        px += (targetX - px) * 0.025;
        py += (targetY - py) * 0.025;
        scene.render(elapsed, px, py);
        frames++;
        if (frames % 30 === 0) host.dataset.waveFrames = String(frames);
        slowFrames = delta > 140 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
        if (slowFrames > 12) {
          failed = true; scene.dispose(); scene = undefined; mode("fallback"); return;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = async () => {
      stop();
      if (disposed) return;
      if (motion.matches || constrained || failed) { mode("fallback"); return; }
      if (!visible || document.hidden) { mode(scene ? "paused" : "pending"); return; }
      if (!scene) {
        if (loading) return;
        loading = true;
        try {
          const { createWaveScene } = await import("@/lib/heroWaveScene");
          if (disposed || motion.matches || document.hidden || !visible) return;
          scene = createWaveScene(canvas, compact);
          resize();
        } catch {
          failed = true;
          scene?.dispose();
          scene = undefined;
          mode("fallback");
          return;
        } finally { loading = false; }
      }
      mode("running");
      frame = requestAnimationFrame(tick);
    };
    const onMotion = () => {
      if (motion.matches) stop();
      void sync();
    };
    const onVisibility = () => { void sync(); };
    const onContextLost = (event: Event) => {
      event.preventDefault();
      stop(); failed = true; mode("fallback");
    };
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || compact || motion.matches || !visible) return;
      const rect = host.getBoundingClientRect();
      targetX = (event.clientX - rect.left) / rect.width - 0.5;
      targetY = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; void sync(); }, { threshold: 0.01 });
    const sizing = new ResizeObserver(resize);
    observer.observe(host);
    sizing.observe(host);
    motion.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    canvas.addEventListener("webglcontextlost", onContextLost);
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      disposed = true; stop(); observer.disconnect(); sizing.disconnect();
      motion.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      window.removeEventListener("pointermove", onPointer);
      scene?.dispose();
    };
  }, []);

  return (
    <div ref={hostRef} className={styles.wave} data-wave-state="pending" aria-hidden="true">
      {/* A captured frame of this renderer, never a supplied design screenshot. */}
      <img className={styles.fallback} src="/images/hero-wave-fallback.png" alt="" width={1440} height={650} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
