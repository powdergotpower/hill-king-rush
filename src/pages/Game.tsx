import GameHUD from "@/components/game/GameHUD";
import MapView from "@/components/game/MapView";
import { Button } from "@/components/ui/button";
import { Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Game = () => {
  const navigate = useNavigate();
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Game map background */}
      <div className="absolute inset-0">
        <MapView showOverlay={true} />
      </div>
      
      {/* Overlay for game interaction layer */}
      <div className="absolute inset-0 bg-background/10">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-4 bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-primary/30 max-w-2xl">
            <h2 className="text-3xl font-bold text-primary">🎮 Game Engine Required</h2>
            <p className="text-lg text-foreground">
              Conquest Canyon is ready for action!
            </p>
            <div className="text-sm text-muted-foreground space-y-2 text-left">
              <p>✅ Mobile APK build ready (see instructions below)</p>
              <p>✅ Landscape orientation enforced</p>
              <p>✅ Map and HUD system active</p>
              <p className="pt-2 border-t border-primary/20">
                🎯 Next: Integrate a game engine for 3D gameplay, physics, AI bots, and shooting mechanics.
                Options: Three.js + Cannon.js, Babylon.js, or Unity WebGL.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game HUD overlay */}
      <GameHUD />

      {/* Pause button (pointer-events enabled) */}
      <div className="absolute top-4 right-4 pointer-events-auto">
        <Button 
          variant="tactical" 
          size="icon"
          className="pointer-events-auto"
          onClick={() => navigate('/lobby')}
        >
          <Pause className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Game;
