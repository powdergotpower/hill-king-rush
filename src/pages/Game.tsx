import GameHUD from "@/components/game/GameHUD";
import GameControls from "@/components/game/GameControls";
import { Button } from "@/components/ui/button";
import { Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import mapImage from "@/assets/conquest-canyon-map.jpg";

const Game = () => {
  const navigate = useNavigate();
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const [currentWeapon, setCurrentWeapon] = useState("Assault Rifle");
  const [ammo, setAmmo] = useState(30);
  const [isReloading, setIsReloading] = useState(false);

  const handleMove = (x: number, y: number) => {
    // Update player position based on joystick input
    setPlayerPosition(prev => ({
      x: Math.max(0, Math.min(100, prev.x + x * 2)),
      y: Math.max(0, Math.min(100, prev.y + y * 2))
    }));
  };

  const handleFire = () => {
    if (ammo > 0 && !isReloading) {
      setAmmo(prev => prev - 1);
      toast({
        title: "🔫 FIRE!",
        description: `${currentWeapon} fired! Ammo: ${ammo - 1}/30`,
        duration: 1000,
      });
    } else if (ammo === 0) {
      toast({
        title: "⚠️ Out of Ammo",
        description: "Reload your weapon!",
        duration: 1500,
      });
    }
  };

  const handleReload = () => {
    if (ammo < 30 && !isReloading) {
      setIsReloading(true);
      toast({
        title: "🔄 Reloading...",
        description: "Please wait",
        duration: 2000,
      });
      setTimeout(() => {
        setAmmo(30);
        setIsReloading(false);
        toast({
          title: "✅ Reload Complete",
          description: `${currentWeapon} ready!`,
          duration: 1500,
        });
      }, 2000);
    }
  };

  const handleJump = () => {
    toast({
      title: "🦘 JUMP",
      description: "Player jumped!",
      duration: 800,
    });
  };

  const handleWeaponChange = () => {
    const weapons = ["Assault Rifle", "Sniper Rifle", "Shotgun", "Pistol", "SMG"];
    const currentIndex = weapons.indexOf(currentWeapon);
    const nextWeapon = weapons[(currentIndex + 1) % weapons.length];
    setCurrentWeapon(nextWeapon);
    setAmmo(30);
    toast({
      title: "🔫 Weapon Changed",
      description: `Switched to ${nextWeapon}`,
      duration: 1500,
    });
  };

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Game map background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${mapImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/40" />
      </div>

      {/* Player indicator */}
      <div 
        className="absolute w-8 h-8 bg-primary rounded-full border-2 border-white shadow-glow transition-all duration-100"
        style={{
          left: `${playerPosition.x}%`,
          top: `${playerPosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
          YOU
        </div>
      </div>

      {/* Game HUD overlay */}
      <GameHUD />

      {/* Game Controls */}
      <GameControls 
        onMove={handleMove}
        onFire={handleFire}
        onReload={handleReload}
        onJump={handleJump}
        onWeaponChange={handleWeaponChange}
      />

      {/* Pause button */}
      <div className="absolute top-4 right-4 pointer-events-auto z-50">
        <Button 
          variant="danger" 
          size="icon"
          onClick={() => navigate('/lobby')}
        >
          <Pause className="w-5 h-5" />
        </Button>
      </div>

      {/* Current weapon and ammo display */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-40">
        <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/40 rounded-lg px-6 py-2">
          <p className="text-center font-bold text-primary text-xl">{currentWeapon}</p>
          <p className="text-center text-sm text-muted-foreground">
            {isReloading ? "RELOADING..." : `${ammo}/30`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
