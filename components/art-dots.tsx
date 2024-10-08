"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const CanvasComponent = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadP5 = async () => {
      const { p5i } = await import("p5i");
      const p5 = p5i();

      let w = window.innerWidth;
      let h = window.innerHeight;
      let offsetY = window.scrollY;

      const SCALE = 200;
      const LENGTH = 10;
      const SPACING = 15;

      const existingPoints = new Set<string>();
      const points: { x: number; y: number; opacity: number }[] = [];

      const getForceOnPoint = (x: number, y: number, z: number) => {
        return (p5.noise(x / SCALE, y / SCALE, z) - 0.5) * 2 * p5.TWO_PI;
      };

      const addPoints = () => {
        for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
          for (let y = -SPACING / 2; y < h + offsetY + SPACING; y += SPACING) {
            const id = `${x}-${y}`;
            if (existingPoints.has(id)) continue;
            existingPoints.add(id);
            points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 });
          }
        }
      };

      const setup = () => {
        p5.createCanvas(w, h);
        p5.background("#ffffff");
        p5.stroke("#ccc");
        p5.noFill();
        p5.noiseSeed(+new Date());

        addPoints();
      };

      const draw = ({ circle }: ReturnType<typeof p5i>) => {
        p5.background("#ffffff");
        const t = +new Date() / 10000;

        for (const p of points) {
          const { x, y } = p;
          const rad = getForceOnPoint(x, y, t);
          const length = (p5.noise(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH;
          const nx = x + p5.cos(rad) * length;
          const ny = y + p5.sin(rad) * length;
          p5.stroke(200, 200, 200, (Math.abs(p5.cos(rad)) * 0.8 + 0.2) * p.opacity * 255);
          circle(nx, ny - offsetY, 1);
        }
      };

      const restart = () => {
        if (canvasRef.current) {
          p5.mount(canvasRef.current, { setup, draw });
        }
      };

      restart();

      const handleResize = () => {
        w = window.innerWidth;
        h = window.innerHeight;
        p5.resizeCanvas(w, h);
        addPoints();
      };

      window.addEventListener("resize", handleResize);

      // Uncomment to enable scroll-based animation
      // Though there is some lag when scrolling, not sure if it's solvable
      // window.addEventListener('scroll', () => {
      //   offsetY = window.scrollY;
      //   addPoints();
      // }, { passive: true });

      return () => {
        p5.unmount();
        window.removeEventListener("resize", handleResize);
      };
    };

    loadP5();
  }, []);

  return (
    <motion.div
      ref={canvasRef}
      className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 -z-10 dark:invert"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};

export default CanvasComponent;
