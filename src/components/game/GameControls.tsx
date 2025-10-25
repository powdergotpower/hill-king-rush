import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crosshair, RotateCcw } from "lucide-react";

interface GameControlsProps {
  onMove: (x: number, y: number) => void;
  onFire: () => void;
  onReload: () => void;
  onJump: () => void;
  onWeaponChange: () => void;
}

const GameControls = ({ onMove, onFire, onReload, onJump, onWeaponChange }: GameControlsProps) => {
  const [moveJoystick, setMoveJoystick] = useState({ x: 0, y: 0 });
  const moveRef = useRef<HTMLDivElement>(null);

  const handleTouchMove = (e: React.TouchEvent, ref: React.RefObject<HTMLDivElement>, callback: (x: number, y: number) => void) => {
    if (!ref.current) return;
    
    const touch = e.touches[0];
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    let deltaX = touch.clientX - centerX;
    let deltaY = touch.clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = rect.width / 2;
    
    if (distance > maxDistance) {
      deltaX = (deltaX / distance) * maxDistance;
      deltaY = (deltaY / distance) * maxDistance;
    }
    
    const normalizedX = deltaX / maxDistance;
    const normalizedY = deltaY / maxDistance;
    
    callback(normalizedX, normalizedY);
  };

  const handleTouchEnd = (callback: (x: number, y: number) => void) => {
    callback(0, 0);
  };

  useEffect(() => {
    onMove(moveJoystick.x, moveJoystick.y);
  }, [moveJoystick, onMove]);

  return (
    <>
      {/* Movement Joystick - Bottom Left */}
      <div className="absolute bottom-8 left-8 pointer-events-auto">
      <div 
          ref={moveRef}
          className="relative w-32 h-32 bg-card/40 backdrop-blur-sm border-2 border-primary/40 rounded-full"
          onTouchMove={(e) => handleTouchMove(e, moveRef, (x, y) => setMoveJoystick({ x, y }))}
          onTouchEnd={() => handleTouchEnd((x, y) => setMoveJoystick({ x, y }))}
        >
          <div 
            className="absolute w-12 h-12 bg-primary rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
            style={{
              transform: `translate(calc(-50% + ${moveJoystick.x * 40}px), calc(-50% + ${moveJoystick.y * 40}px))`
            }}
          />
          {/* Directional indicators */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-primary/60">↑</div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-primary/60">↓</div>
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-primary/60">←</div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-primary/60">→</div>
        </div>
        <p className="text-xs text-center text-muted-foreground mt-2">MOVE</p>
      </div>

      {/* Jump Button - Bottom Center Left */}
      <div className="absolute bottom-8 left-48 pointer-events-auto">
        <Button
          variant="tactical"
          size="lg"
          className="w-20 h-20 rounded-full text-lg font-bold"
          onTouchStart={onJump}
        >
          JUMP
        </Button>
      </div>

      {/* Fire Button - Bottom Right */}
      <div className="absolute bottom-8 right-8 pointer-events-auto">
        <Button
          variant="hero"
          size="lg"
          className="w-32 h-32 rounded-full text-2xl font-bold shadow-glow"
          onTouchStart={onFire}
        >
          <Crosshair className="w-12 h-12" />
        </Button>
        <p className="text-xs text-center text-muted-foreground mt-2">FIRE</p>
      </div>

      {/* Reload Button - Right Side Middle */}
      <div className="absolute right-8 bottom-48 pointer-events-auto">
        <Button
          variant="tactical"
          size="lg"
          className="w-20 h-20 rounded-full"
          onTouchStart={onReload}
        >
          <RotateCcw className="w-8 h-8" />
        </Button>
        <p className="text-xs text-center text-muted-foreground mt-2">RELOAD</p>
      </div>

      {/* Weapon Change Button - Top Right */}
      <div className="absolute right-8 top-32 pointer-events-auto">
        <Button
          variant="tactical"
          size="lg"
          className="w-24 h-16 rounded-lg font-bold"
          onTouchStart={onWeaponChange}
        >
          SWITCH<br/>WEAPON
        </Button>
      </div>
    </>
  );
};

export default GameControls;
