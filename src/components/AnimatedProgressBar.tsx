import { useEffect, useState } from 'react';

interface AnimatedProgressBarProps {
  label: string;
  percentage: number;
  shouldAnimate: boolean;
  color?: 'high' | 'medium' | 'low';
}

const AnimatedProgressBar = ({ label, percentage, shouldAnimate, color = 'high' }: AnimatedProgressBarProps) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setAnimatedWidth(percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, percentage]);

  const getColorClass = () => {
    switch (color) {
      case 'high':
        return 'bg-skill-high';
      case 'medium':
        return 'bg-skill-medium';
      case 'low':
        return 'bg-skill-low';
      default:
        return 'bg-skill-high';
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getColorClass()}`}
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;