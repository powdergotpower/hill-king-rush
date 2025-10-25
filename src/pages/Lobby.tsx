import { Button } from "@/components/ui/button";
import Leaderboard from "@/components/game/Leaderboard";
import { Play, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold text-primary">ROCK KING</h1>
          <p className="text-lg text-muted-foreground">Conquest Canyon</p>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-card border-2 border-primary/30 rounded-2xl p-8 shadow-tactical">
          {/* Match Info */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-secondary/50 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Map</p>
              <p className="text-xl font-bold text-foreground">Conquest Canyon</p>
            </div>
            <div className="bg-secondary/50 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Players</p>
              <p className="text-xl font-bold text-foreground">8 (1 Human + 7 AI)</p>
            </div>
          </div>

          {/* Start Match Button */}
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full h-20 text-3xl font-bold animate-pulse-glow"
            onClick={() => navigate('/game')}
          >
            <Play className="w-8 h-8" />
            START MATCH
          </Button>

          {/* Quick Info */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="bg-card/30 p-3 rounded-lg">
              <p className="text-xs text-muted-foreground">Objective</p>
              <p className="text-sm font-bold text-primary">King's Hill</p>
            </div>
            <div className="bg-card/30 p-3 rounded-lg">
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="text-sm font-bold text-primary">5 Minutes</p>
            </div>
            <div className="bg-card/30 p-3 rounded-lg">
              <p className="text-xs text-muted-foreground">Mode</p>
              <p className="text-sm font-bold text-primary">Solo vs AI</p>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <Leaderboard />

        {/* Back Button */}
        <div className="flex justify-center gap-4">
          <Button variant="tactical" onClick={() => navigate('/')}>
            <LogOut className="w-5 h-5" />
            Back to Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
