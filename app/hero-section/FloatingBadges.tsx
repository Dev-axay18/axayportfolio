// @ts-ignore
import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import Matter from "matter-js";

const badgeFiles = [
  "badge1.png",
  "badge2.png",
  "badge3.png",
  "badge4.png",
  "badge5.png",
  "badge6.png",
  "badge7.png",
  "badge8.png",
  "badge9.png",
  "badge10.png",
  "badge11.png",
  "badge12.png",
];

// Predefined positions outside the center safe zone (avoid 35%-65% for both top and left)
const badgePositions = [
  { top: 0.10, left: 0.08 },
  { top: 0.20, left: 0.70 },
  { top: 0.30, left: 0.20 },
  { top: 0.40, left: 0.80 },
  { top: 0.55, left: 0.10 },
  { top: 0.60, left: 0.75 },
  { top: 0.70, left: 0.30 },
  { top: 0.75, left: 0.80 },
  { top: 0.15, left: 0.75 },
  { top: 0.80, left: 0.15 },
  { top: 0.85, left: 0.85 },
  { top: 0.10, left: 0.85 },
];

const BADGE_SIZE = 64; // px
const SAFE_ZONE = { top: 0.35, left: 0.35, bottom: 0.65, right: 0.65 };

/**
 * FloatingBadges props:
 * @param obstacles Array of { left, top, width, height } in px, relative to the container
 */
const FloatingBadges: React.FC<{
  obstacles?: { left: number; top: number; width: number; height: number }[];
}> = ({ obstacles = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>(
    badgeFiles.map((_, i) => ({ x: 0, y: 0 }))
  );
  const engineRef = useRef<any>(null);
  const bodiesRef = useRef<any[]>([]);
  const mouseConstraintRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Responsive: update world size on window resize
  useEffect(() => {
    function updateDims() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    // Create engine and world
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;
    // Remove gravity
    world.gravity.y = 0;
    world.gravity.x = 0;

    // Create walls
    const w = dimensions.width;
    const h = dimensions.height;
    const thickness = 100;
    const walls = [
      Matter.Bodies.rectangle(w / 2, -thickness / 2, w, thickness, { isStatic: true }), // top
      Matter.Bodies.rectangle(w / 2, h + thickness / 2, w, thickness, { isStatic: true }), // bottom
      Matter.Bodies.rectangle(-thickness / 2, h / 2, thickness, h, { isStatic: true }), // left
      Matter.Bodies.rectangle(w + thickness / 2, h / 2, thickness, h, { isStatic: true }), // right
    ];
    Matter.World.add(world, walls);

    // Add static bodies for obstacles (name, image, etc)
    const obstacleBodies = obstacles.map((obs) =>
      Matter.Bodies.rectangle(
        obs.left + obs.width / 2,
        obs.top + obs.height / 2,
        obs.width,
        obs.height,
        { isStatic: true, restitution: 1 }
      )
    );
    Matter.World.add(world, obstacleBodies);

    // Create badge bodies
    const bodies = badgeFiles.map((_, i) => {
      // Place badges at predefined positions
      const pos = badgePositions[i % badgePositions.length];
      const x = pos.left * w;
      const y = pos.top * h;
      return Matter.Bodies.circle(x, y, BADGE_SIZE / 2, {
        restitution: 0.9,
        friction: 0.01,
        frictionAir: 0.02,
        density: 0.001,
      });
    });
    bodiesRef.current = bodies;
    Matter.World.add(world, bodies);

    // Mouse constraint for dragging
    const mouse = Matter.Mouse.create(containerRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    mouseConstraintRef.current = mouseConstraint;
    Matter.World.add(world, mouseConstraint);

    // Animation loop: update React state with badge positions
    let frameId: number;
    const update = () => {
      Matter.Engine.update(engine, 1000 / 60);
      setPositions(
        bodies.map((body) => ({ x: body.position.x, y: body.position.y }))
      );
      frameId = requestAnimationFrame(update);
    };
    update();

    // Clean up
    return () => {
      cancelAnimationFrame(frameId);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      engineRef.current = null;
      bodiesRef.current = [];
      if (mouseConstraintRef.current) {
        Matter.World.remove(world, mouseConstraintRef.current);
        mouseConstraintRef.current = null;
      }
    };
    // eslint-disable-next-line
  }, [dimensions.width, dimensions.height, JSON.stringify(obstacles)]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-20 w-full h-full select-none"
      style={{ touchAction: "none" }}
    >
      {positions.map((pos, i) => (
        <img
          key={badgeFiles[i]}
          src={`/badges/${badgeFiles[i]}`}
          alt={badgeFiles[i]}
          title={badgeFiles[i]}
          className="w-12 h-12 md:w-16 md:h-16 rounded-xl shadow-lg border-2 border-white bg-white/80 transition-transform duration-300 cursor-grab pointer-events-auto"
          style={{
            position: "absolute",
            left: pos.x - BADGE_SIZE / 2,
            top: pos.y - BADGE_SIZE / 2,
            userSelect: "none",
            zIndex: 30,
          }}
          draggable={false}
        />
      ))}
    </div>
  );
};

export default FloatingBadges; 