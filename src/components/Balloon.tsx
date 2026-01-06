import { useEffect, useState } from "react";

interface BalloonProps {
  color: string;
  delay: number;
  left: string;
}

const Balloon = ({ color, delay, left }: BalloonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none animate-balloon z-10"
      style={{
        left,
        animationDelay: `${delay}ms`,
        bottom: "-100px",
      }}
    >
      <svg width="50" height="70" viewBox="0 0 50 70">
        <ellipse cx="25" cy="25" rx="20" ry="25" fill={color} opacity="0.9" />
        <ellipse cx="25" cy="25" rx="18" ry="23" fill={color} opacity="0.7" />
        <ellipse cx="18" cy="18" rx="4" ry="6" fill="white" opacity="0.4" />
        <polygon points="25,48 22,55 28,55" fill={color} />
        <path
          d="M25,55 Q27,62 25,70"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export const FloatingBalloons = () => {
  const balloons = [
    { color: "hsl(340, 70%, 65%)", delay: 0, left: "5%" },
    { color: "hsl(270, 40%, 75%)", delay: 2000, left: "15%" },
    { color: "hsl(25, 80%, 80%)", delay: 4000, left: "25%" },
    { color: "hsl(340, 70%, 75%)", delay: 6000, left: "75%" },
    { color: "hsl(270, 50%, 70%)", delay: 8000, left: "85%" },
    { color: "hsl(45, 90%, 65%)", delay: 10000, left: "95%" },
  ];

  return (
    <>
      {balloons.map((balloon, index) => (
        <Balloon key={index} {...balloon} />
      ))}
    </>
  );
};

export default Balloon;
