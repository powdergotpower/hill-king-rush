import GameHUD from "@/components/game/GameHUD";
import { Button } from "@/components/ui/button";
import { Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* 3D Game scene would go here - placeholder for now */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-secondary/40">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary">3D Game Scene</h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Full 3D gameplay would render here with Three.js/WebGL
            </p>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              This would include: player controls, weapon mechanics, AI bot behaviors,
              physics, collision detection, and real-time gameplay
            </p>
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
